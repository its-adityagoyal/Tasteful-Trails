window.onload = () => {
  const prices = {
    "Crispy Baby Corn": 99,
    "French Fries": 99,
    "Paneer Tikka": 79,
    "Tomato Soup": 79,
    "Hakka Noodles": 99,
    "Steamed Momos": 59,
    "Alfredo": 119,
    "Veggie Pizza": 119,
    "Veg Roll": 40,
    "Cheese Paratha": 49,
    "Caribbean Roti": 99,
    "Fish Fry": 79,
    "Pulao": 59,
    "Meat Special": 129,
    "Shahi Paneer": 119,
    "Chicken Drumstick": 149,
    "Oyster Pudding": 79,
    "Gulab Jamun": 25,
    "Soan Papdi": 30,
    "Dal Baati Churma": 49,
    "Plum Cake": 49,
    "Chocolate Pastry": 49,
    "Sweet Special": 59,
    "Mixed Berry Icecream": 49,
    "Iced Chocolate": 69,
    "Royal Drink": 49,
    "Masala Soda": 25,
    "Orange Juice": 30,
    "Coffee": 30,
    "Darjeeling Tea": 25,
    "Blue Lagoon": 49,
    "Lemon Soda": 35,
  };

  const items = [
    "Crispy Baby Corn",
    "French Fries",
    "Paneer Tikka",
    "Tomato Soup",
    "Hakka Noodles",
    "Steamed Momos",
    "Alfredo",
    "Veggie Pizza",
    "Veg Roll",
    "Cheese Paratha",
    "Caribbean Roti",
    "Fish Fry",
    "Pulao",
    "Meat Special",
    "Shahi Paneer",
    "Chicken Drumstick",
    "Oyster Pudding",
    "Gulab Jamun",
    "Soan Papdi",
    "Dal Baati Churma",
    "Plum Cake",
    "Chocolate Pastry",
    "Sweet Special",
    "Mixed Berry Icecream",
    "Iced Chocolate",
    "Royal Drink",
    "Masala Soda",
    "Orange Juice",
    "Coffee",
    "Darjeeling Tea",
    "Blue Lagoon",
    "Lemon Soda",
  ];

  let cart = [];
  if(localStorage.getItem("cart")) cart = JSON.parse(localStorage.getItem("cart"));

  //Add to Added, Notification,Items added with click of button
  const addbutton = document.querySelectorAll(".btn");
  const notification = document.getElementById("notification");
  let item_counter = document.getElementById("item-counter");
  var count = 0;
  cart.forEach((item) => {
    count+=item.quantity;
  })
  item_counter.innerHTML = count;

  addbutton.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent != "Added") {
        button.textContent = "Added";
        item_counter.textContent++;
        shownotification("Item Added to Cart! ");
      } 
      else {
        shownotification("Item Already Added! ");
      }
      
      const ID = this.id;
      const item_name = items[ID - 1];

      const existing = cart.find((item) => item.name === item_name);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name: item_name, price: prices[item_name], quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });

  //Notification function
  function shownotification(message) {
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 2000);
  }
};

