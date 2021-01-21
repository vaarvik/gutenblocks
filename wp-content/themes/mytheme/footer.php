<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

?>
			<footer id="site-footer" class="site-footer" role="contentinfo">

					<div class="credits">

						<p class="credits__copyright">&copy;
							<?php
							echo date_i18n(
								/* translators: Copyright date format, see https://www.php.net/date */
								_x( 'Y', 'copyright date format', 'mytheme' )
							);
							?>
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
						</p>

					</div>

					<a class="to-top-navigation" href="#site-header">
						<span class="to-top-navigation__text">
							<?php
							/* translators: %s: HTML character for up arrow. */
							printf( __( 'To the top %s', 'mytheme' ), '<span class="arrow" aria-hidden="true">&uarr;</span>' );
							?>
						</span>
					</a>

			</footer>

		<?php wp_footer(); ?>

	</body>
</html>
