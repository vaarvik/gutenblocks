<?php
/**
 * Plugin Name:     WP-GB
 * Description:     A plugin with great blocks.
 * Version:         1.0.0
 * Author:          Warwick
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     wp-gb
 *
 * @package         wp-gb
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function wpgb_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "wp-gb/wp-gb" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'wp-gb-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'wp-gb-block-editor', 'wp-gb' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'wp-gb-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	register_block_type(
		'wp-gb/wp-gb',
		array(
			'editor_script' => 'wp-gb-block-editor',
			'editor_style'  => 'wp-gb-block-editor',
			'style'         => 'wp-gb-block',
		)
	);
}
add_action( 'init', 'wpgb_block_init' );

/**
 * Add WP-GB as its own category
 */
function wpgb_block_category( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug' => 'wp-gb',
				'title' => __( 'WP-GB', 'wp-gb' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'wpgb_block_category', 10, 2);
