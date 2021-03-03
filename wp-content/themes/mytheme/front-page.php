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

$posts 	= new WP_Query( array(
	"post_type"	=> "post",
	'orderby'	=> 'title',
	'order'		=> 'ASC',
) );

get_header();

?>

<main id="site-content" class="site-content">

	<div class="archive-content">
		<header class="header">
			<h1 class="header__heading"><?php echo get_bloginfo( "name" ) ?></h1>
			<h2 class="header__sub-heading"><?php echo get_the_title() ?></h2>
			<div class="header__body">
				<?php the_content() ?>
				<div class="filter-section">
					<div class="filter-section__item">
						<label for="filter-search" class="label">Search</label>
						<input class="field input search" type="search" name="s" id="filter-search" data-search-in="components-list" />
					</div>

					<div class="filter-section__item">
						<h5 class="filter-section__sub-heading label">Categories</h5>
						<div class="checkbox-list">
							<?php foreach ( get_categories( array ('orderby' => 'name', 'order' => 'asc' ) ) as $key => $category) : ?>
								<div class="checkbox-list__item">
									<div class="filter-checkbox" data-search-in="components-list" data-search-for="searchCategories">
										<input class="field input checkbox hide" type="checkbox" id="<?php echo "category-" . $key ?>" />
										<button class="btn secondary"><?php echo $category->name ?></button>
									</div>
								</div>
							<?php endforeach; ?>
						</div>
					</div>

					<div class="filter-section__item full">
						<h5 class="filter-section__sub-heading tags label">Tags</h5>
						<div class="checkbox-list tight">
							<?php foreach ( get_tags( array ('orderby' => 'name', 'order' => 'asc' ) ) as $key => $tag) : ?>
								<div class="checkbox-list__item">
									<div class="filter-checkbox" data-search-in="components-list" data-search-for="searchTags">
										<input class="field input checkbox hide" type="checkbox" id="<?php echo "tag-" . $key ?>" />
										<button class="btn tertiary"><?php echo $tag->name ?></button>
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

			if ( $posts->have_posts() ) :

				while ( $posts->have_posts() ) :

					$posts->the_post();
					$text_content = preg_replace( "/\"/", "'", wp_strip_all_tags( get_the_content() ) );
					$categories = mytheme_get_string_from_array_prop( get_the_category() ?? null, "slug" );
					$tags = mytheme_get_string_from_array_prop( get_the_tags() ?? null, "slug" );


					?>
					<div
						id="card-<?php the_ID() ?>"
						class="card-list__item search-item"
						data-search-content="<?php echo get_the_title() . " | " . $text_content ?>"
						data-search-categories="<?php echo $categories ?>"
						data-search-tags="<?php echo $tags ?>"
					>
						<a
							href="<?php echo get_the_permalink(); ?>"
							class="card <?php echo has_tag( "experimental" ) ? "experimental" : "" ?>"
						>
							<div class="card__image">
								<?php the_post_thumbnail() ?>
							</div>
							<div class="card__content">
								<h3 class="card__heading"><?php the_title(); ?></h3>
								<div class="card__body">
								<p>
									<?php echo mytheme_excerpt( has_excerpt() ? get_the_excerpt() : get_the_content(), 20 ); ?>
								</p>
								</div>
								<div class="card__footer">
									<div class="card__categories">
										<?php echo $categories ?>
									</div>
									<div class="card__btn btn primary"><?php _e( "Read more" ) ?></div>
								</div>
							</div>
						</a>
					</div>
					<?php
				endwhile; wp_reset_postdata();
			endif;

			?>

			<?php get_template_part( 'template-parts/pagination' ); ?>
		</div>

	</div>

</main>

<?php
get_footer();
