package com.sleepaway.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sleepaway.entity.Role;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDataDTO {

    @ApiModelProperty(position = 0)
    private String name;
    @ApiModelProperty(position = 1)
    private String lastName;
    @ApiModelProperty(position = 2)
    private String email;
    @ApiModelProperty(position = 3)
    private String city;

    @ApiModelProperty(position = 4)
    @JsonIgnore
    private Role role = new Role((byte) 2, "ROLE_CLIENT");

    @ApiModelProperty(position = 5)
    private String password;
}
