import React from 'react'
import recipes from './index'

console.log(recipes)
const Recipe = ({match}) => (
  <div>
    <h1>{`Рецепт №${match.params.id}`}</h1>
    <p>
      {recipes.length && recipes.find((recipe) => recipe.id === match.params.id).name}
    </p>
  </div>
)

export default Recipe