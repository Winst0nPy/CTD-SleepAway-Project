package com.sleepaway.controller;


import com.sleepaway.dto.UserDataDTO;
import com.sleepaway.dto.UserResponseDTO;
import com.sleepaway.entity.AppUser;
import com.sleepaway.exception.CustomException;
import com.sleepaway.service.UserService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user")
@Api(tags = "User")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    @PostMapping("/signin")
    @ApiOperation(value = "Authenticates user and returns its JWT token.")
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 422, message = "Invalid username/password supplied")})
    public ResponseEntity<String> login(
            @ApiParam("email") @RequestParam String email,
            @ApiParam("password") @RequestParam String password) throws CustomException {
        if (userService.findByEmail(email).getRole().getId() == 2) {
            return new ResponseEntity<>((userService.signin(email, password)), HttpStatus.OK);
        } else {
            return new ResponseEntity<>((userService.signin(email, password)), HttpStatus.ACCEPTED);
        }
    }


    @PostMapping("/signup")
    @ApiOperation(value = "Creates user and returns its JWT token")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 422, message = "Username is already in use"),
            @ApiResponse(code = 201, message = "User created successfully")})
    @Validated
    public ResponseEntity<String> signup(@ApiParam("Signup User") @RequestBody UserDataDTO user) throws CustomException {
        return new ResponseEntity<>(userService.signup(modelMapper.map(user, AppUser.class)), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ApiOperation(value = "Deletes specific user by username (ADMIN ONLY)", authorizations =
            {@Authorization(value = "apiKey")})
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The user doesn't exist"),
            @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
    public String delete(@ApiParam("email") @PathVariable String email) {
        if (userService.findByEmail(email).getRole().getId() != 1)
            userService.delete(email);
        return email;
    }

    @GetMapping(value = "/{email}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ApiOperation(value = "Returns specific user by email (ADMIN ONLY)",
            response = UserResponseDTO.class, authorizations = {@Authorization(value = "apiKey")})
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The user doesn't exist"),
            @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
    public ResponseEntity<AppUser> search(@ApiParam("email") @PathVariable String email) throws CustomException {
        if (userService.findByEmail(email).getRole().getId() == 1) {
            return new ResponseEntity<>(userService.search(email), HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }

    @GetMapping(value = "/me")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    @ApiOperation(value = "Returns current user's data - (Needs auth/token)",
            response = UserResponseDTO.class,
            authorizations = {@Authorization(value = "apiKey")})
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 403, message = "Access denied"), //
            @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
    public UserResponseDTO whoami(HttpServletRequest req) {
        return modelMapper.map(userService.whoami(req), UserResponseDTO.class);
    }

    @GetMapping("/refresh")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
    @ApiOperation(value = "Returns a refreshed token - (Needs auth/token)")
    public String refresh(HttpServletRequest req) {
        return userService.refresh(req.getRemoteUser());
    }
    @PutMapping("/role/{email}")
    @RolesAllowed("ROLE_ADMIN")
    public void changeUserRole(@PathVariable String email){
        userService.changeUserRole(email);
    }


}
