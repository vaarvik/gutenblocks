"use strict";

/**
 * ███████╗██╗███╗   ██╗ ██████╗ ██╗     ███████╗    ██████╗  ██████╗ ███████╗████████╗
 * ██╔════╝██║████╗  ██║██╔════╝ ██║     ██╔════╝    ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝
 * ███████╗██║██╔██╗ ██║██║  ███╗██║     █████╗      ██████╔╝██║   ██║███████╗   ██║
 * ╚════██║██║██║╚██╗██║██║   ██║██║     ██╔══╝      ██╔═══╝ ██║   ██║╚════██║   ██║
 * ███████║██║██║ ╚████║╚██████╔╝███████╗███████╗    ██║     ╚██████╔╝███████║   ██║
 * ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝
 *
 */
(function () {
  var post = document.querySelector(".post");
  var entryHeader, entryContent;

  if (post) {
    entryHeader = post.querySelector(".entry-header");
    entryContent = post.querySelector(".entry-content");
  }

  if (entryContent && entryContent.children) {
    var theContentEls = entryContent.children;
    var firstEl = theContentEls[0];
    var secondEl = theContentEls[1];

    if (firstEl) {
      if (!firstEl.classList.contains("featured-media") && firstEl.classList.contains("is-style-preamble")) entryHeader.appendChild(firstEl);else if (secondEl && secondEl.classList.contains("is-style-preamble")) entryHeader.appendChild(secondEl);
    }
  }
})();