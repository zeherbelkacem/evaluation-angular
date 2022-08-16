package com.fms.booking.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "booking_item")
public class BookingItem implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "QUANTITY")
    private int quantity;

    @Column(name = "ITEM_PRICE")
    private double itemPrice;

    @ManyToOne
    @JsonIgnore
    private Booking booking;

    @OneToOne
    private Room room;
}