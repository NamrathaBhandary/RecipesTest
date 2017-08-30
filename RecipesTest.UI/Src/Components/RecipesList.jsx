import React from 'react';

class RecipesList extends React.Component{
    render(){
        let {recipes} = this.props;
            return(
                    <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cooking Time</th>
                                <th>Mani Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) =>
                            <tr>
                                <td>{recipe.Name}</td>
                                <td>{recipe.CookingTime}</td>
                                <td>{recipe.MainIngredients}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    </div>)
    };
}

export default RecipesList;