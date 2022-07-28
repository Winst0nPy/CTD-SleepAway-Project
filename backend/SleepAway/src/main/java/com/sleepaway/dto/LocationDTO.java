package com.sleepaway.dto;

import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LocationDTO  {
    private  Long id;
    private  String street;
    private  String number;
    private  String city;
    private  String province;
    private  String country;

}
