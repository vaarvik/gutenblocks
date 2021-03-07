<?php
/**
 *  ██████╗ ██████╗ ███████╗███╗   ██╗     ██████╗ ██████╗  █████╗ ██████╗ ██╗  ██╗
 * ██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║  ██║
 * ██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ██║  ███╗██████╔╝███████║██████╔╝███████║
 * ██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ██║   ██║██╔══██╗██╔══██║██╔═══╝ ██╔══██║
 * ╚██████╔╝██║     ███████╗██║ ╚████║    ╚██████╔╝██║  ██║██║  ██║██║     ██║  ██║
 *  ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝
 *
 */
?>

<?php
	$post_category	= get_the_category() ? get_the_category()[0]->name : null;
	$title			= wp_get_document_title();
	$image			= has_post_thumbnail() ? get_the_post_thumbnail_url() : get_background_image();
	$excerpt		= has_excerpt() ? mytheme_excerpt( get_the_excerpt(), 27 ) : mytheme_excerpt( get_the_content(), 27 );
	$description 	= is_single() ? ( "A Gutenberg Wordpress Component from the \"" . $post_category . "\" category. Component description: " . mytheme_excerpt( $excerpt, 12) ) : $excerpt;
?>

<!-- Primary Meta Tags -->
<meta name="title" content="<?php echo $title ?>">
<meta name="description" content='<?php echo $description ?>'>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="<?php echo get_permalink() ?>">
<meta property="og:title" content="<?php echo $title ?>">
<meta property="og:description" content='<?php echo $description ?>'>
<meta property="og:image" content="<?php echo $image ?>">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="<?php echo get_permalink() ?>">
<meta property="twitter:title" content="<?php echo $title ?>">
<meta property="twitter:description" content='<?php echo $description ?>'>
<meta property="twitter:image" content="<?php echo $image ?>">
