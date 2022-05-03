# Not Your Grandma's Meal Planner
## Description 

Welcome to Not Your Grandma’s Meal Planner, a meal planning app and community recipe board. Personally, I’ve been using Pinterest to find recipes, and each week I just write them all down into a meal plan. This is meant to be a way to simplify your meal planning and let you find recipes, contribute recipes, and plan your meals all in one place. 

## Technology 

To build this application, I used a React frontend, Ruby on Rails for the backend, and a combination of React Bootstrap and custom CSS for styling. I used BCrypt to securely hash user passwords for the login feature. 

## User Journey 

- On the welcome page, the user can either choose to create an account or log in with an existing account
- Upon login/sign-up, a user will be transported to the homepage
    - Here, they may search recipes and click on recipes to see the expanded recipe information 
- Then, users can visit Meal Plans, where they can create an unlimited amount meal plans
    - Once a user creats a meal plan, they will be able to add recipes to that meal plan via a dynamically populating dropdown menu on each recipe card
    - Users can also delete recipes from their meal plans or delete an entire meal plan 
- Users can also Contribute a Recipe by filling out a form and submitting a recipe to the database. The recipe then appears in the recipes library
- If a user logs out and logs in again, their meal plans are saved and are always accessible up on login 

## Future State 

- I hope to soon deploy this application using Heroku 
- Create a form with incrementing form for users to add directions and ingredients to their recipes 
- Create an “account” page where users can manage their account info
- Manage Recipes page where users can edit and delete the recipes that they’ve personally contributed
- "Favorite" feature so users can easily return to recipes they enjoyed 
- Filter recipe by dietary restriction, cuisine, & meal typle 
