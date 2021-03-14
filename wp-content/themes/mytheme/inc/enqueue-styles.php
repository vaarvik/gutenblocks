<?php

/**
 * Register and Enqueue Styles.
 */

function mytheme_register_styles() {

	wp_enqueue_style( 'gf-open-sans', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap', array(), THEME_VERSION );
	wp_enqueue_style( 'gf-lato', 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap', array(), THEME_VERSION );
	wp_enqueue_style( 'mytheme-info', get_stylesheet_uri(), array(), THEME_VERSION );
	wp_enqueue_style( 'mytheme-style', mytheme_asset_url( "assets/styles/style.css" ), array( 'gf-open-sans' ), THEME_VERSION );

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

	wp_enqueue_style( 'gf-open-sans', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap', array(), THEME_VERSION );
	wp_enqueue_style( 'gf-lato', 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap', array(), THEME_VERSION );

	wp_enqueue_style( 'mytheme-editor-style', mytheme_asset_url( "assets/styles/editor.css" ), array( 'gf-open-sans', 'gf-lato' ), THEME_VERSION );
	wp_enqueue_style( 'mytheme-meta-fields', mytheme_asset_url( "assets/styles/meta-fields.css" ), array( 'gf-open-sans', 'gf-lato' ), THEME_VERSION );

}
add_action( 'enqueue_block_editor_assets', 'mytheme_register_editor_styles' );
