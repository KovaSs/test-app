import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
// import RecipeList from './RecipeList'
import NewRecipe from './NewRecipe'
import Recipe from './Recipe'
import Page404 from './Page404'

const activeStyle = {
  color: 'red'
}

export const recipes = [
  {
  id: 1,
  name: "Борщ"
  },
  {
    id: 2,
    name: "Суп"
  },
  {
    id: 3,
    name: "Cалат"
  }]

const App = () => (
  <Router>
    <div>
      <NavLink activeStyle = {activeStyle} to = '/recepies/new'>
        New Recipe
      </NavLink>
      <h2> Список рецептов:</h2>
      {
        recipes.map(recipe => (<div key={recipe.id}><NavLink activeStyle={activeStyle} to={`/recipes/${recipe.id}`}>{recipe.name}</NavLink></div>))
      }

      <Switch>
        <Route path = "/recepies/new" component = {NewRecipe}/>
        <Route path = "/recipes/:id" component = {Recipe}/>
        <Route path = "*" component = {Page404}/>
      </Switch>
    </div>
  </Router>
)

export default App