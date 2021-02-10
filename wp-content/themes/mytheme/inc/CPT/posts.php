<?php
/**
 * ██████╗  ██████╗ ███████╗████████╗███████╗
 * ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝
 * ██████╔╝██║   ██║███████╗   ██║   ███████╗
 * ██╔═══╝ ██║   ██║╚════██║   ██║   ╚════██║
 * ██║     ╚██████╔╝███████║   ██║   ███████║
 * ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝
 *
 * Adjustments to the default post type by WordPress.
 */

// Add fields
new mt_meta_field( array(
	'type'		=> 'url',
	'slug'		=> 'link',
	'class'		=> 'field input',
	'title'		=> __('Reference URL'),
	'location'	=> array( 'post' ),
) );
