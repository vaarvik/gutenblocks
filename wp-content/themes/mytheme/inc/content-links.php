<?php
/**
 * Include a skip to content link at the top of the page so that users can bypass the menu.
 */
function mytheme_skip_link() {
	echo '<a class="skip-link" href="#site-content">' . __( 'Skip to the content', 'mytheme' ) . '</a>';
}

add_action( 'wp_body_open', 'mytheme_skip_link', 5 );


/**
 * Overwrite default more tag with styling and screen reader markup.
 *
 * @param string $html The default output HTML for the more tag.
 * @return string
 */
function mytheme_read_more_tag( $html ) {
	return preg_replace( '/<a(.*)>(.*)<\/a>/iU', sprintf( '<div class="btn tertiary"><a$1>$2 "%1$s"</a></div>', get_the_title( get_the_ID() ) ), $html );
}

add_filter( 'the_content_more_link', 'mytheme_read_more_tag' );
