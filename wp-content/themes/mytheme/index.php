<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

get_header();
?>

<main id="site-content" role="main">

<?php

if ( have_posts() ) {

	while ( have_posts() ) {
		the_post();
		?>

		<h1><?php echo the_title(); ?></h1>

		<?php
		the_content();
	}
}

?>

	<?php get_template_part( 'template-parts/pagination' ); ?>

</main>

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php
get_footer();
