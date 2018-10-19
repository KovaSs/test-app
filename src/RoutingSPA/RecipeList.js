import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import NewRecipe from './NewRecipe'

const RecipeList = ({match}) => (
  <div>
    <h1> Recipies List!</h1>
    <NavLink to={`${match.url}/new`}>NewRecipe</NavLink>

    <Route path={`${match.url}/new`} component={NewRecipe}/>
  </div>
)

export default RecipeList
