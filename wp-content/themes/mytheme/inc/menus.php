<?php
/**
 * Register navigation menus uses wp_nav_menu in five places.
 */
function mytheme_menus() {

	$locations = array(
		'primary'  => __( 'Main Menu', 'mytheme' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'mytheme_menus' );
