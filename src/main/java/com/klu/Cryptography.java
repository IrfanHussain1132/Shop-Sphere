package com.klu;

import java.security.MessageDigest;
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public class Cryptography {

    private static final String SECRET_KEY = "BALAJEE"; // Change this to a secure key in real projects

    // Encrypt password for signup
    public String encryptPassword(String password) {
        try {
            SecretKey secretKey = generateKey(SECRET_KEY);
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] encryptedBytes = cipher.doFinal(password.getBytes());
            return Base64.getEncoder().encodeToString(encryptedBytes);
        } catch (Exception e) {
            e.printStackTrace(); // Use logger in real projects
            return null;
        }
    }

    // Decrypt password if needed (usually not used in login for security reasons)
    public String decryptPassword(String encryptedPassword) {
        try {
            SecretKey secretKey = generateKey(SECRET_KEY);
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(encryptedPassword));
            return new String(decryptedBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Generate secret AES key using SHA-256 hash of the passphrase
    private SecretKey generateKey(String key) throws Exception {
        MessageDigest sha = MessageDigest.getInstance("SHA-256");
        byte[] keyBytes = sha.digest(key.getBytes("UTF-8"));
        return new SecretKeySpec(keyBytes, 0, 16, "AES");
    }
}
