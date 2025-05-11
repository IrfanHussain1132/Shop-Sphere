package com.klu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klu.entity.User;
import com.klu.service.UserService;
import com.klu.util.Cryptography;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AppController {

    @Autowired
    private UserService userService;

    private Cryptography cryp = new Cryptography();

    // Home test endpoint
    @GetMapping("/home")
    public String home() {
        return "Welcome to E-Commerce Backend - Auth Module";
    }

    // Signup
    @PostMapping("/signup")
    public String registerUser(@RequestBody User user) {
        // Check if user with email already exists
        if (userService.existsByEmail(user.getEmail())) {
            return "Error: Email already registered.";
        }
        // Encrypt password
        user.setPassword(cryp.encryptData(user.getPassword()));
        return userService.insertUser(user);
    }

    // Login
    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.retrieveUser(user);
    }
}
