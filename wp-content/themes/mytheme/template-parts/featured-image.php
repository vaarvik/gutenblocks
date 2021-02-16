<?php
/**
 * Displays the featured image
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

if ( has_post_thumbnail() && ! post_password_required() ) { ?>

	<figure class="featured-media">

		<div class="featured-media__image">
			<?php the_post_thumbnail(); ?>
		</div>

		<?php

		$caption = get_the_post_thumbnail_caption();

		if ( $caption ) {
			?>

			<figcaption class="featured-media__caption"><?php echo wp_kses_post( $caption ); ?></figcaption>

			<?php
		}
		?>

	</figure>

	<?php
}
