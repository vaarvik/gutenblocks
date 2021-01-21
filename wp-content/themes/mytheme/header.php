<?php
/**
 * Header file for the MyTheme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

?>

<!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

	<head>

		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >

		<link rel="profile" href="https://gmpg.org/xfn/11">

		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

		<?php
		wp_body_open();
		?>

		<header id="site-header" role="banner">

			<?php

			// Check whether the header search is activated in the customizer.
			$enable_header_search = get_theme_mod( 'enable_header_search', true );

			if ( true === $enable_header_search ) {

				?>

				<button class="btn search" >
						<span class="btn__icon">
							<!-- SVG goes here -->
						</span>
						<span class="btn__text"><?php _e( 'Search', 'mytheme' ); ?></span>
					</span>
				</button>


			<?php } ?>

			<div id="site-branding">

				<?php
					// Site title or logo.
					the_custom_logo();

					// Site description.
					echo get_bloginfo( "description" );
				?>

			</div>

			<div id="site-navigation">

				<nav class="menu-nav" role="navigation">

					<ul class="menu-nav__list">

						<?php
						if ( has_nav_menu( 'primary' ) ) {

							// Print menu items
							wp_nav_menu(
								array(
									'container'  => '',
									'items_wrap' => '%3$s',
									'theme_location' => 'primary',
								)
							);

						} else {

							// Print pages if there is no menu defined
							wp_list_pages(
								array(
									'match_menu_classes' => true,
									'show_sub_menu_icons' => true,
									'title_li' => false,
								)
							);

						}
						?>

					</ul>

				</nav>

			</div>

		</header>
