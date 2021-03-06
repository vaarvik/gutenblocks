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

(function () {
  var D = document;
  cookieSetup(false);
  /**
   * Cookie Setup
   * ----------
   * Sets up cookies on the site.
   *
   * @param   {Boolean}  shouldConsent  If a user should consent before the cookies load
   */

  function cookieSetup() {
    var shouldConsent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (!getCookie("cookieConsent") && shouldConsent) addCookiePopUp(PRIVACY_LINK);else runCookies();
  }
  /**
   * Add Cookie Pop Up
   * ----------
   * Adds the cookie consent pop up.
   */


  function addCookiePopUp(privacyLink) {
    var popup = newElement("div", D.body, ["popup"]);
    var paragraph = newElement("p", popup, ["popup__paragraph"]);
    paragraph.innerText = "Les personvernerklæring";
    var anchor = newElement("a", popup, ["popup__anchor"]);
    anchor.innerText = "Personvernerklæring";
    anchor.href = privacyLink;
    var btn = newElement("button", popup, ["popup__btn", "btn", "secondary"], "cookie-consent-button");
    btn.innerText = "Lukk";
    btn.addEventListener("click", function () {
      deleteElement(popup, true);
      setSessionCookie("cookieConsent", true);
      runCookies();
    });
  }
  /**
   * Set Session Cookie
   * ----------
   * Sets a cookie.
   *
   * @param   {String}  cName   The name of the cookie
   * @param   {String}  cValue  The value in the cookie
   */


  function setSessionCookie(cName, cValue) {
    D.cookie = cName + "=" + cValue + ";" + "path=/";
  }
  /**
   * Get Cookie
   * ----------
   * Gets a cookie by its name.
   *
   * @param   {String}  cName  The name of the cookie to find
   *
   * @return  {Object}         The final cookie object
   */


  function getCookie(cName) {
    var cookies = D.cookie.split(";"); //split cookies into array

    var finalCookie = null;
    cookies.forEach(function (cookie) {
      cookie = cookie.replace(/ /g, ""); //remove space after string split

      cookie = cookie.split("=");

      if (cookie[0] === cName) {
        finalCookie = {
          name: cookie[0],
          value: cookie[1]
        };
      }
    });
    return finalCookie;
  }
  /**
   * Run Cookies
   * ----------
   * Adds all cookies to the site.
   */


  function runCookies() {
    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", GOOGLE_ID, {
      anonymize_ip: true
    }); //Events

    allEvents();
  }
  /**
   * GTAG
   * ----------
   * Used to send information to Google Analytics
   *
   * @return  {[type]}  [return description]
   */


  function gtag() {
    dataLayer.push(arguments);
  } //-------- PAGE EVENTS --------//

  /**
   * All Events
   * ---------
   * Set up all events
   */


  function allEvents() {
    //cards
    var cards = D.querySelectorAll(".card");
    cards.forEach(function (card) {
      var cardTitle = card.querySelector(".card__heading");
      newEvent(card, "card_click", cardTitle.innerText);
    }); //filter checkboxes

    var filterItems = D.querySelectorAll(".filter-section__item");
    filterItems.forEach(function (itemList) {
      var filterHeading = itemList.querySelector(".filter-section__sub-heading");
      var checkBoxes = itemList.querySelectorAll(".btn");
      checkBoxes.forEach(function (checkBox) {
        newEvent(checkBox, "filter_click_".concat(filterHeading.innerText.toLowerCase().replace(" ", "_")), checkBox.innerText.toLowerCase());
      });
    }); //github URL

    var entryTitle = D.querySelector(".entry-title");
    var githubIcon = D.querySelector("#github-url");
    if (githubIcon) newEvent(githubIcon, "github_url_click", entryTitle ? entryTitle.innerText : githubIcon.getAttribute("href")); //logo

    var siteLogo = D.querySelector(".site-header__logo");
    if (siteLogo) newEvent(siteLogo, "site_logo_click", "Back to homepage"); //privacy link

    var privacyLink = D.querySelector("#privacy-link");
    if (privacyLink) newEvent(privacyLink, "privacy_click", "Privacy policy"); //code copy btn

    var copyCodeBtn = D.querySelectorAll(".toolbar .toolbar-item button");
    copyCodeBtn.forEach(function (btn, i) {
      newEvent(btn, "copy_code_click", "Copied ".concat(entryTitle.innerText, " code number ").concat(i + 1));
    });
  }
  /**
   * Button Event
   * --------
   * Sets up the event for when a button is clicked
   */


  function newEvent(element, slug, label) {
    element.addEventListener("click", function (e) {
      gtag("event", slug, {
        event_label: label
      });
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
    filter = filter[0] === "-" ? filter.substring(1) : filter;
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
        if (array1[i].toLowerCase().replace(" ", "") == array2[j].toLowerCase().replace(" ", "")) return true;
      }
    }

    ;
    return false;
  }

  function createFilterStyle(filterType) {
    if (!document.querySelector("#".concat(filterType, "-style"))) {
      var styleEl = document.createElement("style");
      styleEl.id = "".concat(filterType, "-style");
      styleEl.innerText = ".".concat(filterType, "-filter { display: none; }").replace(/(\r\n|\n|\r)/gm, "");
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
/**
 * ██╗███╗   ███╗ ██████╗      ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗ ██╗███╗   ██╗███████╗██████╗
 * ██║████╗ ████║██╔════╝     ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██║████╗  ██║██╔════╝██╔══██╗
 * ██║██╔████╔██║██║  ███╗    ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║██╔██╗ ██║█████╗  ██████╔╝
 * ██║██║╚██╔╝██║██║   ██║    ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║██║╚██╗██║██╔══╝  ██╔══██╗
 * ██║██║ ╚═╝ ██║╚██████╔╝    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║██║██║ ╚████║███████╗██║  ██║
 * ╚═╝╚═╝     ╚═╝ ╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
 *
 */


(function () {
  // Add fixes to object-fit image elements in IE
  var imgContainers = document.querySelectorAll(".img-container");

  if (imgContainers && isIE()) {
    for (var i = 0; i < imgContainers.length; i++) {
      var image = imgContainers[i].querySelector("img");
      if (!image) continue;
      var src = image.src;
      image.style.opacity = 0;
      imgContainers[i].style.backgroundImage = "url(" + src + ")";
    }
  }
})();
/**
 * ██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗ ███████╗
 * ██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗██╔════╝
 * ███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝███████╗
 * ██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║
 * ██║  ██║███████╗███████╗██║     ███████╗██║  ██║███████║
 * ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝
 *
 */

/**
 * Check if current browser is Internet Explorer
 *
 * @return  {Boolean}
 */


function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ") > 0;
  var trident = ua.indexOf("Trident/") > 0;
  var edge = ua.indexOf("Edge/") > 0;
  return msie || trident || edge;
}