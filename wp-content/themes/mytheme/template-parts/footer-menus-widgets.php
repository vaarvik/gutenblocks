<?php
/**
 * Displays the menus and widgets at the end of the main element.
 * Visually, this output is presented as part of the footer element.
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

$has_footer_menu = has_nav_menu( 'footer' );

$has_sidebar_1 = is_active_sidebar( 'sidebar-1' );

// Only output the container if there are elements to display.
if ( $has_footer_menu || $has_sidebar_1 ) {
	?>

	<div class="widgets-footer">

		<div class="widgets-footer__content">

			<?php

			if ( $has_footer_menu ) {
				?>
				<div class="widgets-footer__header">
					<?php if ( $has_footer_menu ) { ?>

						<nav aria-label="<?php esc_attr_e( 'Footer', 'mytheme' ); ?>" role="navigation" class="footer-menu">

							<ul class="footer-menu__content">
								<?php
								wp_nav_menu(
									array(
										'container'      => '',
										'depth'          => 1,
										'items_wrap'     => '%3$s',
										'theme_location' => 'footer',
									)
								);
								?>
							</ul>

						</nav>

					<?php } ?>

				</div>

			<?php } ?>

			<?php if ( $has_sidebar_1 ) { ?>

				<aside class="widgets-footer__side" role="complementary">

					<div class="sidebar-widget">

							<div class="sidebar-widget__content">
								<?php dynamic_sidebar( 'sidebar-1' ); ?>
							</div>

					</div>

				</aside>

			<?php } ?>

		</div>

	</div>

<?php } ?>
