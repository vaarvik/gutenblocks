"use strict";

(function () {
  var CARDS = document.querySelectorAll(".card");
  CARDS.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("is-open");
    });
  });
})();