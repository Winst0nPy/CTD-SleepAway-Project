package com.sleepaway.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sleepaway.dto.FeatureDTO;
import com.sleepaway.entity.Feature;
import com.sleepaway.repository.FeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class FeatureService {
    @Autowired
    private FeatureRepository featureRepository;

    @Autowired
    ObjectMapper mapper;

    public Feature findById(Long id) {
        return featureRepository.findById(id).orElseThrow();
    }

    public FeatureDTO saveFeature(FeatureDTO feature) {
        Feature featureEntity = mapper.convertValue(feature, Feature.class);
        Feature savedFeature = featureRepository.save(featureEntity);
        return mapper.convertValue(savedFeature, FeatureDTO.class);
    }

    public void saveFeatureToDB(Set<Feature> featureToAdd) {
        featureToAdd.forEach(
                        feature -> {
                            if (feature != null) {
                                Feature hasFeature = featureRepository.findByNameAndReactIcon(feature.getName(), feature.getReact_icon());
                                if(hasFeature == null)
                                    featureRepository.save(mapper.convertValue(feature, Feature.class));
                            }
                        });
    }

    public Set<Feature> removeDuplicateFeatures(Set<Feature> features){
        HashSet<String> seen = new HashSet<>();
        features.removeIf(f -> !seen.add(f.getName() + f.getReact_icon()));
        return features;
    }

    public void deleteById(Long id) {
        featureRepository.findById(id).orElseThrow();
        featureRepository.deleteById(id);
    }

    public FeatureDTO findAllFeatures() {
        List<Feature> featurePage = featureRepository.findAll();
        return mapper.convertValue(featurePage, FeatureDTO.class);
    }

    public List<Feature> findAll(){
        return featureRepository.findAll();
    }

    public Feature findFeatureById(Long id) {
        return featureRepository.findById(id).orElseThrow();
    }

    public Feature findFeatureByNameAndReactIcon(String name, String reactIcon){
        return featureRepository.findByNameAndReactIcon(name, reactIcon);
    }

    public Set<Feature> handleFeatures(Set<Feature> features){
        saveFeatureToDB(features);
        return features
                .stream()
                .map(feature -> findFeatureByNameAndReactIcon(feature.getName(), feature.getReact_icon()))
                .collect(Collectors.toSet());
    }


}
