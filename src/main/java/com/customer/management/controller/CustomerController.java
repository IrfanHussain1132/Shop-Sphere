package com.customer.management.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.customer.management.dto.CustomerDTO;
import com.customer.management.dto.CustomerRegistrationDTO;
import com.customer.management.dto.CustomerUpdateDTO;
import com.customer.management.service.CustomerService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/customers")
@Slf4j
@Tag(name = "Customer API", description = "Endpoints for managing customers")
public class CustomerController {

    private final CustomerService customerService;
    
    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    
    @PostMapping
    @Operation(
        summary = "Register a new customer",
        description = "Creates a new customer with the provided information",
        responses = {
            @ApiResponse(responseCode = "201", description = "Customer created successfully",
                         content = @Content(schema = @Schema(implementation = CustomerDTO.class))),
            @ApiResponse(responseCode = "400", description = "Invalid input data"),
            @ApiResponse(responseCode = "409", description = "Email or phone number already in use")
        }
    )
    public ResponseEntity<CustomerDTO> registerCustomer(@Valid @RequestBody CustomerRegistrationDTO registrationDTO) {
        log.info("Received request to register customer: {}", registrationDTO.getEmail());
        CustomerDTO customerDTO = customerService.registerCustomer(registrationDTO);
        return new ResponseEntity<>(customerDTO, HttpStatus.CREATED);
    }
    
    @GetMapping("/{id}")
    @Operation(
        summary = "Get customer by ID",
        description = "Returns a customer based on a unique ID",
        responses = {
            @ApiResponse(responseCode = "200", description = "Customer found",
                         content = @Content(schema = @Schema(implementation = CustomerDTO.class))),
            @ApiResponse(responseCode = "404", description = "Customer not found")
        }
    )
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable Long id) {
        log.info("Received request to get customer with ID: {}", id);
        CustomerDTO customerDTO = customerService.getCustomerById(id);
        return ResponseEntity.ok(customerDTO);
    }
    
    @GetMapping
    @Operation(
        summary = "Get all customers",
        description = "Returns a list of all customers",
        responses = {
            @ApiResponse(responseCode = "200", description = "List of customers retrieved")
        }
    )
    public ResponseEntity<List<CustomerDTO>> getAllCustomers() {
        log.info("Received request to get all customers");
        List<CustomerDTO> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }
    
    @PutMapping("/{id}")
    @Operation(
        summary = "Update customer",
        description = "Updates a customer's information",
        responses = {
            @ApiResponse(responseCode = "200", description = "Customer updated successfully",
                         content = @Content(schema = @Schema(implementation = CustomerDTO.class))),
            @ApiResponse(responseCode = "400", description = "Invalid input data"),
            @ApiResponse(responseCode = "404", description = "Customer not found"),
            @ApiResponse(responseCode = "409", description = "Email or phone number already in use")
        }
    )
    public ResponseEntity<CustomerDTO> updateCustomer(
            @PathVariable Long id, 
            @Valid @RequestBody CustomerUpdateDTO updateDTO) {
        log.info("Received request to update customer with ID: {}", id);
        CustomerDTO updatedCustomer = customerService.updateCustomer(id, updateDTO);
        return ResponseEntity.ok(updatedCustomer);
    }
    
    @DeleteMapping("/{id}")
    @Operation(
        summary = "Delete customer",
        description = "Deletes a customer based on their ID",
        responses = {
            @ApiResponse(responseCode = "204", description = "Customer deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Customer not found")
        }
    )
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        log.info("Received request to delete customer with ID: {}", id);
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}