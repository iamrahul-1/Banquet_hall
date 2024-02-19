import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 400px;
  margin: 100px auto 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

const StyledButton = styled.input`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registration submitted:", formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Register</h1>

      {/* Username Input */}
      <StyledLabel htmlFor="username">Username:</StyledLabel>
      <StyledInput
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      {/* Email Input */}
      <StyledLabel htmlFor="email">Email:</StyledLabel>
      <StyledInput
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Password Input */}
      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <StyledInput
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {/* Confirm Password Input */}
      <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
      <StyledInput
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <StyledButton type="submit" value="Register" />
    </StyledForm>
  );
};

export default RegisterForm;
