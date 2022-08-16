package com.fms.booking.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "booking")
@Data @AllArgsConstructor @NoArgsConstructor
public class Booking implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "ORDER_NB")
    private long orderNb;

    @Column(name = "DATE")
    private Date date;

    @Column(name = "TOTAL_PRICE")
    private double totalPrice;

    @OneToMany(mappedBy = "booking")
    private List<BookingItem> bookingItems = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

}