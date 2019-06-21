package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, String> {
   // @Query
    Optional<User> findByFullName(String fullName);

  //  @Query
    Optional<User> findByPhone(String phone);

  //  @Query
    User updateUser(User user);
}