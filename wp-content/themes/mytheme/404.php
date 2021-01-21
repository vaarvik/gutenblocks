<?php
/**
 * The template for displaying the 404 template in the Twenty Twenty theme.
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

get_header();
?>

<main id="site-content" role="main">

	<div class="404-content">

		<h1 class="entry-title"><?php _e( 'Page Not Found', 'mytheme' ); ?></h1>

		<div class="404__info"><p><?php _e( 'The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.', 'mytheme' ); ?></p></div>

		<?php
		get_search_form(
			array(
				'label' => __( '404 not found', 'mytheme' ),
			)
		);
		?>

	</div>

</main>

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php
get_footer();
