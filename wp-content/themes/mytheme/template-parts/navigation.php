<?php
/**
 * Displays the next and previous post navigation in single posts.
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

$next_post = get_next_post();
$prev_post = get_previous_post();

if ( $next_post || $prev_post ) {

	$pagination_classes = '';

	if ( ! $next_post ) {
		$pagination_classes = ' only-one only-prev';
	} elseif ( ! $prev_post ) {
		$pagination_classes = ' only-one only-next';
	}

	?>

	<nav class="pagination-single <?php echo esc_attr( $pagination_classes ); ?>" aria-label="<?php esc_attr_e( 'Post', 'mytheme' ); ?>" role="navigation">

		<hr/>

		<div class="pagination-single__content">

			<?php
			if ( $prev_post ) {
				?>

				<a class="previous-post" href="<?php echo esc_url( get_permalink( $prev_post->ID ) ); ?>">
					<span class="pagination-single__arrow" aria-hidden="true">&larr;</span>
					<span class="pagination-single__post-name"><?php echo wp_kses_post( get_the_title( $prev_post->ID ) ); ?></span>
				</a>

				<?php
			}

			if ( $next_post ) {
				?>

				<a class="next-post" href="<?php echo esc_url( get_permalink( $next_post->ID ) ); ?>">
					<span class="pagination-single__arrow" aria-hidden="true">&rarr;</span>
					<span class="pagination-single__post-name"><?php echo wp_kses_post( get_the_title( $next_post->ID ) ); ?></span>
				</a>
				<?php
			}
			?>

		</div>

		<hr/>

	</nav>

	<?php
}
