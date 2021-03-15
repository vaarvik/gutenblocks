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
	'title'		=> __('Reference URL'),
	'location'	=> array( 'post' ),
) );

new mt_meta_field( array(
	'type'		=> 'repeater',
	'slug'		=> 'props',
	'title'		=> __( 'Props' ),
	'location'	=> array( 'post' ),
	'fields'	=> array(
		array(
			'type'		=> 'input',
			'slug'		=> 'text',
			'title'		=> __( 'Text' ),
		),
		array(
			'type'		=> 'input',
			'slug'		=> 'popover',
			'title'		=> __( 'Popover' ),
		),
		array(
			'type'		=> 'repeater',
			'slug'		=> 'props',
			'title'		=> __( 'Props' ),
			'location'	=> array( 'post' ),
			'fields'	=> array(
				array(
					'type'		=> 'input',
					'slug'		=> 'text',
					'title'		=> __( 'Text' ),
				),
				array(
					'type'		=> 'input',
					'slug'		=> 'popover',
					'title'		=> __( 'Popover' ),
				),
				array(
					'type'		=> 'repeater',
					'slug'		=> 'props',
					'title'		=> __( 'Props' ),
					'location'	=> array( 'post' ),
					'fields'	=> array(
						array(
							'type'		=> 'input',
							'slug'		=> 'text',
							'title'		=> __( 'Text' ),
						),
						array(
							'type'		=> 'input',
							'slug'		=> 'popover',
							'title'		=> __( 'Popover' ),
						),
					),
				),
			),

		),
	),
) );
