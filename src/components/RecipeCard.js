 // RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  const { name, image, description } = recipe;

  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={`/images/${image}`} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default RecipeCard;
