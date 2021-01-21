<?php
/**
 * The archive template file
 *
 * This is the template file that is shown for archives.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

get_header();
?>

<main id="site-content" role="main">

	<?php

	$archive_title    = '';
	$archive_subtitle = '';

	if ( ! have_posts() ) {
		$archive_title = __( 'Nothing Found', 'mytheme' );
	} else {
		$archive_title    = get_the_archive_title();
		$archive_subtitle = get_the_archive_description();
	}

	if ( $archive_title || $archive_subtitle ) {
		?>

		<header class="archive-header">

			<div class="archive-header__content">

				<?php if ( $archive_title ) { ?>
					<h1 class="archive-header__title"><?php echo wp_kses_post( $archive_title ); ?></h1>
				<?php } ?>

				<?php if ( $archive_subtitle ) { ?>
					<div class="archive-header__sub-title"><?php echo wp_kses_post( wpautop( $archive_subtitle ) ); ?></div>
				<?php } ?>

			</div>

		</header>

		<?php
	}

	if ( have_posts() ) {
		$i = 0;

		while ( have_posts() ) {
			$i++;
			if ( $i > 1 ) {
				echo '<hr />';
			}
			the_post();

			get_template_part( 'template-parts/singles/single', get_post_type() );

		}

	}
	?>

	<?php get_template_part( 'template-parts/pagination' ); ?>

</main>

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php
get_footer();
