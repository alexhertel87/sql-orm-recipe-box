"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Instructions",
      [
        {
          recipeId: 12,
          listOrder: 1,
          specification:
            "Heat 1 tsp flavourless oil in a frying pan over a medium heat. Add the curry paste and cook for 1 min. Pour in the coconut milk, then leave to bubble away for a few mins before adding the prawns and courgetti. Cook for 1 min more to warm through, then divide between bowls.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 11,
          listOrder: 1,
          specification:
            "Peel and quarter the potatoes, then cook in a large pan of salted, boiling water for 15 mins. Drain and set aside.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 11,
          listOrder: 2,
          specification:
            "Pour a glug of olive oil into a large frying pan over a medium heat and cook the sausages for 15 mins. Add the tomatoes to the pan for the final 5 mins. Mash the potatoes well and mix in the pesto. Season and serve with the sausages and tomatoes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          listOrder: 1,
          specification:
            "Heat 1 tbsp flavourless oil in a large frying pan. Add the prawns and the jerk seasoning, and cook for 1-2 mins. Drain the beans, reserving 3 tbsp of the chilli sauce.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          listOrder: 2,
          specification:
            "Add the beans to the pan along with the reserved sauce and the coconut rice. Fry for 3-4 mins, then season with salt to taste and spoon into two bowls to serve.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          listOrder: 1,
          specification:
            "Pour a glug of olive oil into a large saucepan. Tip in the rice and fry for 1 min. Add half the stock and cook until absorbed. Add the remaining stock, a ladle at a time, and cook until the rice is al dente, stirring continually, for 20-25 mins.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          listOrder: 2,
          specification:
            "Stir through the pesto and half the goat’s cheese. Serve topped with the remaining cheese.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          listOrder: 1,
          specification:
            "Remove the outer leaves from the cauliflower, cut off the stalk and roughly chop, then cut the head into small florets. Toss a quarter of the florets in 1 tbsp oil and 1 tsp of the fennel seeds, season well, then tip into a roasting tin and set aside.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          listOrder: 2,
          specification:
            "Heat oven to 220C/200C fan/gas 7. Heat ½ tbsp oil in a saucepan over a medium heat and add the remaining fennel seeds, toast for 2 mins, then add the lentils and the remaining cauliflower. Stir in the curry paste, then add 1 litre water and bring to the boil. Simmer for 25 mins until the cauliflower is tender and the lentils are cooked through.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          listOrder: 3,
          specification:
            "Meanwhile, put the roasting tin of cauliflower in the oven and cook for 20 mins until crisp and slightly charred. Tip the soup mixture into a food processor and blitz until smooth, tip back into the pan to warm through, adding the lemon juice and a little water if it’s too thick. Tip into bowls and top with the crispy cauliflower and fennel seeds to serve.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          listOrder: 1,
          specification:
            "Slice the chorizo and tip into a large saucepan over a medium heat. Fry gently for 5 mins or until starting to turn dark brown. Add the tomatoes and butter beans, bring to the boil, then simmer for 10 mins. Swirl through the pesto, season lightly and ladle into four bowls.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          listOrder: 1,
          specification:
            "Tip the tomatoes and bean salad into an ovenproof frying pan or shallow flameproof casserole dish. Simmer for 10 mins, or until reduced. Stir in the spinach and cook for 5 mins more until wilted. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          listOrder: 2,
          specification:
            "Heat the grill to medium. Make four indentations in the mixture using the back of a spoon, then crack one egg in each. Nestle the ham in the mixture, then grill for 4-5 mins, or until the whites are set and the yolks runny. Serve with rye bread, if you like.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          listOrder: 1,
          specification:
            "Blitz the whole beetroot, ¾ of the chickpeas, 2 tbsp pesto and 1 tbsp oil in a food processor with some seasoning until you have a thick, smooth hummus. Heat the ciabatta following the pack instructions.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          listOrder: 2,
          specification:
            "Fry the remaining chickpeas in a little oil until crisp, then set aside. Toss the salad leaves with the remaining pesto and a splash of vinegar. Slice the rolls, then assemble the sandwiches with the hummus, beetroot slices, salad leaves and fried chickpeas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          listOrder: 1,
          specification:
            "Put the potatoes in a microwaveable bowl with a splash of water, cover, then cook on high for 5 mins until tender (or steam or simmer them).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          listOrder: 2,
          specification:
            "Meanwhile, heat the oil in a frying pan over a medium heat, add the leeks with a pinch of salt and cook for 10 mins, stirring so they don’t stick, until softened. Tip in the potatoes, turn up the heat and fry for a couple of mins to crisp them up a bit. Flake through the mackerel.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          listOrder: 3,
          specification:
            "Make four indents in the leek mixture in the pan, crack an egg into each, season, then cover the pan and cook for 6-8 mins until the whites have set and the yolks are runny. Serve the horseradish on the side, with the pan in the middle of the table.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          listOrder: 1,
          specification:
            "In a large skillet, cook beef and onion over medium heat until beef is no longer pink and onion is tender, breaking up beef into crumbles, 5-10 minutes; drain. Add garlic and seasonings; cook 1 minute longer. Add the stock and tomatoes; bring to a boil. Add pasta and peas; reduce heat. Simmer, covered, until pasta is tender, 10-12 minutes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          listOrder: 2,
          specification:
            "Gradually stir in cream and cheese; heat through (do not allow to boil).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          listOrder: 1,
          specification: "Spread the peanut butter on one piece of bread.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          listOrder: 2,
          specification: "Spread the jelly on the other piece of bread.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          listOrder: 3,
          specification: "Put the two smeared sides of bread together.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          listOrder: 1,
          specification:
            "Heat the oven to 425°F. Pat one pie crust into a 9-inch pie pan. Place the pie pan into the freezer while you prep the filling.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          listOrder: 2,
          specification:
            "Pluck the grapes off their stems and place them in a large saucepan or pot. Add the sugar, nutmeg, lemon juice, elderberry flower syrup, and honey. Turn the heat to medium and cook, stirring frequently. When the mixture is quite warm to the touch, whisk in the salt and cornstarch. Cook, whisking frequently, until the mixture is boiling and thickened slightly.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          listOrder: 3,
          specification:
            "Remove from the heat and use a slotted spoon to remove the grapes from the liquid. Put all the grapes into the frozen pie crust, then pour in enough of the syrup liquid to fill the pie crust. Leave about 1/2 inch space between the top of the crust and the liquid. Top the grape mixture with the pieces of butter. Press the second disc of pie dough on top of the pan, and crimp the edges together. Cut a few small slits in the top, and sprinkle the top crust generously with sugar.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          listOrder: 4,
          specification:
            "Bake for 30 minutes or until crust is well-browned and filling is bubbly. Let cool completely before serving.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Instructions", null, {});
  },
};
