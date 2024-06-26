import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
// import "./AddRecipes.css";

function AddRecipes({ addRecipe }) {
    const route = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredent, setIngredent] = useState("");
    const [steps, setSteps] = useState("");
    const [imgfile, setImgfile] = useState(null);


    function handleSubmit(e) {
        e.preventDefault();
        const newRecipe = {title,description,ingredent,steps, img:imgfile};
        console.log(newRecipe,"newRecipe");
        addRecipe(newRecipe);
        route("/recipes-list")
        // navigate("/recepielist", { state: { data: newRecipe } });
    }
    function handleChange(e) {
        setImgfile(e.target.files[0]);
    }
    return (
        <div>
        
            <form onSubmit={handleSubmit}>
            <h1>ADD RECIPES IN YOUR LIST</h1>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <textarea
                    name="description"
                    placeholder="discription"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <textarea
                    name="ingredent"
                    placeholder="Ingredent"
                    value={ingredent}
                    onChange={(e) => setIngredent(e.target.value)}
                />
                <textarea
                    name="steps"
                    placeholder="Steps"
                    value={steps}
                    onChange={(e) =>setSteps(e.target.value)}
                />
                <br />
                <input type="file" onChange={handleChange} required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddRecipes;