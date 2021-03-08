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
			<footer id="site-footer" class="site-footer">
				<div class="site-footer__content">

					<div class="credits">

						<p class="credits__copyright">&copy;
							<?php
							echo date_i18n(
								// translators: Copyright date format, see https://www.php.net/date
								_x( 'Y', 'copyright date format', 'mytheme' )
							);
							?>
							<?php bloginfo( 'name' ); ?>
						</p>

					</div>

					<a href="<?php echo get_sitemap_url('index') ?>" id="sitemap-link">
						<?php _e( "Sitemap" ) ?>
					</a>

					<a href="<?php echo get_privacy_policy_url() ?>" id="privacy-link">
						<?php _e( "Privacy policy" ) ?>
					</a>
				</div>
			</footer>
		<?php wp_footer(); ?>

	</body>
</html>
