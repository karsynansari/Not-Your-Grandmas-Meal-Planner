RecipeMealPlan.destroy_all
Recipe.destroy_all
MealPlan.destroy_all
User.destroy_all
Ingredient.destroy_all
Direction.destroy_all

puts "seeding users"
U1 = User.create(username: "Peter", password_digest: "")
U2 = User.create(username: "Karsyn", password_digest: "")
U3 = User.create(username: "Martha", password_digest: "")
puts "users seeded"

puts "seeding recipes"
R1 = Recipe.create(cuisine: "Italian" , title: "Lasagna" , image: "https://image.shutterstock.com/image-photo/piece-tasty-hot-lasagna-served-600w-1696262635.jpg" , meal_type: "Dinner" , serving: 2, prep_time: "45 mins" , cook_time: "45 mins" , user_id: U1.id)
R2 = Recipe.create(cuisine: "Japanese" , title: "Vegetarian Ramen", image: "https://image.shutterstock.com/image-photo/vegetarian-ramen-smoked-tofu-pickled-600w-788330659.jpg" , meal_type: "Dinner", serving: 2 , prep_time: "30 mins", cook_time: "20 mins", user_id: U2.id)
R3 = Recipe.create(cuisine: "American" , title: "Fried Chicken" , image: "https://image.shutterstock.com/image-photo/crispy-kentucky-fried-chicken-wooden-600w-368008064.jpg" , meal_type: "Dinner" , serving: 4 , prep_time: "1 hr", cook_time: "20 mins", user_id: U2.id)
R4 = Recipe.create(cuisine: "Thai" , title: "Red Curry", image: "https://image.shutterstock.com/image-photo/thai-curry-red-soupthailand-tradition-600w-768840226.jpg" , meal_type:"Dinner", serving: 4 , prep_time: "1 hr" , cook_time: "30 mins" , user_id: U3.id )
puts "recipes seeded"

puts "seeding ingredients"
I1= Ingredient.create(each_ingredient: "marinara", quantity: 1, measurement: "jar", recipe_id: R1.id)
I2= Ingredient.create(each_ingredient: "shredded mozzarella", quantity: 16 , measurement: "oz", recipe_id: R1.id)
I3= Ingredient.create(each_ingredient: "no-bake lasagna noodles", quantity: 1, measurement: "lb", recipe_id: R1.id )
I4= Ingredient.create(each_ingredient: "ramen noodles", quantity: 1 , measurement: "lb", recipe_id: R2.id)
I5= Ingredient.create(each_ingredient: "soy sauce", quantity: 2 , measurement: "tsps", recipe_id: R2.id )
I6= Ingredient.create(each_ingredient: "bok choy", quantity: 1, measurement: "head", recipe_id: R2.id )
I7= Ingredient.create(each_ingredient: "chicken breasts", quantity: 4, measurement: "pieces", recipe_id: R3.id)
I8= Ingredient.create(each_ingredient: "breadcrumbs", quantity: 1, measurement: "cup", recipe_id: R3.id )
I9= Ingredient.create(each_ingredient: "eggs", quantity: 2, measurement: "eggs", recipe_id: R3.id)
I10= Ingredient.create(each_ingredient: "red curry paste", quantity: 2, measurement: "tbsps", recipe_id: R4.id )
I11= Ingredient.create(each_ingredient: "garlic", quantity: 4, measurement: "cloves", recipe_id: R4.id)
I12= Ingredient.create(each_ingredient: "yellow onion", quantity: 1 , measurement: "onion", recipe_id: R4.id)
puts "ingredients seeded"

puts "seeding directions"
D1 = Direction.create(step: 1, instructions: "Coat the bottom of a glass pan with marinara", recipe_id: R1.id )
D2 = Direction.create(step: 2, instructions: "Add a layer of lasagna noodles", recipe_id: R1.id )
D3 = Direction.create(step: 3 , instructions: "Add another layer of marinara", recipe_id: R1.id)
D4 = Direction.create(step: 1 , instructions: "Cook the ramen noodles according to package instructions", recipe_id: R2.id )
D5 = Direction.create(step: 2, instructions: "Chop bok choy in bite-sized strips", recipe_id: R2.id)
D6 = Direction.create(step: 3 , instructions: "Stir-fry bok choy in soy sauce", recipe_id: R2.id)
D7 = Direction.create(step: 1 , instructions: "Whisk eggs together", recipe_id: R3.id)
D8 = Direction.create(step: 2 , instructions: "Dip each chicken breast in egg wash", recipe_id: R3.id)
D9 = Direction.create(step: 3 , instructions: "Coat each egg-washed chicken breast in breadcrumbs", recipe_id: R3.id)
D10 = Direction.create(step: 1, instructions: "Dice onions and garlic", recipe_id: R4.id)
D11 = Direction.create(step: 2,  instructions: "Sautee onions and garlic in oil until translucent", recipe_id: R4.id)
D12 = Direction.create(step: 3 , instructions: "Add other veggies, coconut milk, and red curry paste into the pan with onions and garlic", recipe_id: R4.id)
puts "directions seeded "

puts "seeding meal plans"
MP1 = MealPlan.create(title: "This week", user_id: U2.id)
MP2 = MealPlan.create(title: "Next week", user_id: U2.id)
puts "meal plans seeded "

puts "seeding recipe meal plan join"
RMP1 = RecipeMealPlan.create(recipe_id: R1.id, meal_plan_id: MP2.id)
RMP2 = RecipeMealPlan.create(recipe_id: R2.id, meal_plan_id: MP2.id)
RMP3 = RecipeMealPlan.create(recipe_id: R2.id, meal_plan_id: MP1.id)
puts "reciple meal plan join seeded"