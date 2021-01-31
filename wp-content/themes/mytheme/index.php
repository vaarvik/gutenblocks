<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

get_header();
?>

<main id="site-content" class="site-content" role="main">

	<div class="archive-content">
		<header class="header">
			<h2 class="header__heading">Search</h2>
			<div class="header__body">
				<div class="filter-section">
					<div class="filter-section__item full">
						<label for="filter-search">Search</label>
						<input class="field search" type="search" name="s" id="filter-search" data-search-in="components-list" />
					</div>
				</div>
			</div>
		</header>
		<div class="card-list" id="components-list">
			<?php

			if ( have_posts() ) {

				while ( have_posts() ) {
					the_post();
					?>
					<div class="card-list__item search-item">
						<div class="card <?php echo has_tag( "experimental" ) ? "experimental" : "" ?>">
							<div class="card__image">
								<?php the_post_thumbnail() ?>
							</div>
							<p class="card__title search-item__text"><?php echo the_title(); ?></p>
							<div class="card__content">
								<h5 class="card__heading"><?php echo the_title(); ?></h5>
								<div class="card__body"><?php echo the_content(); ?></div>
							</div>
						</div>
					</div>
					<?php
				}
			}

			?>

			<?php get_template_part( 'template-parts/pagination' ); ?>
		</div>

	</div>

</main>

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php
get_footer();
