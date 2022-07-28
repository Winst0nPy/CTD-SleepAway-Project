package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.ProductDTO;
import com.sleepaway.dto.UserDataDTO;
import com.sleepaway.entity.AppUser;
import com.sleepaway.exception.CustomException;
import com.sleepaway.repository.UserRepository;
import com.sleepaway.security.components.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    private ObjectMapper mapper;

    public String signin(String email, String password) throws CustomException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
            return jwtTokenProvider.createToken(email, userRepository.findByEmail(email).getRole());
        } catch (AuthenticationException e) {
            throw new CustomException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    public String signup(AppUser appUser) throws CustomException {
        // Check if Email exist in the DataBase
        if (!userRepository.existsByEmail(appUser.getEmail())) {
            appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
            userRepository.save(appUser);
            return jwtTokenProvider.createToken(appUser.getEmail(), appUser.getRole());
        }
        throw new CustomException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    public void delete(String username) {
        userRepository.deleteByEmail(username);
    }

    public AppUser search(String username) throws CustomException {
        AppUser appUser = userRepository.findByEmail(username);
        if (appUser == null) {
            throw new CustomException("The user doesn't exist", HttpStatus.NOT_FOUND);
        }
        return appUser;
    }

    public AppUser whoami(HttpServletRequest req) {
        return userRepository.findByEmail(jwtTokenProvider.getEmail(jwtTokenProvider.resolveToken(req)));
    }

    public String refresh(String username) {
        return jwtTokenProvider.createToken(username, userRepository.findByEmail(username).getRole());
    }
    public AppUser findByEmail(String email){
       return userRepository.findByEmail(email);
    }

    public void changeUserRole(String email){
         userRepository.findByEmail(email).getRole().setId((byte) 1);
        userRepository.findByEmail(email).getRole().setName("ROLE_ADMIN");
    }
}
