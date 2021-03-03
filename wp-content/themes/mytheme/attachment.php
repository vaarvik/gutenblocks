<?php
/**
 * The template file for displaying an attachment.
 *
 * @package MyTheme
 * @subpackage MyTheme
 * @since MyTheme 1.0
 */

global $post;
if( $post && $post->guid ) wp_redirect( $post->guid, 301 );
else wp_redirect( get_home_url(), 301 );
exit;
