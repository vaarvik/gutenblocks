"use strict";

/**
 *  ██████╗ █████╗ ██████╗ ██████╗
 * ██╔════╝██╔══██╗██╔══██╗██╔══██╗
 * ██║     ███████║██████╔╝██║  ██║
 * ██║     ██╔══██║██╔══██╗██║  ██║
 * ╚██████╗██║  ██║██║  ██║██████╔╝
 *  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝
 *
 */
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
/**
 * ███████╗██╗███████╗██╗     ██████╗     ███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗
 * ██╔════╝██║██╔════╝██║     ██╔══██╗    ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║
 * █████╗  ██║█████╗  ██║     ██║  ██║    ███████╗█████╗  ███████║██████╔╝██║     ███████║
 * ██╔══╝  ██║██╔══╝  ██║     ██║  ██║    ╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║
 * ██║     ██║███████╗███████╗██████╔╝    ███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║
 * ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝     ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 *
 */


(function () {
  var fields = document.querySelectorAll(".field.search");
  fields.forEach(function (field) {
    var listToSearch = document.querySelector("#".concat(field.dataset.searchIn));
    field.addEventListener("keyup", function (e) {
      searchInList(field, listToSearch);
    });
  });

  function searchInList(field, list) {
    var filter = field.value.toUpperCase();
    var items = list.querySelectorAll(".search-item");
    items.forEach(function (item, i) {
      var itemText = item.dataset.searchContent;

      if (itemText.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
})();