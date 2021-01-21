<?php
/**
 * Plugin Name:     Gutenblocks
 * Description:     A plugin with great blocks.
 * Version:         1.0.0
 * Author:          Warwick
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenblocks
 *
 * @package         gutenblocks
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function gutenblocks_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "gutenblocks/gutenblocks" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'gutenblocks-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'gutenblocks-block-editor', 'gutenblocks' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'gutenblocks-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	register_block_type(
		'gutenblocks/gutenblocks',
		array(
			'editor_script' => 'gutenblocks-block-editor',
			'editor_style'  => 'gutenblocks-block-editor',
			'style'         => 'gutenblocks-block',
		)
	);
}
add_action( 'init', 'gutenblocks_block_init' );
