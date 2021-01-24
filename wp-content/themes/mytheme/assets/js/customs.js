"use strict";

(function () {
  var CARDS = document.querySelectorAll(".card");
  CARDS.forEach(function (card, i) {
    card.addEventListener("click", function (e) {
      if (card.classList.toggle("is-open")) resetAllCardsExcept(card);
    });
  });

  function resetAllCardsExcept(card) {
    CARDS.forEach(function (otherCard) {
      if (card != otherCard) otherCard.classList.remove("is-open");
    });
  }
})();