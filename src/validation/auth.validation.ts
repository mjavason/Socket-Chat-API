import { z } from 'zod';

class Validation {
  // Validation schema for user registration
  register = {
    body: z.object({
      firstname: z.string().min(1).max(255),
      lastname: z.string().min(1).max(255),
      email: z.string().min(1).max(255).email(), // Check for a valid email address
      role: z.enum(['user', 'admin']),
      password: z.string().min(5), // Adjust the password requirements as needed
    }),
  };

  // Validation schema for user login
  login = {
    body: z.object({
      email: z.string().min(1).max(255).email(), // Check for a valid email address
      password: z.string().min(5), // Adjust the password requirements as needed
    }),
  };

  // Validation schema for resetting the user's password via email
  resetPasswordEmail = {
    params: z.object({
      email: z.string().email(), // Ensure the email format is valid
    }),
  };

  // Validation schema for resetting the user's password with a token
  resetPasswordToken = {
    body: z.object({
      token: z.string().min(1).max(255), // Define token validation rules as needed
      newPassword: z.string().min(5), // Adjust the password requirements as needed
    }),
  };
}

export const authValidation = new Validation();
