<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

global $post;

$tags 				= mytheme_get_string_from_array_prop( get_the_tags() ?? null, "slug", " " );
$sizes 				= wp_get_attachment_image_src( get_post_thumbnail_id(), "full" ) ?? [];
$thumbnail_width	= $sizes[1] ?? null;
$thumbnail_height	= $sizes[2] ?? null;

//SEO Microdata
?>
<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "TechArticle",
	"headline": "<?php echo get_the_title() ?>",
	"dependencies": "gutenberg wordpress react programming web",
	"proficiencyLevel": "Beginner",
	"alternativeHeadline": "A visual documentation of Gutenberg's <?php echo get_the_title() ?>",
	"backstory": "This article was created in order to provide a visual documentation of the available components a developer can use when creating blocks for WordPress' editor, Gutenberg.",
	"image": {
		"@type": "imageObject",
		"url": "<?php echo get_the_post_thumbnail_url() ?>",
		"height": "<?php echo $thumbnail_height ?>",
		"width": "<?php echo $thumbnail_width ?>"
	},
	"mainEntityOfPage": "<?php echo get_home_url() ?>",
	"author":  {
		"@type": "Organization",
		"name": "<?php echo get_bloginfo( "name" ) ?>",
		"logo": {
			"@type": "imageObject",
			"url": "<?php echo get_template_directory_uri() . "/assets/images/logo.png" ?>"
		}
	},
	"genre": "http://vocab.getty.edu/aat/300054641",
	"keywords": "wordpress gutenberg component react <?php echo $tags ?>",
	"wordcount": "<?php echo str_word_count( wp_strip_all_tags( get_the_content() ) ) - 1 ?>",
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
	"description": "Information and code snippet for the Gutenberg component <?php echo get_the_title() ?> in the category <?php echo get_the_category()[0]->name ?>.",
	"articleBody": "<?php echo mytheme_create_json_string( get_the_content() ) ?>",
	"abstract": "<?php echo mytheme_create_json_string(  has_excerpt() ? get_the_excerpt() : mytheme_excerpt( get_the_content(), 20 ) ) ?>"
}
</script>
<article <?php post_class( "entry content" ); ?> id="post-<?php the_ID(); ?>">

		<?php
		get_template_part( 'template-parts/entry-header' );

		?>


		<div class="wrapper">
			<div class="entry-content">
				<?php

				if ( ! is_search() ) {
					get_template_part( 'template-parts/featured-image' );
				}
				?>

				<?php the_content(); ?>
			</div>

			<div class="post-details">
				<?php
					$props 	= mt_get_fields("props");
					$link 	= mt_get_field( "link" );
				?>
				<?php if( $link || $props ) : ?>
					<div class="post-details__item">
						<div class="side-widget left">
							<div class="side-widget__content">
								<?php if ( $props ) : ?>
									<h4>Props</h4>
									<ul class="btn-list vertical">
										<?php foreach ( $props as $prop ) : ?>
											<?php if( $prop['text'] ) : ?>
												<li class="btn-list__item btn popover <?php echo $prop['popover'] ? "" : "empty" ?>" data-tooltip="<?php echo $prop['popover'] ?>"><?php echo $prop['text']; ?></li>
											<?php endif; ?>
										<?php endforeach; ?>
									</ul>
								<?php endif; ?>
								<?php if( $link ) : ?>
									<h5>GitHub URL</h5>
									<a href="<?php echo mt_get_field( "link" ) ?>" target="_blank" class="circle-info" id="github-url">
										<svg xmlns="http://www.w3.org/2000/svg" fill="#db074d" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
									</a>
								<?php endif; ?>
							</div>
						</div>
					</div>
				<?php endif; ?>
				<div class="post-details__item">
					<div class="side-widget right">
						<div class="side-widget__content">
							<h5>Classification</h5>
							<div class="circle-info">
								<p class="circle-info__heading">Category</p>
								<?php if( get_the_category() && get_the_category()[0] ) : ?>
									<p class="is-clear"><?php echo get_the_category()[0]->name ?></p>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>



		<div class="post-handling">
			<?php
			wp_link_pages(
				array(
					'before'      => '<nav class="post-navigation" aria-label="' . esc_attr__( 'Page', 'mytheme' ) . '"><span class="post-navigation__label">' . __( 'Pages:', 'mytheme' ) . '</span>',
					'after'       => '</nav>',
					'link_before' => '<span class="post-navigation__number">',
					'link_after'  => '</span>',
				)
			);

			if ( post_type_supports( get_post_type( get_the_ID() ), 'author' ) && is_single() ) {

				get_template_part( 'template-parts/entry-author-bio' );

			}
			?>

	</div>

	<?php

	if ( is_single() ) {

		get_template_part( 'template-parts/navigation' );

	}

	/**
	 *  Output comments wrapper if it's a post, or if comments are open,
	 * or if there's a comment number – and check for password.
	 * */
	/*
	if ( ( is_single() || is_page() ) && ( comments_open() || get_comments_number() ) && ! post_password_required() ) {
		?>

		<?php comments_template(); ?>

		<?php
	}
	*/?>

</article>
