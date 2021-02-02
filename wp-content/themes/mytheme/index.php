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
			<h1 class="header__heading">WP-GB</h1>
			<p class="header__heading">WordPress Gutenberg</p>
			<p class="header__preamble">WP-GP helps you find the right components when creating blocks in Gutenberg. Below is a list of all the components are available in @wordpress/components. Click on an image to get a more detailed description. A red mark means that WordPress has marked it as an experimental component.</p>
			<div class="header__body">
				<div class="filter-section">
					<div class="filter-section__item">
						<label for="filter-search" class="label">Search</label>
						<input class="field input search" type="search" name="s" id="filter-search" data-search-in="components-list" />
					</div>

					<div class="filter-section__item">
						<label for="filter-category" class="label">Categories</label>
						<div class="checkbox-list">
							<?php foreach ( get_categories() as $key => $category) : ?>
								<div class="checkbox-list__item">
									<div class="filter-checkbox" data-search-in="components-list" data-search-for="searchCategories">
										<input class="field input checkbox hide" type="checkbox" id="filter-category" />
										<button class="btn secondary"><?php echo $category->name ?></button>
									</div>
								</div>
							<?php endforeach; ?>
						</div>
					</div>

				</div>
			</div>
		</header>
		<div class="card-list" id="components-list">
			<?php

			if ( have_posts() ) {

				while ( have_posts() ) {
					the_post();
					$text_content = preg_replace( "/\"/", "'", wp_strip_all_tags( get_the_content() ) );
					$categories = mytheme_get_string_from_array_prop( get_the_category(), "slug" );
					?>

					<div class="card-list__item search-item" data-search-content="<?php echo get_the_title() . " | " . $text_content ?>" data-search-categories="<?php echo $categories ?>">
						<div class="card <?php echo has_tag( "experimental" ) ? "experimental" : "" ?>">
							<div class="card__image">
								<?php the_post_thumbnail() ?>
							</div>
							<p class="card__title search-item__text"><?php echo the_title(); ?></p>
							<div class="card__content">
								<h3 class="card__heading"><?php echo the_title(); ?></h3>
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
