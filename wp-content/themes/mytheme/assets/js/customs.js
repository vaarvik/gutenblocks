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
 * ███████╗██╗███████╗██╗     ██████╗      ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗██████╗  ██████╗ ██╗  ██╗
 * ██╔════╝██║██╔════╝██║     ██╔══██╗    ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔══██╗██╔═══██╗╚██╗██╔╝
 * █████╗  ██║█████╗  ██║     ██║  ██║    ██║     ███████║█████╗  ██║     █████╔╝ ██████╔╝██║   ██║ ╚███╔╝
 * ██╔══╝  ██║██╔══╝  ██║     ██║  ██║    ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══██╗██║   ██║ ██╔██╗
 * ██║     ██║███████╗███████╗██████╔╝    ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗██████╔╝╚██████╔╝██╔╝ ██╗
 * ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝      ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝
 *
 */


(function () {
  var checkboxes = document.querySelectorAll(".filter-checkbox");
  checkboxes.forEach(function (checkbox) {
    var listToSearch = document.querySelector("#".concat(checkbox.dataset.searchIn));
    var filterType = checkbox.dataset.searchFor;
    var btn = checkbox.querySelector(".btn");
    btn.addEventListener("click", function (e) {
      btn.classList.toggle("active");
      searchInList(checkbox, listToSearch, filterType);
    });
  });

  function searchInList(checkbox, list, filterType) {
    var filter = checkbox.innerText.toLowerCase().replace(" ", "-");
    var items = list.querySelectorAll(".search-item");
    items.forEach(function (item, i) {
      var optionsText = item.dataset[filterType];
      var optionsArray = optionsText.split(",");

      for (var _i in optionsArray) {
        //if the component has the category then don't do anything more with it
        if (optionsArray[_i].toLowerCase() === filter) {
          return;
        }
      }

      ; //if there is no match...
      //create an array from the string in dataset.filters

      var oldFilters = item.dataset.filters ? item.dataset.filters.split(",") : []; //create a variable that checks if there is any filter already and if they include the current filter

      var hasThisFilter = oldFilters && oldFilters.includes(filter); //if this item don't have this filter

      if (!hasThisFilter) {
        //add filters to the component
        item.dataset.filters = "".concat(filter).concat(oldFilters ? "," + oldFilters.join(",") : ""); //hide item

        item.style.display = "none";
      } //if the filter is already on the component then remove it again
      else {
          //remove filter
          item.dataset.filters = oldFilters.filter(function (string) {
            return string !== filter;
          }); //show item is no filters is on it

          var hasSearchFilter = item.dataset.hasSearchFilter && item.dataset.hasSearchFilter === "true";

          if (item.dataset.filters === "" && !hasSearchFilter) {
            item.style.display = "";
          }
        }
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
    var filter = field.value;
    var items = list.querySelectorAll(".search-item");
    items.forEach(function (item, i) {
      var itemText = item.dataset.searchContent;

      if (itemText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        if (!item.dataset.filters || item.dataset.filters === "") {
          item.style.display = "";
        } //tell the element that it is not affected by the filtering from the search input


        item.dataset.hasSearchFilter = "false";
      } else {
        item.dataset.hasSearchFilter = "true";
        item.style.display = "none";
      }
    });
  }
})();