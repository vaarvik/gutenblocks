<?php

/**
 * New Form ID
 * ----------
 * If there is several forms at the same page, each of them will get their own ID.
 *
 * @return  int
 */
function mytheme_new_form_id() {
	static $id_counter = 0;
	return ++$id_counter;
}

/**
 * Asset URL
 * ----------
 *
 * Returns the full path of an asset.
 * Adds ".min" if WP_DEBUG is false.
 *
 * @param   String  $path  Reative path from within theme folder
 *
 * @return  String         Full path
 */
function mytheme_asset_url( $path ) {
	if ( substr( $path, 0, 1 ) ) $path = "/" . $path;

	if ( WP_DEBUG == false ) {
		$broken_path = explode( ".", $path );
		array_splice( $broken_path, count( $broken_path ) - 1, 0, "min" );
		$path = implode( ".", $broken_path );
	}

	return get_template_directory_uri() . $path;
}
