// src/components/RecipeList.js
import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className="list-container">
      <h2>Recipe List</h2>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {recipe.image && <img src={recipe.image} alt={recipe.title} />}
          <Link to={`/recipes/${index}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
