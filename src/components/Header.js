 import React, { useState } from "react";
 import { Link } from "react-router-dom";
 import { FaSearch, FaUser, FaSignInAlt, FaHome } from "react-icons/fa"; // Added FaHome icon

 const Header = ({ onSearchChange }) => {
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = (e) => {
     const newSearchTerm = e.target.value;
     setSearchTerm(newSearchTerm);
     onSearchChange(newSearchTerm);
   };

   const getRandomColor = () => {
     const colors = ["#f06292", "#64b5f6", "#81c784", "#ffb74d", "#ba68c8"];
     return colors[Math.floor(Math.random() * colors.length)];
   };

   const headerStyle = {
     background: getRandomColor(),
   };

   return (
     <header className="app-header" style={headerStyle}>
       <div className="logo-container">
         <img
           src={process.env.PUBLIC_URL + "/images/cooking-logo.png"}
           alt="Cooking Logo"
         />
         <h1>Recipe App</h1>
         <div className="nav-links-container">
           <Link to="/">
             <FaHome className="icon" /> Home
           </Link>
         </div>
       </div>
       <div className="search-container">
         <input
           type="text"
           placeholder="Search for recipes..."
           value={searchTerm}
           onChange={handleSearch}
         />
         <FaSearch className="search-icon" />
       </div>
       <div className="nav-links-container">
         <Link to="/login">
           <FaSignInAlt className="icon" /> Login
         </Link>
         <Link to="/register">
           <FaUser className="icon" /> Register
         </Link>
         <Link to="/profile">
           <FaUser className="icon" /> Profile
         </Link>
       </div>
     </header>
   );
 };

 export default Header;
