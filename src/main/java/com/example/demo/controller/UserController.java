package com.example.demo.controller;


import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/add")
    public User addUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @DeleteMapping("/user/delete")
    public User deleteUser(@RequestBody User user){
         userRepository.delete(user);
         return null;
    }

    @PutMapping("/user/update")
    public User updateUser(@RequestBody User user){
       return userRepository.updateUser(user);
    }

    @GetMapping("/users/{full-name}")
    public User searchByFullName(@PathVariable("fullName") String fullName){
        return userRepository.findByFullName(fullName).orElse(null);
    }

    @GetMapping("/users/{phone}")
    public User searchByPhone(@PathVariable("phone") String phone){
        return userRepository.findByPhone(phone).orElse(null);

    }


}
