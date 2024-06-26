
import './App.css';
import {Routes,Route} from "react-router-dom"
import {useState} from "react"
import AddRecipes from './recipecomponent/AddRecipes';
import RecipesList from './recipecomponent/RecipesList';
import RecipesDetail from './recipecomponent/RecipesDetails';

function App() {

  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<AddRecipes addRecipe={addRecipe}/>}/>
    <Route path="/recipes-list" element={<RecipesList recipes={recipes}/>}/>
    <Route path="/recipes-detail/:id" element={<RecipesDetail recipes={recipes}/>}/>

  

</Routes>
    </div>
  );
}

export default App;