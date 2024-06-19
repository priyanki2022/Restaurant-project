const menuData = {
  starter: [
    {
      name: "Chilly Paneer",
      desc: "Crispy fried cottage cheese"
    },
    {
      name: "Tomato Soup",
      desc: "A vegetable broth prepared using Garden Fresh Tomatoes, Herbs and Spices"
    },
    {
      name: "Crispy Corn",
      desc: "Veg fried corn kennels tossed in chilly soya sauce"
    },
    {
      name: "Manchow Soup",
      desc: "A popular Hot n Spicy Meal Soup prepared in Chinese style and served with Fried Noodles"
    },
    {
      name: "Veg Cheese Roll",
      desc: "Chef's Special"
    },
    {
      name: "Hot Dog",
      desc: "Tasty chicken sausage with lots of sauces"
    }
  ],
  main: [
    {
      name: "Paneer Tikka Masala",
      desc: "Barberqued paneer pieces cooked in makhani gravy"
    },
    {
      name: "Palak Paneer",
      desc: "Mildly spiced cottage cheese preparation in spinach and onion gravy"
    },
    {
      name: "Butter Chicken",
      desc: "A tasty dish featuring boneless chicken in a smooth gravy"
    }
  ],
  drinks: [
    {
      name: "Blue Lagoon",
      desc: "A wonderful fizzy drink with blue curracao, cream and soda"
    },
    {
      name: "Assorted Milk Shake",
      desc: "Cool refreshing beverage made with milk and ice cream of your choice"
    },
    {
      name: "Pina Colada",
      desc: "A tropical mocktail with pineapple juice and coconut cream"
    },
    {
      name: "Fresh Fruit Juice",
      desc: "Assorted seasonal fresh fruit juice served chilled"
    },
    {
      name: "Fruit Punch",
      desc: "An exotic mocktail with fruit pulp and dash of soda"
    }
  ],
  dessert: [
    {
      name: "Vanilla",
      desc: ""
    },
    {
      name: "Chocolate Ice Cream",
      desc: ""
    },
    {
      name: "Sizzling Brownie With Ice Cream",
      desc: ""
    },
    {
      name: "Kesar Pista",
      desc: ""
    },
    {
      name: "Butterscotch Ice Cream",
      desc: ""
    }
  ]
};

function loadMenu() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    myFunction(this);
  };
  xhttp.onerror = errorHandle;
  xhttp.open("GET", "menu.json");
  xhttp.send();
}

function myFunction(json) {
  const menuObj = JSON.parse(json.responseText);
  makeMenu(menuObj);
}

function errorHandle() {
  makeMenu(menuData);
}

window.onload = loadMenu();

function makeMenu(obj) {
  const starterContainer = document
    .getElementById("menu-starters")
    .querySelector(".menu-item-container");
  const mainContainer = document
    .getElementById("menu-main")
    .querySelector(".menu-item-container");
  const drinksContainer = document
    .getElementById("menu-drinks")
    .querySelector(".menu-item-container");
  const dessertContainer = document
    .getElementById("menu-dessert")
    .querySelector(".menu-item-container");
  const starter = obj.starter;
  const main = obj.main;
  const drinks = obj.drinks;
  const dessert = obj.dessert;
  menuObjects(starter, starterContainer);
  menuObjects(main, mainContainer);
  menuObjects(drinks, drinksContainer);
  menuObjects(dessert, dessertContainer);
}

function menuObjects(menuObj, target) {
  menuObj.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("menu-item");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = item.name;
    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.desc;
    itemContainer.appendChild(itemHeading);
    itemContainer.appendChild(itemDesc);
    target.appendChild(itemContainer);
  });
}
