import React from 'react';
import ReactDOM from 'react-dom';
import RecipesList from './Src/Components/RecipesList';


let recipes = MockData.recipes;
ReactDOM.render(<RecipesList recipes = {recipes} />,document.getElementById('test'));
