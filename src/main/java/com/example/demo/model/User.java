package com.example.demo.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import java.time.LocalDate;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

//@Document(collection = "users")
@Entity
        //(collection = "user")
public class User {

    @Id
//   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String phone;

    private LocalDate localDateTime;

    @Email
    private String email;

    private String address;

}
