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

	<div class="entry-header__content">

		<?php
		/**
		 * Allow child themes and plugins to filter the display of the categories in the entry header.
		 *
		 * @since MyTheme 1.0
		 *
		 * @param bool   Whether to show the categories in header, Default true.
		 */

		the_title( '<h1 class="entry-title">', '</h1>' );

		if ( has_excerpt() ) {
			?>

			<div class="entry-header__excerpt">
				<p class="is-style-preamble"><?php echo get_the_excerpt(); ?></p>
			</div>

			<?php
		}
		?>

	</div>

</header>
