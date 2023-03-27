// chooseRecipe returns the recipe that has one correct ingredient in the first bakery and the other ingredient in the other bakery

const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  // The ingredientIndex function returns the index of the ingredient that is supplied by the given bakery
  const ingredientIndex = function (bakery, ingredients) {

    let ingredientsIndex;

    for (let ingredient of ingredients) {

      ingredientsIndex = bakery.indexOf(ingredient);
      if (ingredientsIndex !== -1) {
        
        return ingredientsIndex;
      }

      
    }
  

    return -1;
  }
  
  let ingredientInA; // Index of the ingredient that is in bakery A;
  let ingredientInB;
  let recipeIngredients;

  // If one of the ingredients is in A, the program splices it out of the recipeIngredients array
  // so that it only searches the remaining ingredient in Bakery B.

  for (let recipe of recipes) {

    recipeIngredients = recipe.ingredients;
    ingredientInA = ingredientIndex(bakeryA, recipeIngredients);
    
    if (ingredientInA === -1) {
      continue;
    }

    recipeIngredients.splice(ingredientInA, 1);

    ingredientInB = ingredientIndex(bakeryB, recipeIngredients);
  
    if (ingredientInB === -1) {
      continue;
    }

    return recipe.name;

  }

  console.log("Valid Recipe not found");
  return false;

}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));