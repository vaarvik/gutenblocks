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

/**
 * Pretty Print
 * ----------
 * Pretty prints an array.
 *
 * @param   string  $value  The value to be printed
 *
 * @return  boolean         True
 */
function mytheme_pretty_print( $value ) {
	echo "<pre>";
	print_r( $value );
	echo "</pre>";

	return true;
}

/**
 * Get String From Array Property
 * ----------
 * Creates a comma seperated string from a property in an array.
 *
 * @param   array  	$array  The array to scanned
 * @param   string  $prop  	The property to be used
 *
 * @return  string         	The final string with the values
 */
function mytheme_get_string_from_array_prop( $array, $prop, $seperator = "," ) {
	$array_string = "";
	if( $array ) {
		foreach ( $array as $key => $item) {
			$array_string .= $item->$prop;
			if( $key < count( $array ) - 1 ) {
				$array_string .= $seperator;
			}
		}
	}

	return $array_string;
}

/**
 * Excerpt
 * ----------
 * Trims text into an excerpt of a given length
 *
 * @param   string	$text    The text to be trimmed
 * @param   int 	$length  The length of the excerpt
 *
 * @return  string           The excerpt
 */
function mytheme_excerpt( $text, $length ) {
	$excerpt = wp_trim_words( $text, $length );
	$excerpt = strip_tags( $excerpt );

	return $excerpt;
}
