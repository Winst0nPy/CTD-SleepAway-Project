package com.sleepaway.dto;

import lombok.*;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PolicyDTO  {
    private  Long id;
    private  String check_in;
    private  String check_out;
    private  String child_policy;
    private  Boolean extra_bed;
    private  Boolean smoke_policy;
    private  Boolean noice_policy;
    private  String security_and_health;
    private  String cancelation_policy;
    private  Boolean only_cash;
}
