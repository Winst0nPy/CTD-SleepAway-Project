package com.sleepaway.controller;

import com.sleepaway.dto.PolicyDTO;
import com.sleepaway.service.PolicyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/api/policy")
@CrossOrigin("*")
@Api(tags = "Policy")
public class PolicyController {


    @Autowired
    private PolicyService policyService;

    @PostMapping()
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong, bad request"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code=200,message="The Policy was created successfully")})
    public ResponseEntity<PolicyDTO> save(@RequestBody PolicyDTO policyDTO) {
        PolicyDTO policyDTOSave=  policyService.savePolicy(policyDTO);
        return ResponseEntity.ok(policyDTOSave);
    }

    @GetMapping("/{id}")
    @ApiResponses(value = {
            @ApiResponse(code = 200,message = "Feature found"),
            @ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access denied"),
            @ApiResponse(code = 404, message = "The Policy doesn't exist")})
    public ResponseEntity<PolicyDTO> findById(@PathVariable("id") Long id) {
        PolicyDTO policy = policyService.findById(id);
        return ResponseEntity.ok(policy);
    }
    


}
