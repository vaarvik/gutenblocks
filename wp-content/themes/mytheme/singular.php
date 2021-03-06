<?php
/**
 * The template for displaying single posts and pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

get_header();
?>

<main id="site-content" class="site-content">

	<?php

	if ( have_posts() ) {

		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/singles/single', get_post_type() );
		}
	}

	?>

</main>

<?php get_footer(); ?>
