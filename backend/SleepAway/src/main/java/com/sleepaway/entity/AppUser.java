package com.sleepaway.entity;

import io.swagger.v3.oas.annotations.Hidden;
import lombok.*;
import org.hibernate.Hibernate;
import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Getter
@Setter
@Table(name = "user")
@NoArgsConstructor
@Hidden
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @NonNull
    @Pattern(regexp="^[A-Za-z]*$", message = "Invalid Input")
    private String name;
    @NonNull
    @Pattern(regexp="^[A-Za-z]*$", message = "Invalid Input")
    @Column(name = "last_name")
    private String lastName;
    @NonNull
    private String city;
    @NonNull
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    @NonNull
    @Size(min = 6, message = "Minimum password length: 8 characters")
    private String password;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        AppUser appUser = (AppUser) o;
        return id != null && Objects.equals(id, appUser.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

}