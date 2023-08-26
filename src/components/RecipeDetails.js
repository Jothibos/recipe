 // RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe }) => {
  const { name, image, ingredients, instructions } = recipe;

  return (
    <div className="recipe-details">
      <img src={`/images/${image}`} alt={name} />
      <h2>{name}</h2>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions:</h3>
        <ol>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
