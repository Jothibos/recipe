 import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { Form, Button, Alert } from "react-bootstrap";

 const Register = () => {
   const navigate = useNavigate();
   const [errorMessage, setErrorMessage] = useState("");
   const [user, setUser] = useState({
     username: "",
     email: "",
     password: "",
     confirmPassword: "",
     phone: "",
     address: "",
   });
   const [profileImage, setProfileImage] = useState(null);

   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setUser({ ...user, [name]: value });
   };

   const handleImageChange = (event) => {
     const imageFile = event.target.files[0];
     setProfileImage(imageFile);
   };

   const handleSignUp = async (event) => {
     event.preventDefault();

     const { username, email, password, confirmPassword, phone, address } =
       user;

     if (
       !username ||
       !email ||
       !password ||
       !confirmPassword ||
       !phone ||
       !address
     ) {
       setErrorMessage("Please fill in all the required fields.");
       return;
     }

     if (password !== confirmPassword) {
       setErrorMessage("Passwords do not match.");
       return;
     }

     if (!profileImage) {
       setErrorMessage("Please select a profile image.");
       return;
     }

     const formData = new FormData();
     formData.append("username", username);
     formData.append("email", email);
     formData.append("password", password);
     formData.append("phone", phone);
     formData.append("address", address);
     formData.append("profileImage", profileImage);

     // You can use the formData to send the registration data to your backend API.
     // Example: await fetch("/api/register", { method: "POST", body: formData });

     // Once the registration is successful, navigate to the desired page.
     alert("Account created successfully!");
     navigate("/signin");
   };

   return (
     <div
       style={{
         maxWidth: "400px",
         margin: "0 auto",
         padding: "20px",
         border: "1px solid #ccc",
         borderRadius: "8px",
         backgroundColor: "#fff",
         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
       }}
     >
       <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
         Create an Account
       </h2>
       <Form onSubmit={handleSignUp}>
         <Form.Group controlId="username">
           <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
           <Form.Control
             type="text"
             name="username"
             placeholder="Username"
             onChange={handleInputChange}
           />
         </Form.Group>
         <Form.Group controlId="email">
           <Form.Label style={{ fontWeight: "bold" }}>Email ID</Form.Label>
           <Form.Control
             type="email"
             name="email"
             placeholder="Email ID"
             onChange={handleInputChange}
           />
         </Form.Group>
         <Form.Group controlId="password">
           <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
           <Form.Control
             type="password"
             name="password"
             placeholder="Password"
             onChange={handleInputChange}
           />
         </Form.Group>
         <Form.Group controlId="confirmPassword">
           <Form.Label style={{ fontWeight: "bold" }}>
             Confirm Password
           </Form.Label>
           <Form.Control
             type="password"
             name="confirmPassword"
             placeholder="Confirm Password"
             onChange={handleInputChange}
           />
         </Form.Group>
         <Form.Group controlId="phone">
           <Form.Label style={{ fontWeight: "bold" }}>Phone No</Form.Label>
           <Form.Control
             type="tel"
             name="phone"
             placeholder="Phone No"
             onChange={handleInputChange}
           />
         </Form.Group>
         <Form.Group controlId="address">
           <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
           <Form.Control
             type="text"
             name="address"
             placeholder="Address"
             onChange={handleInputChange}
           />
         </Form.Group>
         <Form.Group controlId="profileImage">
           <Form.Label style={{ fontWeight: "bold" }}>Profile Image</Form.Label>
           <Form.Control
             type="file"
             accept="image/*"
             onChange={handleImageChange}
           />
         </Form.Group>
         <Button
           style={{
             backgroundColor: "#007bff",
             color: "#fff",
             border: "none",
             borderRadius: "4px",
             padding: "10px 20px",
             fontSize: "16px",
             cursor: "pointer",
           }}
           variant="primary"
           type="submit"
         >
           Create Account
         </Button>
       </Form>
       {errorMessage && (
         <Alert style={{ marginTop: "10px" }} variant="danger">
           {errorMessage}
         </Alert>
       )}
     </div>
   );
 };

 export default Register;
