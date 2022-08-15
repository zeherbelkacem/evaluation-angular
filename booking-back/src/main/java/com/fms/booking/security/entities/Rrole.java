package com.fms.booking.security.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Table(name = "roles")
public class Rrole {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roleId;

    @Column(name = "ROLE")
    private String role;

    @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER)
    private List<Uuser> users = new ArrayList<Uuser>();

    public Rrole(long id, String role) {
        this.roleId = id;
        this.role = role;
    }


}
