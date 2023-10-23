// document.getElementsByClassName("main-title")[0].style.color = "red";

document.getElementById("main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

const buttons = document.querySelectorAll(".products .button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const burger = document.getElementById("burger");

document.getElementById("order-action").onclick = function () {
  let hasError = false;

  [burger, phone, name].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else item.parentElement.style.background = "";
  });

  if (!hasError) {
    [burger, phone, name].forEach((item) => {
      item.value = "";
    });
    alert(
      "Buyurtmangiz uchun tashakkur, tez orada buyurtmangiz ko'rsatilgan manzilga yuboriladi!!!"
    );
  }
};

const prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = function (e) {
  let currentCurrency = e.target.innerText;

  let coefficient = 1;
  let newCurrency = "$";

  if (currentCurrency === "$") {
    coefficient = 80;
    newCurrency = "₽";
  } else if (currentCurrency === "₽") {
    coefficient = "3";
    newCurrency = "BYN";
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      (prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) +
      " " +
      newCurrency;
  }
};
