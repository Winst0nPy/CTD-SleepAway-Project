package com.sleepaway.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long id;
    @NonNull
    private String name;
    @Column(name="description", columnDefinition = "TEXT")
    @NonNull
    private String description;
    @NonNull
    private Double latitude;
    @NonNull
    private Double longitude;

    @ManyToOne()
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    @JoinColumn(name = "product_id")
    private Set<Image> images = new HashSet<>();

    @ManyToOne(
            cascade =CascadeType.PERSIST)
    @JoinColumn(name = "location_id")
    private Location location;

    @ManyToOne(
            cascade =CascadeType.PERSIST)
    @JoinColumn(name = "policy_id")
    private Policy policy;

    @OneToMany(mappedBy = "product")
    private List<Rating> ratings = new ArrayList<>();

    @OneToMany(mappedBy = "product", orphanRemoval = true)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade={CascadeType.MERGE, CascadeType.REFRESH })
    @JoinTable(
            name = "feature_has_product",
            joinColumns = {@JoinColumn(name = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "feature_id")})
    private Set<Feature> features = new HashSet<>();

    @OneToMany(mappedBy = "product")
    private Set<Review> reviews = new LinkedHashSet<>();

}
