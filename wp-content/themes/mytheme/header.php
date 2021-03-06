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

		<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo GOOGLE_ID ?>"></script>
		<script>
			const GOOGLE_ID 	= "<?php echo GOOGLE_ID ?>";
  			const PRIVACY_LINK 	= "<?php echo get_privacy_policy_url() ?>";
		</script>

		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

		<?php
		wp_body_open();
		?>

		<header class="site-header">
			<a href="<?php echo home_url() ?>" class="site-header__logo">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#FFFFFF" height="24" viewBox="0 0 24 24"><path d="M4.759 5.753h-.013v.958c-.035 1.614 4.405 1.618 4.351 0v-.957c-.129-1.528-4.226-1.536-4.338-.001zm3.545.147c0 .314-.614.571-1.37.571-.755 0-1.37-.256-1.37-.571s.615-.57 1.37-.57c.756 0 1.37.256 1.37.57zm-8.304.179l.009.005-.009-.019 11.5-6.065 11.5 6.142v5.231l-11 5.798v-5.311l9.864-5.19-10.367-5.517-10.331 5.454 9.834 5.229v5.331l-11-5.858v-5.23zm23 6.434v5.813l-11 5.674v-5.689l11-5.798zm-13.692-3.37c-.035 1.615 4.406 1.618 4.351 0v-.957c-.129-1.528-4.225-1.536-4.337-.001h-.014v.958zm2.188-1.381c.755 0 1.37.255 1.37.57 0 .314-.615.57-1.37.57s-1.37-.255-1.37-.57c0-.315.615-.57 1.37-.57zm2.162-3.354v-.956c-.13-1.527-4.225-1.535-4.337-.001h-.013v.957c-.036 1.615 4.406 1.618 4.35 0zm-2.161-1.381c.754 0 1.37.256 1.37.571 0 .314-.616.571-1.37.571-.756 0-1.37-.257-1.37-.571 0-.314.614-.571 1.37-.571zm6.712 3.684v-.957c-.13-1.528-4.226-1.536-4.336-.001h-.014v.958c-.037 1.615 4.405 1.618 4.35 0zm-3.532-.81c0-.314.615-.57 1.37-.57.756 0 1.371.256 1.371.57s-.615.57-1.371.57c-.755 0-1.37-.256-1.37-.57zm-3.677 12.408v5.691l-11-5.673v-5.875l11 5.857z"/></svg>
			</a>
		</header>

		<?php /* ?>
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

		<?php */ ?>
