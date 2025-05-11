package com.customer.management.service;

import java.util.List;

import com.customer.management.dto.CustomerDTO;
import com.customer.management.dto.CustomerRegistrationDTO;
import com.customer.management.dto.CustomerUpdateDTO;
import com.customer.management.exception.ResourceNotFoundException;

public interface CustomerService {
    
    CustomerDTO registerCustomer(CustomerRegistrationDTO registrationDTO);
    
    CustomerDTO getCustomerById(Long id) throws ResourceNotFoundException;
    
    CustomerDTO getCustomerByEmail(String email) throws ResourceNotFoundException;
    
    List<CustomerDTO> getAllCustomers();
    
    CustomerDTO updateCustomer(Long id, CustomerUpdateDTO updateDTO) throws ResourceNotFoundException;
    
    void deleteCustomer(Long id) throws ResourceNotFoundException;
}