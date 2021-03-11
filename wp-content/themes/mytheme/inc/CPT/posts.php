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

new mt_meta_field( array(
	'type'		=> 'repeater',
	'slug'		=> 'props',
	'class'		=> 'field input',
	'title'		=> __( 'Props' ),
	'location'	=> array( 'post' ),
	'fields'	=> array(
		array(
			'type'		=> 'input',
			'slug'		=> 'text',
			'class'		=> 'field input',
			'title'		=> __( 'Text' ),
			'location'	=> array( 'post' ),
		),
		array(
			'type'		=> 'input',
			'slug'		=> 'text',
			'class'		=> 'field input',
			'title'		=> __( 'Popover' ),
			'location'	=> array( 'post' ),
		),
	),
) );
