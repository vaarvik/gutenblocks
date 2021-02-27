"use strict";

/**
 * ██╗    ██╗██████╗     ██████╗ ██╗      ██████╗  ██████╗██╗  ██╗     ██████╗ ██████╗ ██████╗ ███████╗
 * ██║    ██║██╔══██╗    ██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 * ██║ █╗ ██║██████╔╝    ██████╔╝██║     ██║   ██║██║     █████╔╝     ██║     ██║   ██║██║  ██║█████╗
 * ██║███╗██║██╔═══╝     ██╔══██╗██║     ██║   ██║██║     ██╔═██╗     ██║     ██║   ██║██║  ██║██╔══╝
 * ╚███╔███╔╝██║         ██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗    ╚██████╗╚██████╔╝██████╔╝███████╗
 *  ╚══╝╚══╝ ╚═╝         ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
 *
 */
(function () {
  document.querySelectorAll(".wp-block-code").forEach(function (pre) {
    var codeTag = pre.querySelector("code");
    codeTag.classList.add("language-jsx");
  });
  Prism.highlightAll(); //add a class that shows if the element has a scrollbar or not

  document.querySelectorAll(".code-toolbar").forEach(function (element) {
    var pre = element.querySelector(".wp-block-code");

    if (pre.scrollWidth - 1 > pre.offsetWidth) {
      element.classList.add("has-scrollbar");
    }
  });
})();
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
    createFilterStyle(filterType);
    btn.addEventListener("click", function (e) {
      var notActive = btn.classList.toggle("active");
      searchInList(checkbox, listToSearch, filterType, notActive);
    });
  });

  function searchInList(checkbox, list, filterType, notActive) {
    var filter = checkbox.innerText.toLowerCase().replace(" ", "-");
    var items = list.querySelectorAll(".search-item");
    var currentFilters = list.dataset["".concat(filterType, "Filters")] ? list.dataset["".concat(filterType, "Filters")].split(",") : [];
    updateFiltersArray();

    if (!currentFilters.length && !notActive) {
      resetFilter();
      return;
    }

    updateItemFilters();

    function updateItemFilters() {
      items.forEach(function (item, i) {
        var itemCategories = item.dataset[filterType].split(",");

        if (arraysHasMatch(currentFilters, itemCategories)) {
          item.classList.remove(filterType + "-filter");
          return;
        }

        item.classList.add(filterType + "-filter");
      });
    }

    function updateFiltersArray() {
      if (notActive) {
        currentFilters.push(filter);
        list.dataset["".concat(filterType, "Filters")] = currentFilters;
      } else {
        currentFilters = currentFilters.filter(function (string) {
          return string !== filter;
        });
        list.dataset["".concat(filterType, "Filters")] = currentFilters;
      }
    }

    function resetFilter() {
      items.forEach(function (item) {
        item.classList.remove(filterType + "-filter");
      });
    }
  }

  function arraysHasMatch(array1, array2) {
    for (var i in array1) {
      for (var j in array2) {
        if (array1[i].toLowerCase() === array2[j].toLowerCase()) return true;
      }
    }

    ;
    return false;
  }

  function createFilterStyle(filterType) {
    if (!document.querySelector("#".concat(filterType, "-style"))) {
      var styleEl = document.createElement("style");
      styleEl.id = "".concat(filterType, "-style");
      styleEl.innerText = ".".concat(filterType, "-filter {\n\t\t\t\tdisplay: none;\n\t\t\t}").replace(/(\r\n|\n|\r)/gm, "");
      document.getElementsByTagName('head')[0].appendChild(styleEl);
    }
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
          item.classList.remove("has-search-filter");
        } //tell the element that it is not affected by the filtering from the search input


        item.dataset.hasSearchFilter = "false";
      } else {
        item.dataset.hasSearchFilter = "true";
        item.classList.add("has-search-filter");
      }
    });
  }
})();