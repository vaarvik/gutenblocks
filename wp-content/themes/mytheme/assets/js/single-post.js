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

    if (theContentEls[0] && theContentEls[0].classList.contains("is-style-preamble")) {
      entryHeader.appendChild(theContentEls[0]);
    }
  }
})();