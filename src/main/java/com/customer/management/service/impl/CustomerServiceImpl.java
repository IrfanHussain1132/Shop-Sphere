package com.customer.management.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.customer.management.dto.CustomerDTO;
import com.customer.management.dto.CustomerRegistrationDTO;
import com.customer.management.dto.CustomerUpdateDTO;
import com.customer.management.exception.DuplicateResourceException;
import com.customer.management.exception.ResourceNotFoundException;
import com.customer.management.model.Customer;
import com.customer.management.repository.CustomerRepository;
import com.customer.management.service.CustomerService;
import com.customer.management.util.CustomerMapper;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomerMapper customerMapper;
    
    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository, 
                              PasswordEncoder passwordEncoder,
                              CustomerMapper customerMapper) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
        this.customerMapper = customerMapper;
    }

    @Override
    @Transactional
    public CustomerDTO registerCustomer(CustomerRegistrationDTO registrationDTO) {
        log.info("Registering new customer with email: {}", registrationDTO.getEmail());
        
        // Check if email already exists
        if (customerRepository.existsByEmail(registrationDTO.getEmail())) {
            log.error("Email {} already in use", registrationDTO.getEmail());
            throw new DuplicateResourceException("Email already in use");
        }
        
        // Check if phone number already exists
        if (customerRepository.existsByPhoneNumber(registrationDTO.getPhoneNumber())) {
            log.error("Phone number {} already in use", registrationDTO.getPhoneNumber());
            throw new DuplicateResourceException("Phone number already in use");
        }
        
        // Create customer entity
        Customer customer = new Customer();
        customer.setFirstName(registrationDTO.getFirstName());
        customer.setLastName(registrationDTO.getLastName());
        customer.setEmail(registrationDTO.getEmail());
        customer.setPhoneNumber(registrationDTO.getPhoneNumber());
        
        // Encode password
        customer.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
        
        // Save customer
        Customer savedCustomer = customerRepository.save(customer);
        log.info("Customer registered successfully with ID: {}", savedCustomer.getId());
        
        return customerMapper.toDTO(savedCustomer);
    }

    @Override
    @Transactional(readOnly = true)
    public CustomerDTO getCustomerById(Long id) throws ResourceNotFoundException {
        log.info("Fetching customer with ID: {}", id);
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("Customer not found with ID: {}", id);
                    return new ResourceNotFoundException("Customer not found with ID: " + id);
                });
        
        return customerMapper.toDTO(customer);
    }

    @Override
    @Transactional(readOnly = true)
    public CustomerDTO getCustomerByEmail(String email) throws ResourceNotFoundException {
        log.info("Fetching customer with email: {}", email);
        Customer customer = customerRepository.findByEmail(email)
                .orElseThrow(() -> {
                    log.error("Customer not found with email: {}", email);
                    return new ResourceNotFoundException("Customer not found with email: " + email);
                });
        
        return customerMapper.toDTO(customer);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CustomerDTO> getAllCustomers() {
        log.info("Fetching all customers");
        List<Customer> customers = customerRepository.findAll();
        return customers.stream()
                .map(customerMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public CustomerDTO updateCustomer(Long id, CustomerUpdateDTO updateDTO) throws ResourceNotFoundException {
        log.info("Updating customer with ID: {}", id);
        
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("Customer not found with ID: {}", id);
                    return new ResourceNotFoundException("Customer not found with ID: " + id);
                });
        
        // Update fields if provided
        if (updateDTO.getFirstName() != null) {
            customer.setFirstName(updateDTO.getFirstName());
        }
        
        if (updateDTO.getLastName() != null) {
            customer.setLastName(updateDTO.getLastName());
        }
        
        if (updateDTO.getEmail() != null && !updateDTO.getEmail().equals(customer.getEmail())) {
            if (customerRepository.existsByEmail(updateDTO.getEmail())) {
                throw new DuplicateResourceException("Email already in use");
            }
            customer.setEmail(updateDTO.getEmail());
        }
        
        if (updateDTO.getPhoneNumber() != null && !updateDTO.getPhoneNumber().equals(customer.getPhoneNumber())) {
            if (customerRepository.existsByPhoneNumber(updateDTO.getPhoneNumber())) {
                throw new DuplicateResourceException("Phone number already in use");
            }
            customer.setPhoneNumber(updateDTO.getPhoneNumber());
        }
        
        Customer updatedCustomer = customerRepository.save(customer);
        log.info("Customer updated successfully");
        
        return customerMapper.toDTO(updatedCustomer);
    }

    @Override
    @Transactional
    public void deleteCustomer(Long id) throws ResourceNotFoundException {
        log.info("Deleting customer with ID: {}", id);
        
        if (!customerRepository.existsById(id)) {
            log.error("Customer not found with ID: {}", id);
            throw new ResourceNotFoundException("Customer not found with ID: " + id);
        }
        
        customerRepository.deleteById(id);
        log.info("Customer deleted successfully");
    }
}