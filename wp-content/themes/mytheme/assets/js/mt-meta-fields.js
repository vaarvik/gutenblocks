"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * ███╗   ███╗████████╗    ███╗   ███╗███████╗████████╗ █████╗     ███████╗██╗███████╗██╗     ██████╗ ███████╗
 * ████╗ ████║╚══██╔══╝    ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗    ██╔════╝██║██╔════╝██║     ██╔══██╗██╔════╝
 * ██╔████╔██║   ██║       ██╔████╔██║█████╗     ██║   ███████║    █████╗  ██║█████╗  ██║     ██║  ██║███████╗
 * ██║╚██╔╝██║   ██║       ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║    ██╔══╝  ██║██╔══╝  ██║     ██║  ██║╚════██║
 * ██║ ╚═╝ ██║   ██║       ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║    ██║     ██║███████╗███████╗██████╔╝███████║
 * ╚═╝     ╚═╝   ╚═╝       ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝ ╚══════╝
 *
 */
(function () {
  addRepeaterEvents();

  function addRepeaterEvents() {
    var repeaterParent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (!repeaterParent) repeaterParent = document;
    var repeaters = repeaterParent.querySelectorAll(".repeater");
    repeaters.forEach(function (repeater) {
      var addBtn = repeater.querySelector("#".concat(repeater.id, "-add-btn"));
      var info = repeater.querySelector("#".concat(repeater.id, "-info"));
      var item = repeater.querySelector("#".concat(repeater.id, "_0-reference"));
      info.value = info.dataset.startValue;
      addBtn.addEventListener("click", function (e) {
        addField(info, item, repeater);
      });
    });
  }

  function updateChildrenInfo(element, callback) {
    var fields = element.children;

    for (var i = 0; i < fields.length; i++) {
      callback(element, fields[i]);

      if (fields[i].children) {
        updateChildrenInfo(fields[i], function (parent, field) {
          callback(parent, field);
        });
      }
    }
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function addField(info, item, repeater) {
    //get the ids of the repeater items that should exist and generate a new ID for the new field
    var repeaterIds = JSON.parse(info.value);
    var thisId = parseInt(Math.max.apply(Math, _toConsumableArray(repeaterIds)) + 1); //clone an item based on a ghost reference, remove the reference class and make adds the generated ID to it

    var itemClone = item.cloneNode(true);
    itemClone.classList.remove("reference");
    itemClone.id = "".concat(repeater.id, "_").concat(thisId); //updates the value, name and ID of each childs of repeaters that is imported

    updateChildrenInfo(itemClone, function (parent, field) {
      field.value = ""; //prevent a change of the name or id of a reference element

      if (field.classList.contains('reference')) return;

      if (field.classList.contains('repeater__item')) {
        field.id = "".concat(parent.id, "_0");
        field.name = "".concat(parent.id, "_0");
      } else if (field.classList.contains('repeater__btn')) {
        field.id = "".concat(parent.id, "-").concat(field.dataset.slug);
        field.name = "".concat(parent.id, "-").concat(field.dataset.slug);
      } else if (field.classList.contains('repeater__info')) {
        field.id = "".concat(parent.id, "-").concat(field.dataset.slug);
        field.name = "".concat(parent.id);
        field.value = "[0]"; //set the default array size of the new repeater info
      } else {
        field.id = "".concat(parent.id, "__").concat(field.dataset.slug);
        field.name = "".concat(parent.id, "__").concat(field.dataset.slug);
      }
    }); //add events for the buttons nested repeaters in the cloned repeater

    if (itemClone.querySelector(".repeater")) {
      var cloneRepeaters = itemClone.querySelectorAll(".repeater");
      cloneRepeaters.forEach(function (element) {
        addRepeaterEvents(itemClone);
      });
    } //add the clone to the DOM after the last repeater


    var prevSibling = repeater.querySelector("#".concat(repeater.id, "_").concat(repeaterIds[repeaterIds.length - 1]));
    insertAfter(prevSibling, itemClone); //update the array that holds the info about total repeater

    repeaterIds.push(thisId);
    info.value = JSON.stringify(repeaterIds);
  }
})();