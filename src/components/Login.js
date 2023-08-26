 import React, { useState } from "react";
 import { Form, Button } from "react-bootstrap";
 import { useNavigate } from "react-router-dom";

 const Login = ({ onLogin }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };

   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
     e.preventDefault();

     // Perform validation and login logic
     // You can also send the data to a server here

     // Simulate a successful login for demonstration
     // In a real app, you would perform actual login logic here
     const isLoginSuccessful = true;

     if (isLoginSuccessful) {
       // Show an alert message
       window.alert("Login successful!");

       // Redirect to the home page using navigate
       navigate("/"); // Replace "/" with the actual path of your home page
     } else {
       // Show an error alert if login fails
       window.alert("Login failed. Please check your credentials.");
     }
   };

   return (
     <div className="login-form">
       <h2>Login</h2>
       <Form onSubmit={handleSubmit}>
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

         <Button type="submit">Login</Button>
       </Form>
     </div>
   );
 };

 export default Login;
