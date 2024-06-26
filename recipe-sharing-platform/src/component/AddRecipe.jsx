// src/components/AddRecipe.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipe = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe); 
    navigate("/recipes");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Recipe</h2>
        <label>
          Title:
          <input type="text" name="title" value={recipe.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={recipe.description} onChange={handleChange} required />
        </label>
        <label>
          Ingredients:
          <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        </label>
        <label>
          Preparation Steps:
          <textarea name="steps" value={recipe.steps} onChange={handleChange} required />
        </label>
        <label>
          Image:
          <input type="file" name="image" onChange={handleImageChange} required />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
