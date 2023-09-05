  import React, { useState } from "react";
 import { useNavigate, Link } from "react-router-dom";
 import { Form, Button, Alert } from "react-bootstrap";

 const Login = () => {
   const navigate = useNavigate();
   const [errorMessage, setErrorMessage] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

   const handleSignIn = (event) => {
     event.preventDefault();

     // Trim the input values to remove whitespace
     const trimmedEmail = email.trim();
     const trimmedPassword = password.trim();

     // Check if the entered credentials match any user's data
     const validUser = usersData.find(
       (user) =>
         user.email === trimmedEmail && user.password === trimmedPassword
     );

     if (validUser) {
       alert("Sign In successful!");

       // Simulate the user data after successful login

       // Redirect to the home page after successful sign-in
       navigate("/");
     } else {
       setErrorMessage(" fill out email or password. Please try again.");
     }
   };

   const formStyles = {
     maxWidth: "400px",
     margin: "0 auto",
     padding: "20px",
     border: "1px solid #ccc",
     borderRadius: "8px",
     backgroundColor: "#fff",
     boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
   };

   const labelStyles = {
     fontWeight: "bold",
   };

   const inputStyles = {
     width: "100%",
     padding: "10px",
     border: "1px solid #ccc",
     borderRadius: "4px",
     backgroundColor: "#f7f7f7",
     fontSize: "14px",
   };

   const buttonStyles = {
     backgroundColor: "#007bff",
     color: "#fff",
     border: "none",
     borderRadius: "4px",
     padding: "10px 20px",
     fontSize: "16px",
     cursor: "pointer",
   };

   const alertStyles = {
     marginTop: "10px",
   };

   return (
     <div style={formStyles}>
       <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Sign In</h2>
       <Form onSubmit={handleSignIn}>
         <Form.Group controlId="email">
           <Form.Label style={labelStyles}>Email ID</Form.Label>
           <Form.Control
             style={inputStyles}
             type="email"
             name="email"
             placeholder="Email ID"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </Form.Group>
         <Form.Group controlId="password">
           <Form.Label style={labelStyles}>Password</Form.Label>
           <Form.Control
             style={inputStyles}
             type="password"
             name="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </Form.Group>
         <Button style={buttonStyles} variant="primary" type="submit">
           Login
         </Button>
       </Form>
       {errorMessage && (
         <Alert style={alertStyles} variant="danger">
           {errorMessage}
         </Alert>
       )}
       <div style={{ marginTop: "20px", textAlign: "center" }}>
         user credentials <Link to="/"> Login</Link>
         <br />
         Don't have an account? <Link to="/signup">Sign Up</Link>
       </div>
     </div>
   );
 };

 


 export default Login;
