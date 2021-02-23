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
      // let allowedBlocks = [
      // 	'core/paragraph',
      // 	'core/heading',
      // 	'core/list',
      // 	'core/quote',
      // 	'core/image',
      // 	'core/video',
      // 	'warwick/image-text',
      // 	'warwick/section',
      // ];
      // wp.blocks.getBlockTypes().forEach( function( blockType ) {
      // 	if ( allowedBlocks.indexOf( blockType.name ) === -1 ) {
      // 		wp.blocks.unregisterBlockType( blockType.name );
      // 	}
      // 	else{
      // 		//remove block supports
      // 		const block = wp.blocks.getBlockType( blockType.name );
      // 		const { __experimentalSelector, className, lightBlockWrapper } = block.supports;
      // 		block.supports = {className, __experimentalSelector, lightBlockWrapper}
      // 	}
      // } );
    });
  }
})();