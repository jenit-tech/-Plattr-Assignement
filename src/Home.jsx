import { Component } from 'react';
import './index.css';

class Form extends Component {
  state = {
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    cookingTime: '',
    isSuccess: false,
    titleErrorMsg: '',
    ingredientsErrorMsg: '',
    instructionsErrorMsg: '',
    categoryErrorMsg: '',
    cookingTimeErrorMsg: '',
    recipes: [
      // Predefined recipes
      {
        title: 'Appam (Kerala Rice Pancake)',
        ingredients: '1 cup raw rice, 2 tbsp cooked rice, 1/4 cup grated coconut, 1 tsp sugar, Salt to taste, 1/2 tsp yeast (optional)',
        instructions: 'Soak raw rice for 4 hours and then grind it with cooked rice, grated coconut, and a little water to make a smooth batter. Add sugar, salt, and yeast (if using). Mix well and let it ferment for 6-8 hours. Heat a non-stick appam pan, pour a ladle of batter, and swirl it around. Cover with a lid and cook until the edges are crispy and the center is soft.',
        category: 'Breakfast',
        cookingTime: '20 minutes (excluding fermentation)',
      },
      {
        title: 'Kerala Fish Curry',
        ingredients: '500g fish (like kingfish or mackerel), 1 cup coconut milk, 2 tbsp coconut oil, 1 tbsp tamarind paste, 1/2 tsp turmeric powder, 1 tbsp chili powder, 1 tbsp coriander powder, Salt to taste, Curry leaves, 2-3 green chilies, 1-inch ginger (chopped)',
        instructions: 'Heat coconut oil in a pan. Add curry leaves, green chilies, and ginger. Sauté for a few minutes. Add turmeric, chili powder, and coriander powder. Sauté until the spices are cooked. Add tamarind paste and salt, then pour in coconut milk and bring it to a simmer. Add the fish pieces and cook for about 10-15 minutes until the fish is tender.',
        category: 'Main Course',
        cookingTime: '30 minutes',
      },
      {
        title: 'Avial (Mixed Vegetable Curry with Coconut)',
        ingredients: '1 cup mixed vegetables (carrot, beans, drumstick, pumpkin, yam, etc.), 1/2 cup grated coconut, 2 green chilies, 1/2 tsp cumin seeds, 1/2 tsp turmeric powder, 1 cup yogurt, Salt to taste, Curry leaves, coconut oil',
        instructions: 'Cook the vegetables with turmeric powder and salt until tender. Grind coconut, green chilies, and cumin seeds to a coarse paste. Add the coconut paste and yogurt to the vegetables, mixing well. Simmer for a few minutes. Add coconut oil and curry leaves on top before serving.',
        category: 'Main Course (Vegetarian)',
        cookingTime: '25 minutes',
      },
      {
        title: 'Puttu (Steamed Rice Cake)',
        ingredients: '1 cup rice flour (roasted), 1/2 cup grated coconut, Water, as needed, Salt to taste',
        instructions: 'Mix rice flour and salt, adding water little by little to create a crumbly texture. In a puttu maker, layer grated coconut and rice flour alternately. Steam for about 10-15 minutes until cooked. Serve hot with banana or curry.',
        category: 'Breakfast',
        cookingTime: '20 minutes',
      },
      {
        title: 'Kerala Parippu Curry (Lentil Curry)',
        ingredients: '1/2 cup moong dal (yellow split gram), 1/2 cup coconut milk, 1/2 tsp turmeric powder, 1 tsp cumin seeds, 1 green chili, Salt to taste, Curry leaves, 1 tbsp coconut oil',
        instructions: 'Cook moong dal with turmeric powder and salt until soft. Grind coconut milk with cumin seeds and green chili. Add the coconut paste to the dal and simmer for a few minutes. Temper with coconut oil and curry leaves.',
        category: 'Main Course (Vegetarian)',
        cookingTime: '30 minutes',
      },
    ], // Default predefined recipes
  };

  updateTitle = (event) => this.setState({ title: event.target.value });
  updateIngredients = (event) => this.setState({ ingredients: event.target.value });
  updateInstructions = (event) => this.setState({ instructions: event.target.value });
  updateCategory = (event) => this.setState({ category: event.target.value });
  updateCookingTime = (event) => this.setState({ cookingTime: event.target.value });

  onSubmitForm = (event) => {
    event.preventDefault();
    const { title, ingredients, instructions, category, cookingTime } = this.state;

    let titleErrorMsg = '';
    let ingredientsErrorMsg = '';
    let instructionsErrorMsg = '';
    let categoryErrorMsg = '';
    let cookingTimeErrorMsg = '';

    if (title === '') {
      titleErrorMsg = 'Title Field is Empty';
    }
    if (ingredients === '') {
      ingredientsErrorMsg = 'Ingredients Field is Empty';
    }
    if (instructions === '') {
      instructionsErrorMsg = 'Instructions Field is Empty';
    }
    if (category === '') {
      categoryErrorMsg = 'Category Field is Empty';
    }
    if (cookingTime === '') {
      cookingTimeErrorMsg = 'Cooking Time Field is Empty';
    }

    if (titleErrorMsg || ingredientsErrorMsg || instructionsErrorMsg || categoryErrorMsg || cookingTimeErrorMsg) {
      this.setState({
        titleErrorMsg,
        ingredientsErrorMsg,
        instructionsErrorMsg,
        categoryErrorMsg,
        cookingTimeErrorMsg,
      });
    } else {
      // If no errors, add the recipe to the list
      const newRecipe = {
        title,
        ingredients,
        instructions,
        category,
        cookingTime,
      };

      this.setState((prevState) => ({
        isSuccess: true,
        recipes: [...prevState.recipes, newRecipe], // Add the new recipe to the list
        title: '',
        ingredients: '',
        instructions: '',
        category: '',
        cookingTime: '',
        titleErrorMsg: '',
        ingredientsErrorMsg: '',
        instructionsErrorMsg: '',
        categoryErrorMsg: '',
        cookingTimeErrorMsg: '',
      }));
    }
  };

  addButton = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      isSuccess: false,
    }));
  };

  renderTitleField = () => {
    const { title, titleErrorMsg } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="title" className="input-label">
          Title
        </label>
        <input
          type="text"
          value={title}
          className="input-field"
          id="title"
          placeholder="Enter Recipe Title"
          onChange={this.updateTitle}
        />
        {titleErrorMsg && <p className="error-msg">{titleErrorMsg}</p>}
      </div>
    );
  };

  renderIngredientsField = () => {
    const { ingredients, ingredientsErrorMsg } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="ingredients" className="input-label">
          Ingredients
        </label>
        <textarea
          className="input-textarea"
          id="ingredients"
          value={ingredients}
          rows="4"
          placeholder="Enter Ingredients"
          onChange={this.updateIngredients}
        ></textarea>
        {ingredientsErrorMsg && <p className="error-msg">{ingredientsErrorMsg}</p>}
      </div>
    );
  };

  renderInstructionsField = () => {
    const { instructions, instructionsErrorMsg } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="instructions" className="input-label">
          Instructions
        </label>
        <textarea
          className="input-textarea"
          id="instructions"
          value={instructions}
          rows="4"
          placeholder="Enter Instructions"
          onChange={this.updateInstructions}
        ></textarea>
        {instructionsErrorMsg && <p className="error-msg">{instructionsErrorMsg}</p>}
      </div>
    );
  };

  renderCategoryField = () => {
    const { category, categoryErrorMsg } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="category" className="input-label">
          Category
        </label>
        <input
          type="text"
          value={category}
          className="input-field"
          id="category"
          placeholder="Enter Recipe Category"
          onChange={this.updateCategory}
        />
        {categoryErrorMsg && <p className="error-msg">{categoryErrorMsg}</p>}
      </div>
    );
  };

  renderCookingTimeField = () => {
    const { cookingTime, cookingTimeErrorMsg } = this.state;
    return (
      <div className="input-container">
        <label htmlFor="cookingTime" className="input-label">
          Cooking Time (in minutes)
        </label>
        <input
          type="number"
          value={cookingTime}
          className="input-field"
          id="cookingTime"
          placeholder="Enter Cooking Time"
          onChange={this.updateCookingTime}
        />
        {cookingTimeErrorMsg && <p className="error-msg">{cookingTimeErrorMsg}</p>}
      </div>
    );
  };

  renderRecipeList = () => {
    const { recipes } = this.state;
    return (
     
      <div className="recipe-list">
        <h2>Recipe List</h2>
       
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
          </div>
        ))}
        </div>
      
    
    );
  };

  render() {
    const { isSuccess } = this.state;
    return (
      <div className="app-container">
        <div className="app-card">
          {/* Render Recipe List First */}
         
          {this.renderRecipeList()}
          

          {/* Render Form Second */}
          {isSuccess ? (
            <div>
              <h1 className="success-message">Recipe Submitted Successfully</h1>
              <button onClick={this.addButton} className="button">
                Add Another Recipe
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={this.onSubmitForm}>
              {this.renderTitleField()}
              {this.renderIngredientsField()}
              {this.renderInstructionsField()}
              {this.renderCategoryField()}
              {this.renderCookingTimeField()}
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
