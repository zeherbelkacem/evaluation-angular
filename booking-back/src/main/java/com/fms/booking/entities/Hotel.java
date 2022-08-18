package com.fms.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fms.booking.security.entities.Uuser;
import com.fms.booking.utils.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String phone;

    @Embedded
    private Address address;

    private int star;

    @OneToMany(mappedBy = "hotel")
    @JsonIgnore
    private List<Room> rooms = new ArrayList<>();

    @ManyToOne()
    private City city;

    @ManyToMany()
    private List<Image> images = new ArrayList<Image>();

    @ManyToOne()
    private Uuser user;
}