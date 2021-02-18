"use strict";

/*
 *
 *  ██████╗ ██╗   ██╗████████╗███████╗███╗   ██╗██████╗ ███████╗██████╗  ██████╗
 * ██╔════╝ ██║   ██║╚══██╔══╝██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗██╔════╝
 * ██║  ███╗██║   ██║   ██║   █████╗  ██╔██╗ ██║██████╔╝█████╗  ██████╔╝██║  ███╗
 * ██║   ██║██║   ██║   ██║   ██╔══╝  ██║╚██╗██║██╔══██╗██╔══╝  ██╔══██╗██║   ██║
 * ╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║██████╔╝███████╗██║  ██║╚██████╔╝
 *  ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝
 *
 * Scripts for changing or removing gutenberg blocks.
 */
(function () {
  console.log("hyey");

  if (wp.blocks) {
    wp.domReady(function () {
      // Paragraph
      wp.blocks.registerBlockStyle("core/paragraph", {
        name: "preamble",
        label: "Ingress"
      });
      wp.blocks.registerBlockStyle("core/paragraph", {
        name: "notice",
        label: "Notis"
      });
      wp.blocks.unregisterBlockStyle("core/image", 'rounded'); //remove blocks

      var allowedBlocks = ['core/paragraph', 'core/heading', 'core/list', 'core/quote', 'core/image', 'core/video', 'warwick/image-text', 'warwick/section'];
      wp.blocks.getBlockTypes().forEach(function (blockType) {
        if (allowedBlocks.indexOf(blockType.name) === -1) {
          wp.blocks.unregisterBlockType(blockType.name);
        } else {
          //remove block supports
          var block = wp.blocks.getBlockType(blockType.name);
          var _block$supports = block.supports,
              __experimentalSelector = _block$supports.__experimentalSelector,
              className = _block$supports.className,
              lightBlockWrapper = _block$supports.lightBlockWrapper;
          block.supports = {
            className: className,
            __experimentalSelector: __experimentalSelector,
            lightBlockWrapper: lightBlockWrapper
          };
        }
      });
    });
  }
})();