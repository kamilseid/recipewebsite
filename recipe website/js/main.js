// ==================== RECIPE DATA ====================
const recipes = [
    {
        id: 1,
        title: "Fluffy Pancakes",
        category: "Breakfast",
        time: "20 mins",
        timeMinutes: 20,
        difficulty: "Easy",
        image: "images/pancakes.png",
        description: "Light and fluffy pancakes served with fresh berries and maple syrup.",
        servings: 4,
        rating: 4.8,
        reviews: 127,
        nutrition: { calories: 320, protein: 8, carbs: 45, fat: 12 },
        ingredients: [
            "2 cups all-purpose flour",
            "2 tsp baking powder",
            "1/4 tsp salt",
            "1 tbsp sugar",
            "2 eggs",
            "1 1/2 cups milk",
            "2 tbsp melted butter",
            "Fresh berries and maple syrup for serving"
        ],
        instructions: [
            "In a large mixing bowl, sift together the flour, baking powder, salt, and sugar to ensure there are no lumps.",
            "Make a well in the center of the dry ingredients and pour in the milk, eggs, and melted butter. Mix gently until just combined; a few lumps are okay. Do not overmix.",
            "Heat a lightly oiled griddle or non-stick frying pan over medium-high heat. You can test the heat by sprinkling a few drops of water; if they dance, it's ready.",
            "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Cook until bubbles form on the surface and the edges look set, then flip and cook until golden brown on the other side.",
            "Serve hot, stacked high with fresh berries and a generous drizzle of maple syrup."
        ]
    },
    {
        id: 2,
        title: "Quinoa Salad",
        category: "Lunch",
        time: "25 mins",
        timeMinutes: 25,
        difficulty: "Medium",
        image: "images/salad.png",
        description: "A refreshing and healthy quinoa salad with avocado, cherry tomatoes, and lemon dressing.",
        servings: 4,
        rating: 4.6,
        reviews: 89,
        nutrition: { calories: 280, protein: 10, carbs: 35, fat: 14 },
        ingredients: [
            "1 cup quinoa",
            "2 cups water",
            "1 avocado, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 cucumber, diced",
            "1/4 cup olive oil",
            "2 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Rinse the quinoa thoroughly under cold running water in a fine-mesh sieve to remove bitterness.",
            "Combine the rinsed quinoa and water in a saucepan. Bring to a rolling boil over high heat.",
            "Reduce the heat to low, cover the pan with a tight-fitting lid, and simmer gently for 15 minutes or until all water is absorbed.",
            "Remove from heat and let it sit covered for 5 minutes. Then, fluff the quinoa with a fork and let it cool completely.",
            "In a large salad bowl, combine the cooled quinoa, diced avocado, halved cherry tomatoes, and diced cucumber.",
            "In a small jar or bowl, whisk together the olive oil, lemon juice, salt, and pepper until emulsified.",
            "Pour the dressing over the salad and toss gently to combine everything evenly. Serve chilled or at room temperature."
        ]
    },
    {
        id: 3,
        title: "Grilled Steak",
        category: "Dinner",
        time: "40 mins",
        timeMinutes: 40,
        difficulty: "Hard",
        image: "images/steak.png",
        description: "Perfectly grilled steak served with roasted asparagus and garlic butter.",
        servings: 2,
        rating: 4.9,
        reviews: 203,
        nutrition: { calories: 520, protein: 45, carbs: 8, fat: 35 },
        ingredients: [
            "2 ribeye steaks",
            "2 tbsp olive oil",
            "3 cloves garlic, minced",
            "1 tbsp fresh rosemary",
            "1 bunch asparagus",
            "Salt and black pepper",
            "2 tbsp butter"
        ],
        instructions: [
            "Remove the steaks from the refrigerator 30 minutes before cooking to let them come to room temperature. Pat them dry with paper towels.",
            "Season the steaks generously on all sides with salt, freshly ground black pepper, minced garlic, and chopped fresh rosemary.",
            "Preheat your grill to high heat (about 450°F-500°F). Clean the grates and brush them lightly with olive oil to prevent sticking.",
            "Place the steaks on the grill. Cook for 4-5 minutes on one side without moving them to get a good sear.",
            "Flip the steaks and cook for another 3-5 minutes for medium-rare (internal temperature of 135°F), or longer to your desired doneness.",
            "In a separate bowl, toss the asparagus spears with olive oil, salt, and pepper. Grill them alongside the steak for 3-4 minutes until tender-crisp and slightly charred.",
            "Remove the steaks from the grill and let them rest on a cutting board for at least 5 minutes to redistribute the juices. Top with a slice of butter before serving."
        ]
    },
    {
        id: 4,
        title: "Chocolate Lava Cake",
        category: "Dessert",
        time: "30 mins",
        timeMinutes: 30,
        difficulty: "Medium",
        image: "images/cake.png",
        description: "Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.",
        servings: 4,
        rating: 4.9,
        reviews: 312,
        nutrition: { calories: 450, protein: 7, carbs: 52, fat: 25 },
        ingredients: [
            "1/2 cup unsalted butter",
            "4 oz bittersweet chocolate",
            "2 eggs",
            "2 egg yolks",
            "1/4 cup sugar",
            "2 tbsp flour",
            "Vanilla ice cream for serving"
        ],
        instructions: [
            "Preheat your oven to 425°F (220°C). Generously grease 4 ramekins with butter and dust with cocoa powder to prevent sticking.",
            "In a double boiler or microwave-safe bowl, melt the butter and bittersweet chocolate together until smooth. Let it cool slightly.",
            "In a separate bowl, whisk the whole eggs, egg yolks, and sugar together until the mixture is pale, thick, and ribbons fall from the whisk.",
            "Gently fold the melted chocolate mixture into the egg mixture. Then, sift in the flour and fold gently until just combined.",
            "Divide the batter evenly among the prepared ramekins. Bake for 12-14 minutes. The sides should be firm, but the center should still be soft and jiggly.",
            "Let them cool for 1 minute, then carefully run a knife around the edges and invert onto dessert plates.",
            "Serve immediately while hot, topped with a scoop of vanilla ice cream."
        ]
    },
    {
        id: 5,
        title: "Avocado Toast",
        category: "Breakfast",
        time: "10 mins",
        timeMinutes: 10,
        difficulty: "Easy",
        image: "images/avocado_toast.png",
        description: "Creamy avocado on toasted sourdough bread, topped with chili flakes and poached egg.",
        servings: 2,
        rating: 4.5,
        reviews: 156,
        nutrition: { calories: 290, protein: 12, carbs: 28, fat: 16 },
        ingredients: [
            "2 slices sourdough bread",
            "1 ripe avocado",
            "1 tsp lemon juice",
            "Salt and red pepper flakes",
            "2 eggs (optional)"
        ],
        instructions: [
            "Toast the sourdough bread slices in a toaster or on a dry pan until they are golden brown and crispy.",
            "Cut the ripe avocado in half, remove the pit, and scoop the flesh into a small bowl.",
            "Mash the avocado with a fork, mixing in the lemon juice, salt, and black pepper to taste. Keep it slightly chunky for better texture.",
            "Generously spread the avocado mixture onto the warm toast.",
            "If using eggs, fry or poach them to your liking and place one on top of each toast.",
            "Finish by sprinkling with red pepper flakes and a drizzle of olive oil if desired."
        ]
    },
    {
        id: 6,
        title: "Eggs Benedict",
        category: "Breakfast",
        time: "25 mins",
        timeMinutes: 25,
        difficulty: "Medium",
        image: "images/eggs_benedict.png",
        description: "Classic breakfast dish with poached eggs, Canadian bacon, and hollandaise sauce on English muffins.",
        servings: 4,
        rating: 4.7,
        reviews: 98,
        nutrition: { calories: 420, protein: 22, carbs: 32, fat: 24 },
        ingredients: [
            "4 English muffins, split",
            "8 slices Canadian bacon",
            "8 eggs",
            "1/2 cup butter",
            "3 egg yolks",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Split the English muffins and toast them until golden. Briefly pan-fry the Canadian bacon slices until warm.",
            "Fill a saucepan with water and bring to a gentle simmer. Add a splash of vinegar (optional) to help keep the whites together.",
            "Crack each egg into a small ramekin, then gently slide into the simmering water. Poach for 3-4 minutes for a runny yolk.",
            "To make the hollandaise: Whisk egg yolks and lemon juice in a heatproof bowl set over a pan of simmering water (double boiler). Whisk constantly.",
            "Slowly drizzle in the melted butter while whisking vigorously until the sauce thickens and becomes creamy. Season with salt and cayenne.",
            "Assemble: Place a slice of bacon on each muffin half, top with a poached egg, and spoon the warm hollandaise sauce over the top."
        ]
    },
    {
        id: 7,
        title: "Berry Smoothie Bowl",
        category: "Breakfast",
        time: "10 mins",
        timeMinutes: 10,
        difficulty: "Easy",
        image: "images/berry_smoothie_bowl.jpg",
        description: "Thick and creamy smoothie bowl topped with granola, fresh fruit, and chia seeds.",
        servings: 2,
        rating: 4.6,
        reviews: 142,
        nutrition: { calories: 310, protein: 9, carbs: 52, fat: 8 },
        ingredients: [
            "1 cup frozen mixed berries",
            "1 banana",
            "1/2 cup almond milk",
            "Toppings: Granola, chia seeds, sliced fruit"
        ],
        instructions: [
            "Add the frozen mixed berries, banana, and almond milk to a high-speed blender.",
            "Blend on high until the mixture is completely smooth and thick. If it's too thick, add a splash more milk; if too thin, add more frozen fruit.",
            "Pour the smoothie into a serving bowl.",
            "Arranged your toppings artistically: sprinkle granola, chia seeds, and sliced fresh fruit in rows or patterns on top.",
            "Serve immediately while cold and thick."
        ]
    },
    {
        id: 8,
        title: "French Toast",
        category: "Breakfast",
        time: "20 mins",
        timeMinutes: 20,
        difficulty: "Easy",
        image: "images/new_french_toast.png",
        description: "Golden brown French toast with cinnamon and vanilla, served with syrup.",
        servings: 4,
        rating: 4.7,
        reviews: 178,
        nutrition: { calories: 340, protein: 11, carbs: 48, fat: 12 },
        ingredients: [
            "4 slices thick bread",
            "2 eggs",
            "1/2 cup milk",
            "1 tsp cinnamon",
            "1 tsp vanilla extract",
            "Butter for frying"
        ],
        instructions: [
            "In a shallow dish, whisk together the eggs, milk, cinnamon, and vanilla extract until well combined.",
            "Heat a skillet or griddle over medium heat and melt a knob of butter.",
            "Dip each slice of thick bread into the egg mixture, allowing it to soak for a few seconds on each side, but not so long that it falls apart.",
            "Place the bread in the hot skillet and cook for 2-3 minutes per side, or until golden brown and slightly crispy.",
            "Serve warm, dusted with powdered sugar and drizzled with maple syrup."
        ]
    },
    {
        id: 9,
        title: "Chicken Caesar Salad",
        category: "Lunch",
        time: "20 mins",
        timeMinutes: 20,
        difficulty: "Easy",
        image: "images/new_chicken_caesar_salad.png",
        description: "Crisp romaine lettuce with grilled chicken, croutons, parmesan, and Caesar dressing.",
        servings: 2,
        rating: 4.8,
        reviews: 234,
        nutrition: { calories: 380, protein: 32, carbs: 18, fat: 22 },
        ingredients: [
            "1 head romaine lettuce, chopped",
            "2 chicken breasts, grilled and sliced",
            "1 cup croutons",
            "1/2 cup parmesan cheese",
            "Caesar dressing"
        ],
        instructions: [
            "Wash and chop the romaine lettuce into bite-sized pieces. Place in a large salad bowl.",
            "Slice the grilled chicken breasts into thin strips or bite-sized cubes.",
            "Add the chicken, crunchy croutons, and shredded parmesan cheese to the bowl with the lettuce.",
            "Drizzle the Caesar dressing over the salad, starting with a small amount and adding more to taste.",
            "Toss everything together until the lettuce and ingredients are evenly coated with the dressing.",
            "Serve immediately, topped with extra parmesan cheese and freshly cracked black pepper if desired."
        ]
    },
    {
        id: 10,
        title: "Vegetable Wrap",
        category: "Lunch",
        time: "15 mins",
        timeMinutes: 15,
        difficulty: "Easy",
        image: "images/vegetable_wrap.png",
        description: "Healthy wrap filled with hummus, spinach, bell peppers, and cucumber.",
        servings: 2,
        rating: 4.4,
        reviews: 76,
        nutrition: { calories: 250, protein: 8, carbs: 38, fat: 9 },
        ingredients: [
            "2 large tortillas",
            "1/2 cup hummus",
            "1 cup fresh spinach",
            "1 red bell pepper, sliced",
            "1/2 cucumber, sliced"
        ],
        instructions: [
            "Lay the tortillas flat on a clean surface. Spread a generous layer of hummus over the entire surface of each tortilla.",
            "Layer the fresh spinach leaves, sliced red bell peppers, and cucumber slices down the center of each tortilla.",
            "Fold in the sides of the tortilla, then roll it up tightly from the bottom to enclose the filling.",
            "Slice the wrap in half diagonally with a sharp knife.",
            "Serve immediately or wrap in foil for a packed lunch."
        ]
    },
    {
        id: 11,
        title: "Tomato Basil Soup",
        category: "Lunch",
        time: "30 mins",
        timeMinutes: 30,
        difficulty: "Easy",
        image: "images/tomato_basil_soup.png",
        description: "Creamy tomato soup with fresh basil, perfect for a light lunch.",
        servings: 4,
        rating: 4.7,
        reviews: 145,
        nutrition: { calories: 180, protein: 4, carbs: 22, fat: 9 },
        ingredients: [
            "1 can crushed tomatoes",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 cup vegetable broth",
            "1/2 cup heavy cream",
            "Fresh basil"
        ],
        instructions: [
            "In a large pot, heat a splash of oil and sauté the chopped onion and minced garlic over medium heat until soft and fragrant (about 5 minutes).",
            "Add the crushed tomatoes and vegetable broth to the pot. Stir well and bring to a simmer.",
            "Reduce heat to low and simmer gently for 20 minutes to allow the flavors to meld.",
            "Remove from heat. Use an immersion blender to puree the soup until smooth (or transfer to a regular blender in batches, being careful with hot liquid).",
            "Stir in the heavy cream and chopped fresh basil. Season with salt and pepper to taste.",
            "Serve hot, garnished with a sprig of basil."
        ]
    },
    {
        id: 12,
        title: "Grilled Cheese",
        category: "Lunch",
        time: "15 mins",
        timeMinutes: 15,
        difficulty: "Easy",
        image: "images/grilled_cheese.png",
        description: "The ultimate comfort food: gooey melted cheese between crispy buttery bread.",
        servings: 2,
        rating: 4.6,
        reviews: 189,
        nutrition: { calories: 420, protein: 16, carbs: 38, fat: 24 },
        ingredients: [
            "4 slices bread",
            "4 slices cheddar cheese",
            "2 tbsp butter"
        ],
        instructions: [
            "Generously butter one side of each slice of bread.",
            "Place a slice of cheese between the unbuttered sides of two bread slices, so the butter is on the outside.",
            "Heat a non-stick skillet over medium-low heat. Place the sandwich in the pan.",
            "Grill for 3-4 minutes on one side until the bread is golden brown and crispy.",
            "Flip carefully and grill the other side for another 2-3 minutes until the cheese is completely melted and gooey.",
            "Slice in half and serve hot."
        ]
    },
    {
        id: 13,
        title: "Pan-Seared Salmon",
        category: "Dinner",
        time: "25 mins",
        timeMinutes: 25,
        difficulty: "Medium",
        image: "images/pan_seared_salmon.png",
        description: "Crispy skin salmon fillet with lemon butter sauce and asparagus.",
        servings: 2,
        rating: 4.8,
        reviews: 167,
        nutrition: { calories: 450, protein: 38, carbs: 6, fat: 32 },
        ingredients: [
            "2 salmon fillets",
            "Salt and pepper",
            "2 tbsp olive oil",
            "2 tbsp butter",
            "1 lemon, sliced"
        ],
        instructions: [
            "Pat the salmon fillets dry with paper towels. Season both sides generously with salt and pepper.",
            "Heat the olive oil in a large non-stick or cast-iron skillet over medium-high heat until shimmering.",
            "Place the salmon skin-side down in the hot pan. Press down gently with a spatula for 10 seconds to prevent curling.",
            "Cook undisturbed for 4-5 minutes until the skin is crispy and golden brown and the fish is cooked about 3/4 of the way up.",
            "Flip the salmon carefully. Cook for another 2-3 minutes on the other side, or until the fish is opaque and flakes easily with a fork.",
            "Add the butter and lemon slices to the pan. As the butter melts and foams, spoon it repeatedly over the salmon fillets (basting) for extra flavor.",
            "Serve immediately with the pan sauce drizzled on top."
        ]
    },
    {
        id: 14,
        title: "Spaghetti Carbonara",
        category: "Dinner",
        time: "30 mins",
        timeMinutes: 30,
        difficulty: "Medium",
        image: "images/spaghetti_carbonara.png",
        description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper.",
        servings: 4,
        rating: 4.9,
        reviews: 278,
        nutrition: { calories: 520, protein: 24, carbs: 58, fat: 22 },
        ingredients: [
            "1 lb spaghetti",
            "4 oz pancetta or bacon, diced",
            "3 eggs",
            "1 cup parmesan cheese",
            "Black pepper"
        ],
        instructions: [
            "Bring a large pot of salted water to a boil. Add the spaghetti and cook according to package instructions until al dente.",
            "While the pasta cooks, cut the pancetta (or bacon) into small dice. Fry in a large skillet over medium heat until crispy and golden. Remove from heat but keep the fat in the pan.",
            "In a small bowl, whisk together the eggs, grated parmesan cheese, and a generous amount of freshly cracked black pepper.",
            "Reserve 1/2 cup of the starchy pasta cooking water, then drain the pasta.",
            "Add the hot pasta directly to the pan with the pancetta and toss to coat in the rendered fat.",
            "Remove the pan from the heat completely (crucial step!). Pour in the egg and cheese mixture while tossing the pasta quickly and continuously to create a creamy sauce without scrambling the eggs.",
            "If the sauce is too thick, add a splash of the reserved pasta water to loosen it up. Serve immediately."
        ]
    },
    {
        id: 15,
        title: "Chicken Curry",
        category: "Dinner",
        time: "45 mins",
        timeMinutes: 45,
        difficulty: "Medium",
        image: "images/chicken_curry.png",
        description: "Aromatic chicken curry with coconut milk and spices, served with rice.",
        servings: 4,
        rating: 4.7,
        reviews: 192,
        nutrition: { calories: 480, protein: 36, carbs: 28, fat: 26 },
        ingredients: [
            "1 lb chicken breast, cubed",
            "1 onion, chopped",
            "2 tbsp curry powder",
            "1 can coconut milk",
            "1 cup chicken broth"
        ],
        instructions: [
            "Cut the chicken breast into bite-sized cubes. Season lightly with salt and pepper.",
            "Heat a tablespoon of oil in a large pot or deep skillet over medium-high heat. Add the chicken and cook until browned on all sides. Remove chicken and set aside.",
            "In the same pot, add the chopped onion and sauté until soft. Add the curry powder and cook for 1 minute until fragrant (blooming the spices).",
            "Pour in the coconut milk and chicken broth. Stir well to scrape up any browned bits from the bottom of the pan.",
            "Return the chicken to the pot. Bring to a simmer, then reduce heat to low and cook for 20-30 minutes until the sauce has thickened and the chicken is tender.",
            "Serve hot over a bed of fluffy white rice, garnished with fresh cilantro if desired."
        ]
    },
    {
        id: 16,
        title: "Beef Stir Fry",
        category: "Dinner",
        time: "25 mins",
        timeMinutes: 25,
        difficulty: "Easy",
        image: "images/beef_stir_fry.png",
        description: "Quick and easy beef stir fry with broccoli and soy sauce glaze.",
        servings: 4,
        rating: 4.6,
        reviews: 134,
        nutrition: { calories: 390, protein: 32, carbs: 24, fat: 18 },
        ingredients: [
            "1 lb beef strips",
            "2 cups broccoli florets",
            "1 bell pepper, sliced",
            "1/4 cup soy sauce",
            "1 tbsp ginger, minced"
        ],
        instructions: [
            "Slice the beef against the grain into thin strips. Toss with a pinch of cornstarch (optional) for better browning.",
            "Heat a wok or large skillet over high heat with a splash of oil. Sear the beef strips in a single layer for 1-2 minutes until browned. Remove and set aside.",
            "Add a bit more oil to the pan. Add the broccoli florets and sliced bell pepper. Stir-fry for 3-4 minutes until tender-crisp.",
            "Return the beef to the pan. Add the minced ginger and pour in the soy sauce.",
            "Toss everything together vigorously for another minute until the sauce coats the beef and vegetables evenly.",
            "Serve immediately over rice or noodles."
        ]
    },
    {
        id: 17,
        title: "NY Cheesecake",
        category: "Dessert",
        time: "90 mins",
        timeMinutes: 90,
        difficulty: "Hard",
        image: "images/ny_cheesecake.png",
        description: "Rich and creamy New York style cheesecake with a graham cracker crust.",
        servings: 12,
        rating: 4.9,
        reviews: 421,
        nutrition: { calories: 520, protein: 9, carbs: 48, fat: 34 },
        ingredients: [
            "2 cups graham cracker crumbs",
            "1/2 cup butter, melted",
            "3 packages cream cheese",
            "1 cup sugar",
            "3 eggs",
            "1 cup sour cream"
        ],
        instructions: [
            "Preheat oven to 325°F (160°C). Mix graham cracker crumbs and melted butter. Press firmly into the bottom of a 9-inch springform pan. Bake for 10 minutes and cool.",
            "In a large bowl, beat the softened cream cheese and sugar until completely smooth and creamy. Scrape down the sides of the bowl.",
            "Add the eggs one at a time, beating on low speed just until incorporated. Do not overmix to avoid cracks.",
            "Stir in the sour cream and vanilla extract (optional). Pour the batter over the cooled crust.",
            "Bake for 50-60 minutes until the edges are set but the center still wobbles slightly.",
            "Turn off the oven and crack the door open. Let the cheesecake cool inside for 1 hour, then refrigerate overnight before serving."
        ]
    },
    {
        id: 18,
        title: "Apple Pie",
        category: "Dessert",
        time: "60 mins",
        timeMinutes: 60,
        difficulty: "Medium",
        image: "images/apple_pie.png",
        description: "Classic homemade apple pie with a flaky crust and cinnamon apple filling.",
        servings: 8,
        rating: 4.8,
        reviews: 267,
        nutrition: { calories: 410, protein: 4, carbs: 62, fat: 18 },
        ingredients: [
            "2 pie crusts",
            "6 cups apples, peeled and sliced",
            "3/4 cup sugar",
            "1 tsp cinnamon",
            "1 tbsp butter"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C). Roll out one pie crust and place it into a 9-inch pie dish.",
            "Peel, core, and slice the apples into uniform wedges. In a large bowl, toss the apples with sugar, cinnamon, and a squeeze of lemon juice.",
            "Mound the apple mixture into the pie crust. Dot the top with small pieces of butter.",
            "Top with the second pie crust. Trim the overhang and crimp the edges to seal. Cut several slits in the top crust to allow steam to escape.",
            "Bake for 45-50 minutes until the crust is golden brown and the filling is bubbling. Let cool completely before slicing to allow the filling to set."
        ]
    },
    {
        id: 19,
        title: "Tiramisu",
        category: "Dessert",
        time: "30 mins",
        timeMinutes: 30,
        difficulty: "Medium",
        image: "images/tiramisu.png",
        description: "Italian coffee-flavored dessert with ladyfingers and mascarpone cream.",
        servings: 8,
        rating: 4.9,
        reviews: 298,
        nutrition: { calories: 380, protein: 8, carbs: 42, fat: 20 },
        ingredients: [
            "1 pack ladyfingers",
            "1 cup strong coffee, cooled",
            "1 lb mascarpone cheese",
            "3 eggs",
            "1/2 cup sugar",
            "Cocoa powder"
        ],
        instructions: [
            "In a medium bowl, whisk the egg yolks and sugar until pale and creamy. Add the mascarpone cheese and mix until smooth.",
            "In a separate clean bowl, beat the egg whites until stiff peaks form. Gently fold the egg whites into the mascarpone mixture.",
            "Quickly dip each ladyfinger into the cooled coffee (do not soak, or they will get soggy) and arrange a layer in the bottom of a serving dish.",
            "Spread half of the mascarpone cream over the ladyfingers. Repeat with another layer of dipped ladyfingers and the remaining cream.",
            "Cover and refrigerate for at least 4 hours, preferably overnight. Dust generously with cocoa powder just before serving."
        ]
    },
    {
        id: 20,
        title: "Fudgy Brownies",
        category: "Dessert",
        time: "40 mins",
        timeMinutes: 40,
        difficulty: "Easy",
        image: "images/fudgy_brownies.png",
        description: "Chewy, chocolatey brownies with a crackly top.",
        servings: 12,
        rating: 4.8,
        reviews: 356,
        nutrition: { calories: 280, protein: 4, carbs: 38, fat: 14 },
        ingredients: [
            "1/2 cup butter",
            "1 cup sugar",
            "2 eggs",
            "1/3 cup cocoa powder",
            "1/2 cup flour",
            "1/4 tsp salt"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease a square baking pan or line with parchment paper.",
            "Melt the butter in a saucepan. Remove from heat and stir in the sugar and cocoa powder until smooth.",
            "Add the eggs one at a time, beating well after each addition until the mixture is shiny.",
            "Stir in the flour and salt until just combined. Do not overmix.",
            "Pour the batter into the prepared pan. Bake for 20-25 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs (not wet batter).",
            "Let cool completely in the pan before cutting into squares."
        ]
    }
];

// ==================== STATE MANAGEMENT ====================
let currentFilter = 'All';
let currentSort = 'default';
let searchTerm = '';
let difficultyFilters = [];
let timeFilter = 'all';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
let userRatings = JSON.parse(localStorage.getItem('userRatings')) || {};
let darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

// ==================== UTILITY FUNCTIONS ====================
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }
    saveToLocalStorage('favorites', favorites);
    updateFavoritesCount();
    return favorites.includes(recipeId);
}

function isFavorite(recipeId) {
    return favorites.includes(recipeId);
}

function updateFavoritesCount() {
    const badge = document.querySelector('.favorites-badge');
    if (badge) {
        badge.textContent = favorites.length;
        badge.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

function addToRecentlyViewed(recipeId) {
    recentlyViewed = recentlyViewed.filter(id => id !== recipeId);
    recentlyViewed.unshift(recipeId);
    if (recentlyViewed.length > 6) recentlyViewed.pop();
    saveToLocalStorage('recentlyViewed', recentlyViewed);
}

function getRelatedRecipes(recipe, count = 3) {
    return recipes
        .filter(r => r.id !== recipe.id && r.category === recipe.category)
        .slice(0, count);
}

function generateStars(rating, interactive = false, recipeId = null) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += interactive
                ? `<i class="fas fa-star" data-rating="${i}"></i>`
                : '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += interactive
                ? `<i class="far fa-star" data-rating="${i}"></i>`
                : '<i class="far fa-star"></i>';
        }
    }

    return starsHTML;
}

// ==================== FILTERING & SORTING ====================
function filterAndSortRecipes() {
    let filtered = recipes.filter(recipe => {
        // Category filter
        const categoryMatch = currentFilter === 'All' || recipe.category === currentFilter;

        // Search filter
        const searchMatch = !searchTerm ||
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));

        // Difficulty filter
        const difficultyMatch = difficultyFilters.length === 0 ||
            difficultyFilters.includes(recipe.difficulty);

        // Time filter
        let timeMatch = true;
        if (timeFilter === 'quick') timeMatch = recipe.timeMinutes <= 20;
        else if (timeFilter === 'medium') timeMatch = recipe.timeMinutes > 20 && recipe.timeMinutes <= 40;
        else if (timeFilter === 'long') timeMatch = recipe.timeMinutes > 40;

        return categoryMatch && searchMatch && difficultyMatch && timeMatch;
    });

    // Sorting
    if (currentSort === 'title-asc') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === 'title-desc') {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (currentSort === 'time-asc') {
        filtered.sort((a, b) => a.timeMinutes - b.timeMinutes);
    } else if (currentSort === 'time-desc') {
        filtered.sort((a, b) => b.timeMinutes - a.timeMinutes);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
}

// ==================== RENDERING FUNCTIONS ====================
function renderRecipes(recipesToRender, containerId = 'recipe-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (recipesToRender.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No recipes found</h3>
                <p>Try adjusting your filters or search term</p>
            </div>
        `;
        return;
    }

    container.innerHTML = recipesToRender.map(recipe => `
        <div class="recipe-card fade-in" onclick="window.location.href='recipe-detail.html?id=${recipe.id}'">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                <button class="favorite-btn ${isFavorite(recipe.id) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); handleFavoriteClick(${recipe.id})"
                        aria-label="Add to favorites">
                    <i class="fa${isFavorite(recipe.id) ? 's' : 'r'} fa-heart"></i>
                </button>
            </div>
            <div class="recipe-content">
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.time}</span>
                    <span class="difficulty-badge ${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                </div>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-desc">${recipe.description}</p>
                <div class="recipe-rating">
                    <div class="stars">${generateStars(recipe.rating)}</div>
                    <span class="rating-text">${recipe.rating} (${recipe.reviews})</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add intersection observer for fade-in animation
    observeElements();
}

function renderRecipeDetail() {
    const id = parseInt(getUrlParam('id'));
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        document.body.innerHTML = '<h1 class="text-center" style="margin-top: 5rem;">Recipe not found</h1>';
        return;
    }

    // Add to recently viewed
    addToRecentlyViewed(id);

    // Update Meta
    document.title = `${recipe.title} - Kamil's Recipes`;

    // Populate Data
    document.getElementById('recipe-hero-image').src = recipe.image;
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-time').textContent = recipe.time;
    document.getElementById('recipe-difficulty').textContent = recipe.difficulty;

    // Breadcrumb
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a>
            <span>/</span>
            <a href="recipes.html">Recipes</a>
            <span>/</span>
            <span>${recipe.title}</span>
        `;
    }

    // Favorite button
    const favoriteBtn = document.getElementById('favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.innerHTML = `<i class="fa${isFavorite(id) ? 's' : 'r'} fa-heart"></i> ${isFavorite(id) ? 'Saved' : 'Save'}`;
        favoriteBtn.classList.toggle('active', isFavorite(id));
        favoriteBtn.onclick = () => {
            const isNowFavorite = toggleFavorite(id);
            favoriteBtn.innerHTML = `<i class="fa${isNowFavorite ? 's' : 'r'} fa-heart"></i> ${isNowFavorite ? 'Saved' : 'Save'}`;
            favoriteBtn.classList.toggle('active', isNowFavorite);
        };
    }

    // Rating
    const ratingContainer = document.getElementById('recipe-rating');
    if (ratingContainer) {
        ratingContainer.innerHTML = `
            <div class="stars">${generateStars(recipe.rating)}</div>
            <span class="rating-text">${recipe.rating} (${recipe.reviews} reviews)</span>
        `;
    }

    // Servings
    const servingsDisplay = document.getElementById('servings-display');
    if (servingsDisplay) {
        servingsDisplay.textContent = recipe.servings;
    }

    // Nutrition
    const nutritionInfo = document.getElementById('nutrition-info');
    if (nutritionInfo) {
        nutritionInfo.innerHTML = `
            <div class="nutrition-item">
                <span class="nutrition-label">Calories</span>
                <span class="nutrition-value">${recipe.nutrition.calories}</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">Protein</span>
                <span class="nutrition-value">${recipe.nutrition.protein}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">Carbs</span>
                <span class="nutrition-value">${recipe.nutrition.carbs}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">Fat</span>
                <span class="nutrition-value">${recipe.nutrition.fat}g</span>
            </div>
        `;
    }

    // Ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    if (ingredientsList) {
        ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    }

    // Instructions
    const instructionsList = document.getElementById('instructions-list');
    if (instructionsList) {
        instructionsList.innerHTML = recipe.instructions.map((inst, index) => `
            <li>
                <div class="step-number">${index + 1}</div>
                <p>${inst}</p>
            </li>
        `).join('');
    }

    // Related recipes
    const relatedRecipes = getRelatedRecipes(recipe);
    const relatedContainer = document.getElementById('related-recipes');
    if (relatedContainer && relatedRecipes.length > 0) {
        renderRecipes(relatedRecipes, 'related-recipes');
    }
}

// ==================== EVENT HANDLERS ====================
function handleFavoriteClick(recipeId) {
    const isNowFavorite = toggleFavorite(recipeId);
    // Re-render to update the heart icon
    const filtered = filterAndSortRecipes();
    renderRecipes(filtered);
}

function initFilters() {
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const difficultyCheckboxes = document.querySelectorAll('.difficulty-filter');
    const timeRadios = document.querySelectorAll('.time-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            const filtered = filterAndSortRecipes();
            renderRecipes(filtered);
        });
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.category;
                const filtered = filterAndSortRecipes();
                renderRecipes(filtered);
            });
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            const filtered = filterAndSortRecipes();
            renderRecipes(filtered);
        });
    }

    if (difficultyCheckboxes) {
        difficultyCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    difficultyFilters.push(e.target.value);
                } else {
                    difficultyFilters = difficultyFilters.filter(d => d !== e.target.value);
                }
                const filtered = filterAndSortRecipes();
                renderRecipes(filtered);
            });
        });
    }

    if (timeRadios) {
        timeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                timeFilter = e.target.value;
                const filtered = filterAndSortRecipes();
                renderRecipes(filtered);
            });
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            searchTerm = '';
            difficultyFilters = [];
            timeFilter = 'all';
            currentFilter = 'All';
            currentSort = 'default';

            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'default';
            difficultyCheckboxes.forEach(cb => cb.checked = false);
            timeRadios.forEach(radio => radio.checked = radio.value === 'all');
            filterBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === 'All');
            });

            const filtered = filterAndSortRecipes();
            renderRecipes(filtered);
        });
    }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-overlay');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// ==================== DARK MODE ====================
function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');

    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            darkMode = !darkMode;
            document.body.classList.toggle('dark-mode');
            saveToLocalStorage('darkMode', darkMode);
            toggle.innerHTML = darkMode
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        });

        toggle.innerHTML = darkMode
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    }
}

// ==================== PRINT & SHARE ====================
function initPrintShare() {
    const printBtn = document.getElementById('print-btn');
    const shareBtn = document.getElementById('share-btn');

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const url = window.location.href;
            const title = document.getElementById('recipe-title').textContent;

            if (navigator.share) {
                try {
                    await navigator.share({ title, url });
                } catch (err) {
                    console.log('Share cancelled');
                }
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
            }
        });
    }
}

// ==================== SERVING SIZE CALCULATOR ====================
function initServingCalculator() {
    const decreaseBtn = document.getElementById('decrease-servings');
    const increaseBtn = document.getElementById('increase-servings');
    const servingsDisplay = document.getElementById('servings-display');

    if (!decreaseBtn || !increaseBtn || !servingsDisplay) return;

    const id = parseInt(getUrlParam('id'));
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    let currentServings = recipe.servings;
    const originalServings = recipe.servings;

    const updateIngredients = () => {
        const ratio = currentServings / originalServings;
        const ingredientsList = document.getElementById('ingredients-list');

        ingredientsList.innerHTML = recipe.ingredients.map(ing => {
            // Try to find and scale numbers in the ingredient
            const scaled = ing.replace(/(\d+(?:\/\d+)?(?:\.\d+)?)/g, (match) => {
                const num = eval(match); // Convert fractions like 1/2
                const scaledNum = num * ratio;
                // Format nicely
                if (scaledNum % 1 === 0) return scaledNum.toString();
                if (scaledNum < 1) return scaledNum.toFixed(2);
                return scaledNum.toFixed(1);
            });
            return `<li>${scaled}</li>`;
        }).join('');
    };

    decreaseBtn.addEventListener('click', () => {
        if (currentServings > 1) {
            currentServings--;
            servingsDisplay.textContent = currentServings;
            updateIngredients();
        }
    });

    increaseBtn.addEventListener('click', () => {
        currentServings++;
        servingsDisplay.textContent = currentServings;
        updateIngredients();
    });
}

// ==================== JUMP TO INSTRUCTIONS ====================
function initJumpToInstructions() {
    const jumpBtn = document.getElementById('jump-to-instructions');
    if (jumpBtn) {
        jumpBtn.addEventListener('click', () => {
            document.getElementById('instructions-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// ==================== ANIMATIONS ====================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize dark mode first
    initDarkMode();

    // Initialize mobile menu
    initMobileMenu();

    // Update favorites count
    updateFavoritesCount();

    // Check which page we are on
    if (document.getElementById('recipe-container')) {
        // Recipes page
        const filtered = filterAndSortRecipes();
        renderRecipes(filtered);
        initFilters();
    } else if (document.getElementById('recipe-detail-content')) {
        // Recipe detail page
        renderRecipeDetail();
        initPrintShare();
        initServingCalculator();
        initJumpToInstructions();
    } else if (document.getElementById('featured-recipes')) {
        // Home page featured (show top rated)
        const topRated = recipes.sort((a, b) => b.rating - a.rating).slice(0, 3);
        renderRecipes(topRated, 'featured-recipes');
    }

    // Initialize animations
    observeElements();
});
