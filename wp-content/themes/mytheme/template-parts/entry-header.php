<?php
/**
 * Displays the post header
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

?>

<header class="entry-header">

	<?php
	/**
	 * Allow child themes and plugins to filter the display of the categories in the entry header.
	 *
	 * @since MyTheme 1.0
	 *
	 * @param bool   Whether to show the categories in header, Default true.
	 */

	the_title( '<h1 class="entry-title">', '</h1>' );

	?>

</header>
