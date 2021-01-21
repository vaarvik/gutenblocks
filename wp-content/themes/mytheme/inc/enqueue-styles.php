<?php

/**
 * Register and Enqueue Styles.
 */

function mytheme_register_styles() {

	wp_enqueue_style( 'mytheme-info', get_stylesheet_uri(), array(), THEME_VERSION );
	wp_enqueue_style( 'mytheme-style', mytheme_asset_url( "assets/styles/style.css" ), array(), THEME_VERSION );

}
add_action( 'wp_enqueue_scripts', 'mytheme_register_styles' );

/**
 * Register and Enqueue Admin Styles.
 */
function mytheme_register_admin_styles() {

	wp_enqueue_style( 'mytheme-info', get_stylesheet_uri(), array(), THEME_VERSION );

}
add_action( 'admin_enqueue_scripts', 'mytheme_register_admin_styles' );

/**
 * Register and Enqueue Editor Styles.
 */
function mytheme_register_editor_styles() {

	wp_enqueue_style( 'mytheme-editor-style', mytheme_asset_url( "assets/styles/editor.css" ), array(), THEME_VERSION );

}
add_action( 'enqueue_block_editor_assets', 'mytheme_register_editor_styles' );
