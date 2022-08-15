package com.fms.booking.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

/**
 *
 * @author Stagiaires11P
 *
 */

@Data @NoArgsConstructor @AllArgsConstructor
@Embeddable
public class Address {


    private String address;

    private String address2;

    private String codeZip;

    private String city;

    private String country;

}

