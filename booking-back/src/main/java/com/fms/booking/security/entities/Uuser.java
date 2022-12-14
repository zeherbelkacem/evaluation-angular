package com.fms.booking.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fms.booking.entities.Customer;
import com.fms.booking.entities.Hotel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USERS")
public class Uuser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(name = "USER_NAME")
    private String userName;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private Boolean active;

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Rrole> roles = new ArrayList<>();

    @OneToMany(mappedBy = "uuser")
    @JsonIgnore
    private List<Customer> customers;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Hotel> hotels;
    @Override
    public String toString() {
        return "Uuser [userId=" + userId + ", userName=" + userName + ", password=" + password + ", active=" + active
                + ", roles=" + roles + "]";
    }

    public Uuser(long userId, @NotNull String userName,

                 @NotNull String password, Boolean active) {
        super();
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.active = active;
    }

    public Uuser(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

}
