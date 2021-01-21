<?php
/**
 * The template for displaying Author info
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

if ( (bool) get_the_author_meta( 'description' ) && (bool) get_theme_mod( 'show_author_bio', true ) ) : ?>
<div class="author-info">
	<div class="author-info__header">
		<div class="avatar">
			<?php echo get_avatar( get_the_author_meta( 'ID' ), 160 ); ?>
		</div>
		<h2 class="author-info__title">
			<?php
			printf(
				/* translators: %s: Author name. */
				__( 'By %s', 'mytheme' ),
				esc_html( get_the_author() )
			);
			?>
		</h2>
	</div>
	<div class="author-info__content">
		<?php echo wp_kses_post( wpautop( get_the_author_meta( 'description' ) ) ); ?>
		<a class="author-info__link" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">
			<?php _e( 'View Archive <span aria-hidden="true">&rarr;</span>', 'mytheme' ); ?>
		</a>
	</div>
</div>
<?php endif; ?>
