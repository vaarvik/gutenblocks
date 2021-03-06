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

	<div class="content">
		<div class="wrapper">
			<h1 class="header__heading"><?php echo get_the_title() ?></h1>
			<?php the_content() ?>
		</div>
	</div>

</main>

<?php
get_footer();
