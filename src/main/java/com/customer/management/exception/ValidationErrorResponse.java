package com.customer.management.exception;

import java.time.LocalDateTime;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ValidationErrorResponse extends ErrorResponse {
    private Map<String, String> validationErrors;
    
    public ValidationErrorResponse(LocalDateTime timestamp, int status, String error, 
                                  String message, String path, Map<String, String> validationErrors) {
        super(timestamp, status, error, message, path);
        this.validationErrors = validationErrors;
    }
}