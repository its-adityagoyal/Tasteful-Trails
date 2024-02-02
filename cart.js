window.onload = () => {
  let cart = [];

  if (localStorage.getItem("cart"))
    cart = JSON.parse(localStorage.getItem("cart"));
  update_cart();

  //Cart and change quantity and remove item
  function update_cart() {
    //Already mentioned in cart.html
    const cartitems = document.getElementById("cart_items");
    const totalprice = document.getElementById("total_price");

    cartitems.innerHTML = "";
    let total = 0;
    localStorage.setItem("cart", JSON.stringify(cart));
    cart.forEach((item, index) => {
      cartitems.innerHTML += `<tr class="cart_items">
                            <td>${index + 1}.</td>
                            <td class="name">${item.name}</td>
                            <td><button class="change" index=${index} operator="-">-</button></td>
                            <td class="quantity">${item.quantity}</td>
                            <td><button class="change" index=${index} operator="+">+</button></td>
                            <td class="price">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${
                              item.price * item.quantity
                            }&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>
                            <td><button class="remove" index=${index}>Remove<button></td>
                            </tr>`;
      total = total + item.price * item.quantity;
    });
    totalprice.textContent = total;

    const change_button = document.getElementsByClassName("change");
    [...change_button].forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("index");
        const operator = this.getAttribute("operator");

        if (operator === "+") {
          cart[index].quantity++;
        } else if (operator === "-" && cart[index].quantity >= 1) {
          if (cart[index].quantity == 1) {
            cart.splice(index, 1);
          } else {
            cart[index].quantity--;
          }
        }
        update_cart();
      });
    });

    const remove_button = document.getElementsByClassName("remove");
    [...remove_button].forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("index");
        cart.splice(index, 1);
        update_cart();
      });
    });
  }
};

