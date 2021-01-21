<?php
/**
 * The template file for displaying the comments and comment form for the
 * Twenty Twenty theme.
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
*/
if ( post_password_required() ) {
	return;
}

if ( $comments ) {
	?>

	<section class="comments" id="comments">

		<?php
		$comments_number = absint( get_comments_number() );
		?>

		<header class="comments__header">

			<h2 class="comments__title">
			<?php
			if ( ! have_comments() ) {
				_e( 'Leave a comment', 'mytheme' );
			} elseif ( 1 === $comments_number ) {
				/* translators: %s: Post title. */
				printf( _x( 'One reply on &ldquo;%s&rdquo;', 'comments title', 'mytheme' ), get_the_title() );
			} else {
				printf(
					/* translators: 1: Number of comments, 2: Post title. */
					_nx(
						'%1$s reply on &ldquo;%2$s&rdquo;',
						'%1$s replies on &ldquo;%2$s&rdquo;',
						$comments_number,
						'comments title',
						'mytheme'
					),
					number_format_i18n( $comments_number ),
					get_the_title()
				);
			}

			?>
			</h2>

		</header>

		<div class="comments_content">

			<?php
			wp_list_comments(
				array(
					'avatar_size' => 120,
					'style'       => 'div',
				)
			);

			$comment_pagination = paginate_comments_links(
				array(
					'echo'      => false,
					'end_size'  => 0,
					'mid_size'  => 0,
					'next_text' => __( 'Newer Comments', 'mytheme' ) . ' <span aria-hidden="true">&rarr;</span>',
					'prev_text' => '<span aria-hidden="true">&larr;</span> ' . __( 'Older Comments', 'mytheme' ),
				)
			);

			if ( $comment_pagination ) {
				$pagination_classes = '';

				// If we're only showing the "Next" link, add a class indicating so.
				if ( false === strpos( $comment_pagination, 'prev page-numbers' ) ) {
					$pagination_classes = ' only-next';
				}
				?>

				<nav class="comments__pagination pagination<?php echo $pagination_classes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?>" aria-label="<?php esc_attr_e( 'Comments', 'mytheme' ); ?>">
					<?php echo wp_kses_post( $comment_pagination ); ?>
				</nav>

				<?php
			}
			?>

		</div>

	</section>

	<?php
}

if ( comments_open() || pings_open() ) {

	if ( $comments ) {
		echo '<hr/>';
	}

	get_template_part( 'template-parts/comment', 'form' );


} elseif ( is_single() ) {

	if ( $comments ) {
		echo '<hr />';
	}

	?>

	<div class="comment-respond" id="respond">

		<p class="comments-closed"><?php _e( 'Comments are closed.', 'mytheme' ); ?></p>

	</div>

	<?php
}
