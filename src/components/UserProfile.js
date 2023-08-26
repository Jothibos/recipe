 import React from "react";
 import { Card } from "react-bootstrap";
 import { useLocation } from "react-router-dom";

 const UserProfile = () => {
   const location = useLocation();
   const userData = location.state;

   // Destructure user data safely
   const { username, email } = userData || {};

   return (
     <div className="profile">
       <h2>Profile</h2>
       <Card style={{ width: "18rem" }}>
         <Card.Body>
           <Card.Title>{username}</Card.Title>
           <Card.Text>{email}</Card.Text>
         </Card.Body>
       </Card>
     </div>
   );
 };

 export default UserProfile;
