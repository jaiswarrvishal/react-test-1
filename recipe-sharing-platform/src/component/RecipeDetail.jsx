// src/components/RecipeDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="detail-container">
      <h2>{recipe.title}</h2>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Preparation Steps:</strong> {recipe.steps}</p>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
    </div>
  );
};

export default RecipeDetail;
