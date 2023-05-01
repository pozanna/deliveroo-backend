const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    restaurant: {
      path: "The Daily Bread",
      name: "Le Pain Quotidien - Montorgueil",
      categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie"],
      price: "€€",
      phone: "+33144780895",
      percentage: 87,
      ratings: "50+",
      address: "8 Rue de Bretagne, 75003 Paris",
      delay: "10 - 20 Mins (Au plus tôt)",
      description:
        "Enjoy every pleasure of everyday life. Le Pain Quotidien offers simple and healthy ingredients, good bread, fresh and seasonal fruits and vegetables from organic farming.",
      picture: "https://f.roocdn.com/images/menus/17697/header-image.jpg",
      client_address: {
        coordinates: [2.36051359999999, 48.8737157],
        locality: "Paris",
        country: "FR",
        formatted_address: "25 Passage Dubail, 75010 Paris, France",
        post_code: "75010",
        route: "Passage Dubail",
        street_number: "25",
        city: "Paris",
      },
    },
    categories: [
      {
        name: "Brunchs",
        meals: [
          {
            id: "1519055545-88",
            title: "Authentic Brunch 1 person",
            description:
              "Plate of cooked ham, smoked ham, terrine, organic Comté & organic camembert, young shoots salad, organic poached egg, organic bread & jam, 1 organic pastry of your choice, organic perfect granola, fruit juice 33cl of your choice",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-89",
            title: "Brunch vegan",
            description:
              "Organic falafels, organic hummus, organic super seed avocado, lentils with paprika, fresh herbs, carrot hummus and seasonal vegetables, organic soup of the day, organic bread & jam, crunola parfait with seasonal fruits, raisin and hazelnut flute , fruit juice 33cl of your choice",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg",
          },
        ],
      },
      {
        name: "Breakfast",
        meals: [
          {
            id: "1519055545-90",
            title: "Breakfast 1 person",
            description:
              "Assortment of organic breads, butter & organic jams + 1 organic pastry of your choice + 1 cold drink of your choice",
            price: "10.40",
          },
          {
            id: "1519055545-91",
            title: "Organic cottage cheese with honey",
            description: "",
            price: "10.40",
          },
          {
            id: "1519055545-92",
            title: "Granola parfait bio",
            description: "Yogurt, granola, and fresh seasonal fruits",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323271/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-93",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Crunola parfait organic (100% vegan)",
            description:
              "100% vegan - raw granola, banana, coconut milk and cashew butter",
            price: "6.60",
          },
          {
            id: "1519055545-137",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic seasonal fruit salad",
            description:
              "Apple, pineapple, kiwi, orange, pomegranate, blueberries",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/2549378/item-image.jpg",
          },
          {
            id: "1519055545-95",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Seasonal baked omelette",
            description:
              "Butternut squash, goat cheese & thyme, with a salad of young shoots",
            price: "6.60",
          },
          {
            id: "1519055545-96",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chia bowl",
            description:
              "Organic chia seeds, blueberries, pomegranates, organic crunola",
            price: "6.60",
            popular: true,
          },
          {
            id: "1519055545-97",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bircher Muesli",
            description:
              "Organic homemade muesli, organic almond drink, seasonal fruits and organic super seeds (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250391/item-image.jpg",
          },
        ],
      },
      {
        name: "Pastries and breads",
        meals: [
          {
            id: "1519055545-98",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Croissant bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323282/item-image.jpg",
          },
          {
            id: "1519055545-99",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au chocolat bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323287/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-100",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au raisins bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/3637782/item-image.jpg",
          },
          {
            id: "1519055545-101",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic Old Fashioned Baguette",
            description: "300g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
          },
          {
            id: "1519055545-102",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Grande brioche",
            description: "",
            price: "6.60",
          },
          {
            id: "1519055545-103",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic blueberry muffin (100% vegan)",
            description: "Vegan",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2020235/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-104",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio pomme cannelle",
            description: "",
            price: "6.60",
          },
          {
            id: "1519055545-105",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin banane chocolat bio",
            description: "",
            price: "6.60",
          },
          {
            id: "1519055545-106",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Gluten-free multi-grain bread",
            description: "350g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323275/item-image.jpg",
          },
          {
            id: "1519055545-107",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic multi-grain raisin bread",
            description: "700g",
            price: "6.60",
          },
          {
            id: "1519055545-108",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic grape and hazelnut flute",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549462/item-image.jpg",
          },
          {
            id: "1519055545-109",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pumpkin Seed & Sunflower Baguette",
            description: "300g",
            price: "6.60",
          },
        ],
      },
      {
        name: "Salades",
        meals: [
          {
            id: "1519055545-110",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "César BLT",
            description:
              "Chicken, parmesan, avocado, croutons, bacon, vegetable crisps, young shoots, kale and cherry tomatoes",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2018213/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-111",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Buddha bowl",
            description:
              "Smoked salmon, avocado, organic super seeds, parika lentils, red cabbage, cucumber, young shoots",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323292/item-image.jpg",
          },
          {
            id: "1519055545-112",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Veggie Bowl",
            description:
              "Organic buckwheat, organic quinoa, carrot hummus, lentils with paprika, butternut squash, pomegranate, avocado, seaweed caviar, organic vegetable crisps",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549941/item-image.jpg",
          },
          {
            id: "1519055545-113",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Falafel Bowl",
            description:
              "Organic quinoa, organic hummus, carrots, red cabbage, baby spinach, tahini sauce and seasonal bread (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250423/item-image.jpg",
            popular: true,
          },
          {
            id: "1519055545-114",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Lentil or quinoa bowl (100% vegan)",
            description: "",
            price: "3.90",
          },
          {
            id: "1519055545-125",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Quiche Lorraine",
            description: "Served with a salad of young organic shoots",
            price: "6.90",
          },
          {
            id: "1519055545-116",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Mini lentil salad (100% vegetarian)",
            description:
              "Lentils with paprika, organic carrots and organic poached egg",
            price: "3.90",
          },
        ],
      },
      {
        name: "Tartines froides",
        meals: [
          {
            id: "1519055545-117",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic avocado toast (100% vegan)",
            description: "Purée d'avocat bio and gomasio bio",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/1323299/item-image.jpg",
          },
          {
            id: "1519055545-118",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Smoked chicken & avocado toast",
            description: "Organic cucumber and spring onions",
            price: "6.90",
          },
          {
            id: "1519055545-119",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Smoked ham & buffalo mozzarella organic dried tomatoes",
            description: "Organic buffalo mozzarella",
            price: "6.90",
            popular: true,
          },
          {
            id: "1519055545-120",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic White Ham & Comté Toast",
            description: "",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/4607227/item-image.jpg",
          },
          {
            id: "1519055545-121",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Carrot Hummus & Feta Toast",
            description:
              "Organic Super Seeds, Pomegranate, Cucumber & Arugula (Vegetarian)",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/5250426/item-image.jpg",
          },
        ],
      },
      {
        name: "Soupe & plats chauds",
        meals: [
          {
            id: "1519055545-122",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "The Baker's Lunch",
            description:
              "Half a toast of the day & soup of the day with organic vegetables, served with organic bread and a salad of organic young shoots",
            price: "6.90",
          },
          {
            id: "1519055545-123",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Soup of the day with organic vegetables (100% vegan)",
            description: "",
            price: "6.90",
          },
          {
            id: "1519055545-126",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Organic vegetable stew, organic curry and grilled chicken",
            description: "",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/1493250/item-image.jpg",
          },
          {
            id: "1519055545-124",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title:
              "Organic vegetable stew, organic quinoa & organic harissa (100% vegan)",
            description: "",
            price: "6.90",
            popular: true,
          },
          {
            id: "1519055545-127",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chili sin carne (vegan)",
            description:
              "3 beans, mashed avocado, organic soy specialty & spring onions",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/4607228/item-image.jpg",
          },
          {
            id: "1519055545-128",
            url: "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Coconut Curry with Vegetables",
            description:
              "Served with organic buckwheat and blackcurrant chutney with ginger (VEGAN)",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg",
            popular: true,
          },
        ],
      },
      { name: "Sandwichs baguette", meals: [] },
      { name: "Desserts", meals: [] },
      { name: "Boissons fraîches", meals: [] },
      { name: "Epicerie bio", meals: [] },
      { name: "Repas corporate", meals: [] },
      { name: "Couverts", meals: [] },
    ],
  });
});

// Northflank will provide us with a process.env.PORT variable
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
