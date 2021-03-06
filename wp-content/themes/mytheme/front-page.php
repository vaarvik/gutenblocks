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

<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "Collection",
	"headline": "<?php echo get_the_title() ?>",
	"alternativeHeadline": "A visual documentation of Gutenberg's components",
	"author":  {
		"@type": "Organization",
		"name": "<?php echo get_bloginfo( "name" ) ?>",
		"logo": {
			"@type": "imageObject",
			"url": "<?php echo get_template_directory_uri() . "/assets/images/logo.png" ?>"
		}
	},
	"genre": "http://vocab.getty.edu/aat/300054641",
	"keywords": "wordpress gutenberg component react editor",
	"collectionSize": "<?php echo count( $posts->posts ) ?>",
	"publisher": {
		"@type": "Organization",
		"name": "<?php echo get_bloginfo( "name" ) ?>",
		"logo": {
			"@type": "imageObject",
			"url": "<?php echo get_template_directory_uri() . "/assets/images/logo.png" ?>"
		}
	},
	"url": "<?php echo get_the_permalink() ?>",
	"datePublished": "<?php echo $post->post_date ?>",
	"dateCreated": "<?php echo $post->post_date ?>",
	"dateModified": "<?php echo $post->post_modified ?>",
	"description": "A list for tech articles that provide a visual documentation of the each available component a developer can use when creating blocks for WordPress' editor, Gutenberg.",
	"about": "A list for tech articles that provide a visual documentation of the each available component a developer can use when creating blocks for WordPress' editor, Gutenberg.",
	"abstract": "<?php echo str_replace("\"", "\\\"", str_replace("\n", "", wp_strip_all_tags( mytheme_excerpt( has_excerpt() ? get_the_excerpt() : get_the_content(), 20 ) ) ) ) ?>",
	"@graph": [
		<?php if ( $posts->have_posts() ) : while ( $posts->have_posts() ) : $posts->the_post();
		$tags 				= mytheme_get_string_from_array_prop( get_the_tags() ?? null, "slug", " " );
		$sizes 				= wp_get_attachment_image_src( get_post_thumbnail_id(), "full" ) ?? [];
		$thumbnail_width	= $sizes[1] ?? null;
		$thumbnail_height	= $sizes[2] ?? null;
		?>
		{
			"@id": "<?php echo get_the_permalink() ?>",
			"@type": "schema:TechArticle",
			"schema:headline": "<?php echo get_the_title() ?>",
			"schema:dependencies": "gutenberg wordpress react programming web",
			"schema:proficiencyLevel": "Expert",
			"schema:alternativeHeadline": "A visual documentation of Gutenberg's <?php echo get_the_title() ?>",
			"schema:backstory": "This article was created in order to provide a visual documentation of the available components a developer can use when creating blocks for WordPress' editor, Gutenberg.",
			"schema:image": {
				"@type": "imageObject",
				"url": "<?php echo get_the_post_thumbnail_url() ?>",
				"height": "<?php echo $thumbnail_height ?>",
				"width": "<?php echo $thumbnail_width ?>"
			},
			"schema:mainEntityOfPage": "<?php echo get_home_url() ?>",
			"schema:author":  {
				"@type": "Organization",
				"name": "<?php echo get_bloginfo( "name" ) ?>",
				"logo": {
					"@type": "imageObject",
					"url": "<?php echo get_template_directory_uri() . "/assets/images/logo.png" ?>"
				}
			},
			"schema:genre": "http://vocab.getty.edu/aat/300054641",
			"schema:keywords": "wordpress gutenberg component react <?php echo $tags ?>",
			"schema:wordcount": "<?php echo str_word_count( wp_strip_all_tags( get_the_content() ) ) - 1 ?>",
			"schema:publisher": {
				"@type": "Organization",
				"name": "<?php echo get_bloginfo( "name" ) ?>",
				"logo": {
					"@type": "imageObject",
					"url": "<?php echo get_template_directory_uri() . "/assets/images/logo.png" ?>"
				}
			},
			"schema:url": "<?php echo get_the_permalink() ?>",
			"schema:datePublished": "<?php echo $post->post_date ?>",
			"schema:dateCreated": "<?php echo $post->post_date ?>",
			"schema:dateModified": "<?php echo $post->post_modified ?>",
			"schema:description": "Information and code snippet for the Gutenberg component <?php echo get_the_title() ?> in the category <?php echo get_the_category()[0]->name ?>.",
			"schema:articleBody": "<?php echo mytheme_create_json_string( get_the_content() ) ?>",
			"schema:abstract": "<?php echo mytheme_create_json_string( mytheme_excerpt( has_excerpt() ? get_the_excerpt() : get_the_content(), 20 ) ) ?>"
		}<?php echo ($posts->current_post +1 != $posts->post_count ? "," : "") ?>
		<?php endwhile; wp_reset_postdata(); endif;	?>
	]
}
</script>

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
						<p class="filter-section__sub-heading label">Categories</p>
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
						<p class="filter-section__sub-heading tags label">Tags</p>
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
							<div class="card__image img-container">
								<?php the_post_thumbnail() ?>
							</div>
							<div class="card__content">
								<h2 class="card__heading"><?php the_title(); ?></h2>
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
