<?php
/**
 * The searchform.php template.
 *
 * Used any time that get_search_form() is called.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

/*
 * Generate a unique ID for each form and a string containing an aria-label
 * if one was passed to get_search_form() in the args array.
 */
$this_form_id = mytheme_new_form_id();

$aria_label = ! empty( $args['label'] ) ? 'aria-label="' . esc_attr( $args['label'] ) . '"' : '';
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?> <?php echo $aria_label; ?>">
	<label for="<?php echo esc_attr( $this_form_id ); ?>">
		<span class="search-form__label"><?php _e( 'Search for:', 'mytheme' ); // phpcs:ignore: WordPress.Security.EscapeOutput.UnsafePrintingFunction -- core trusts translations ?></span>
		<input type="search" id="<?php echo esc_attr( $this_form_id ); ?>" class="field input" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'mytheme' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
	</label>
	<input type="submit" class="btn search" value="<?php echo esc_attr_x( 'Search', 'submit button', 'mytheme' ); ?>" />
</form>
