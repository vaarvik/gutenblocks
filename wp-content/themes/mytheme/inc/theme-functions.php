<?php

/**
 * Add the meta-tags template part into the wp_head
 */
add_action( 'wp_head', function(){
	<<<HTML
		<script>
			// Polyfill to make forEach available for NodeLists
			if (window.NodeList && !NodeList.prototype.forEach)
				NodeList.prototype.forEach = Array.prototype.forEach;
		</script>
	HTML;
} );


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
    if ( ! is_front_page() && ! is_single() ) {
        wp_redirect( get_home_url() );
        exit;
    }
}

add_action('template_redirect','mytheme_redirect_all_pages_to_home');


/**
 * Add the meta-tags template part into the wp_head
 */
add_action( 'wp_head', function(){
    get_template_part( "template-parts/open", "graph" );
} );

/**
 * Adds the slogan/site description in the title tag of every page. For SEO purposes.
 *
 * @param array $title_parts Default array with title parts
 */
function mytheme_title_tag( $title_parts ) {
    $title_parts['tagline'] = get_bloginfo( 'description' );

    return $title_parts;
}

add_filter( 'document_title_parts', 'mytheme_title_tag', 10, 2 );
