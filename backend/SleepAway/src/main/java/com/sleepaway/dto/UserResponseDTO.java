package com.sleepaway.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sleepaway.entity.Role;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


@Data
public class UserResponseDTO {

    @ApiModelProperty(position = 0)
    private Long id;
    @ApiModelProperty(position = 1)
    private String name;
    @ApiModelProperty(position = 2)
    private String lastName;
    @ApiModelProperty(position = 3)
    private String email;
    @ApiModelProperty(position = 4)
    private String city;

    @ApiModelProperty(position = 5)
    @JsonIgnore
    Role role;
}
