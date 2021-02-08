<?php
/**
 * Modify Main Query
 * ----------
 * Modify the main query before it is fetched.
 *
 * @param   [type]  $query  [$query description]
 *
 * @return  [type]          [return description]
 */
function mytheme_modify_main_query( $query ) {
    if ( ! is_admin() && $query->is_main_query() ) {
        // Not a query for an admin page.
        // It's the main query for a front end page of your site.
            $query->set( 'orderby', 'title' );
            $query->set( 'order', 'ASC' );
    }
}

add_action( 'pre_get_posts', 'mytheme_modify_main_query' );

/**
 * Redirect all pages to home
 * ----------
 * Redirects all pages to the home page.
 *
 * @return  [type]  [return description]
 */
function mytheme_redirect_all_pages_to_home() {
    if ( ! is_front_page() ) {
        wp_redirect( get_home_url() );
        exit;
    }
}

add_action('template_redirect','mytheme_redirect_all_pages_to_home');
