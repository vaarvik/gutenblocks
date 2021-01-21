<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<?php

	get_template_part( 'template-parts/entry-header' );

	if ( ! is_search() ) {
		get_template_part( 'template-parts/featured-image' );
	}

	?>

		<div class="entry-content">

			<?php
			if ( is_search() || ! is_singular() ) {
				the_excerpt();
			} else {
				the_content( __( 'Continue reading', 'mytheme' ) );
			}
			?>

		</div>

	<div class="post-handling">
		<?php
		wp_link_pages(
			array(
				'before'      => '<nav class="post-navigation" aria-label="' . esc_attr__( 'Page', 'mytheme' ) . '"><span class="post-navigation__label">' . __( 'Pages:', 'mytheme' ) . '</span>',
				'after'       => '</nav>',
				'link_before' => '<span class="post-navigation__number">',
				'link_after'  => '</span>',
			)
		);

		edit_post_link();

		if ( post_type_supports( get_post_type( get_the_ID() ), 'author' ) && is_single() ) {

			get_template_part( 'template-parts/entry-author-bio' );

		}
		?>

	</div>

	<?php

	if ( is_single() ) {

		get_template_part( 'template-parts/navigation' );

	}

	/**
	 *  Output comments wrapper if it's a post, or if comments are open,
	 * or if there's a comment number – and check for password.
	 * */
	if ( ( is_single() || is_page() ) && ( comments_open() || get_comments_number() ) && ! post_password_required() ) {
		?>

		<?php comments_template(); ?>

		<?php
	}
	?>

</article>
