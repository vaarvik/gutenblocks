(() => {

  const D = document;
  cookieSetup(false);

  /**
   * Cookie Setup
   * ----------
   * Sets up cookies on the site.
   *
   * @param   {Boolean}  shouldConsent  If a user should consent before the cookies load
   */
  function cookieSetup(shouldConsent = true) {
    if (!getCookie("cookieConsent") && shouldConsent) addCookiePopUp(PRIVACY_LINK);
    else runCookies();
  }

  /**
   * Add Cookie Pop Up
   * ----------
   * Adds the cookie consent pop up.
   */
  function addCookiePopUp(privacyLink) {
    const popup = newElement("div", D.body, ["popup"]);

    const paragraph = newElement("p", popup, ["popup__paragraph"]);
    paragraph.innerText = "Les personvernerklæring"

    const anchor = newElement("a", popup, ["popup__anchor"]);
    anchor.innerText = "Personvernerklæring";
    anchor.href = privacyLink;

    const btn = newElement("button", popup, ["popup__btn", "btn", "secondary"], "cookie-consent-button");
    btn.innerText = "Lukk";
    btn.addEventListener("click", () => {
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
    const cookies = D.cookie.split(";"); //split cookies into array
    let finalCookie = null;

    cookies.forEach(function (cookie) {
      cookie = cookie.replace(/ /g, ""); //remove space after string split
      cookie = cookie.split("=");
      if (cookie[0] === cName) {
        finalCookie = { name: cookie[0], value: cookie[1] };
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
    gtag("config", GOOGLE_ID, { anonymize_ip: true });

    //Events
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
  }

  //-------- PAGE EVENTS --------//

  /**
   * All Events
   * ---------
   * Set up all events
   */

  function allEvents() {
    //cards
    const cards = D.querySelectorAll(".card");
    cards.forEach(function (card) {
      const cardTitle = card.querySelector(".card__heading");
      newEvent(card, "card_click", cardTitle.innerText);
    });

    //filter checkboxes
    const filterItems = D.querySelectorAll(".filter-section__item");
    filterItems.forEach(function (itemList) {
      const filterHeading = itemList.querySelector(".filter-section__sub-heading");
      const checkBoxes = itemList.querySelectorAll(".btn");
      checkBoxes.forEach(function (checkBox) {
        newEvent(checkBox, `filter_click_${filterHeading.innerText.toLowerCase().replace(" ", "_")}`, checkBox.innerText.toLowerCase());
      });
    });

    //github URL
    const entryTitle = D.querySelector(".entry-title");
    const githubIcon = D.querySelector("#github-url");
    if(githubIcon)
      newEvent(githubIcon, "github_url_click", entryTitle ? entryTitle : githubIcon.getAttribute("href"));

    //logo
    const siteLogo = D.querySelector(".site-header__logo");
    if(siteLogo)
      newEvent(siteLogo, "site_logo_click", "Back to homepage" );

    //privacy link
    const privacyLink = D.querySelector("#privacy-link");
    if(privacyLink)
      newEvent(privacyLink, "privacy_click", "Privacy policy" );

    //code copy btn
    const copyCodeBtn = D.querySelectorAll(".toolbar .toolbar-item button");
    copyCodeBtn.forEach(function (btn, i) {
      newEvent(btn, "copy_code_click", `Copied ${entryTitle.innerText} code number ${i + 1}` );
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
        event_label: label,
      });
    });
  }

})();
