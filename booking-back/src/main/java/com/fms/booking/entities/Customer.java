package com.fms.booking.entities;

import com.fms.booking.security.entities.Uuser;
import com.fms.booking.utils.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customer")
@Data @AllArgsConstructor @NoArgsConstructor
public class Customer {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    @Column(unique = true)
    private String phone;

    @Column
    private Address address;

    @ManyToOne
    private Uuser uuser;

    @OneToMany(mappedBy = "customer")
    private List<Booking> bookings = new java.util.ArrayList<>();
}