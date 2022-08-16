package com.fms.booking.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "room")
@Data @AllArgsConstructor @NoArgsConstructor
public class Room implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "QUANTITY")
    private int quantity = 1;
    @ManyToOne
    private Hotel hotel;

    private boolean available;

    private double price;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;
}