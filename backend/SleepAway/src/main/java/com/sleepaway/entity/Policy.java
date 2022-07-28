package com.sleepaway.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "policy")
public class Policy {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String check_in;
    private String check_out;

    private Boolean extra_bed;
    private Boolean smoke_policy;
    private Boolean noise_policy;
    private Boolean only_cash;
    private String child_policy;

    @Column(name="security_and_health", columnDefinition = "TEXT")
    private String security_and_health;

    private String cancellation_policy;
}