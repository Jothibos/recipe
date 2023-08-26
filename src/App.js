 import React, { useState } from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import "./App.css";
 import Header from "./components/Header";
 import RecipeList from "./components/RecipeList";
 import RecipeDetails from "./components/RecipeDetails";
 import Footer from "./components/Footer";
 import Login from "./components/Login";
 import Register from "./components/Register";
 import UserProfile from "./components/UserProfile";
 import recipesData from "./data/recipes.json";

 function App() {
   const [selectedRecipe, setSelectedRecipe] = useState(null);
   const [searchQuery, setSearchQuery] = useState("");

   const handleRecipeClick = (recipe) => {
     setSelectedRecipe(recipe);
   };

   const handleSearchChange = (searchTerm) => {
     setSearchQuery(searchTerm);
     setSelectedRecipe(null);
   };

   const filteredRecipes = recipesData.recipes.filter((recipe) =>
     recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const recipesToDisplay = searchQuery ? filteredRecipes : recipesData.recipes;

   return (
     <Router>
       <div className="app">
         <Header onSearchChange={handleSearchChange} />
         <main className="app-main">
           <Routes>
             <Route
               path="/"
               element={
                 <RecipeList
                   recipes={recipesToDisplay}
                   onRecipeClick={handleRecipeClick}
                 />
               }
             />
             <Route
               path="/details/:recipeId"
               element={<RecipeDetails recipe={selectedRecipe} />}
             />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/profile" element={<UserProfile />} />
           </Routes>
         </main>
         <Footer />
       </div>
     </Router>
   );
 }

 export default App;