package com.fms.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Builder
public class City implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)

    //TODO unique city
    private Long id;
    private String name;
    private Integer department;


    @OneToMany(mappedBy = "city", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Hotel> hotels = new ArrayList<>();

  /*  public List<Hotel> getCinemas() {
        return cinemas;
    }

    public void setCinemas(List<Hotel> cinemas) {
        this.cinemas = cinemas;
    }

    public City(Long id, String name, Integer department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }*/
}