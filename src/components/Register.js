 import React, { useState } from "react";
 import { Form, Button } from "react-bootstrap";
 import { Link, useNavigate } from "react-router-dom"; // Use useNavigate
 import { auth, firestore } from "../firebaseConfig";

  const Register = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!username || !email || !password) {
        setShowError(true);
        return;
      }

      setShowError(false);

      try {
        // Register logic using Firebase Authentication
        await auth.createUserWithEmailAndPassword(email, password);

        // Optional: Update user profile with username
        const user = auth.currentUser;
        if (user) {
          await user.updateProfile({
            displayName: username,
          });

          // Save user details to Firestore
          await firestore.collection("users").doc(user.uid).set({
            username: username,
            email: email,
          });

          // Show alert and handle redirection
          alert("Registration successful. Click OK to go to the login page.");
          navigate("/login"); // Redirect to the login page using navigate
        }
      } catch (error) {
        console.error("Error creating user:", error);
        // Handle error, show error message, etc.
      }
    };

    return (
      <div className="centered-container">
        <div className="register-form">
          <h2>Register</h2>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
          {showError && (
            <div className="error-message">
              Please fill in all required fields.
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button type="submit">Register</Button>
          </Form>
        </div>
      </div>
    );
  };

 export default Register;
