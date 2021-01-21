<?php
/**
 * The searxh template file
 *
 * This is the template file for a search.
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

	$success_title    = '';
	$fail_title = '';

		global $wp_query;

		//The search query that's shown in the browser
		$success_title = sprintf(
			'%1$s %2$s',
			'<span>' . __( 'Search:', 'mytheme' ) . '</span>',
			'&ldquo;' . get_search_query() . '&rdquo;'
		);

		//If there is any posts that match the search query, then write a successful message
		if ( $wp_query->found_posts ) {
			$fail_title = sprintf(
				/* translators: %s: Number of search results. */
				_n(
					'We found %s result for your search.',
					'We found %s results for your search.',
					$wp_query->found_posts,
					'mytheme'
				),
				number_format_i18n( $wp_query->found_posts )
			);
		//Else if there is NOT any posts that match the search query, then write a fail message
		} else {
			$fail_title = __( 'We could not find any results for your search. You can give it another try through the search form below.', 'mytheme' );
		}


	if ( $success_title || $fail_title ) {
		?>

		<header class="search-header">

			<div class="search-header__content">

				<?php if ( $success_title ) { ?>
					<h1 class="search-header__title"><?php echo wp_kses_post( $success_title ); //sanitize the search query before it shown in the browser ?></h1>
				<?php
				} elseif ( $fail_title ) { ?>
					<h1 class="search-header__title fail"><?php echo wp_kses_post( wpautop( $fail_title ) ); ?></h1>
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
				echo '<hr/>';
			}

			the_post();

			get_template_part( 'template-parts/singles/single', get_post_type() );

		}

	} else {
		?>

		<div class="section narrow">

			<?php
			get_search_form(
				array(
					'label' => __( 'search again', 'mytheme' ),
					)
				);
				?>

		</div>

		<?php
	}
	?>

	<?php get_template_part( 'template-parts/pagination' ); ?>

</main>

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php
get_footer();
