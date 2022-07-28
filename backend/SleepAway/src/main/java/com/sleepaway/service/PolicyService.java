package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.PolicyDTO;
import com.sleepaway.entity.Policy;
import com.sleepaway.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    @Autowired
    private ObjectMapper mapper;

    public PolicyDTO savePolicy(PolicyDTO policyDTO){
        Policy policyEntity = mapper.convertValue(policyDTO, Policy.class);
        Policy savedPolicy = policyRepository.save(policyEntity);
        return mapper.convertValue(savedPolicy, PolicyDTO.class);
    }

    public PolicyDTO findById(Long id) {
        Policy policy = policyRepository.findById(id).orElseThrow();
        return mapper.convertValue(policy, PolicyDTO.class);
    }
}
