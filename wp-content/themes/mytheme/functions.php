<?php
/**
 * MyTheme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

/**
 * REQUIRED FILES
 * Include required files.
 */

// Constants
define( "THEME_VERSION", wp_get_theme()->get( 'Version' ) );

// General functions
require get_template_directory() . '/inc/helper-functions.php';

// Add theme support
require get_template_directory() . '/inc/theme-support.php';

// Enqueue scripts
require get_template_directory() . '/inc/enqueue-scripts.php';

// Enqueue styles
require get_template_directory() . '/inc/enqueue-styles.php';

// Register menus
require get_template_directory() . '/inc/menus.php';

// Register widgets
require get_template_directory() . '/inc/widgets.php';

// Custom content links
require get_template_directory() . '/inc/content-links.php';

// Custom post types
require get_template_directory() . '/inc/CPT/bootstrap.php';

// Custom option manus
require get_template_directory() . '/inc/COM/bootstrap.php';
