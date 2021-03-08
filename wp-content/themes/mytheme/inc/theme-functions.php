<?php

/**
 * Add the meta-tags template part into the wp_head
 */
add_action( 'wp_head', function(){
	echo <<<HTML
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
 * Redirect pages to home
 * ----------
 * Redirects pages to the home page.
 *
 * @return  [type]  [return description]
 */
function mytheme_redirect_pages_to_home() {
    if ( is_author() || is_category() || is_tag() || is_search() || is_tax() || is_404() ) {
        wp_redirect( get_home_url(), 301 );
        exit;
    }
}

add_action('template_redirect','mytheme_redirect_pages_to_home');


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
    $title_key = $title_parts['title'] === get_bloginfo( 'name' ) ? 'title' : 'site';
    if( empty( $title_parts['site'] ) ) $title_parts['slogan'] = "Create Editor Blocks";
    $site_title = array_splice( $title_parts, array_search( $title_key, array_keys( $title_parts ) ), 1 );
    $title_parts[$title_key] = $site_title[$title_key];
    return $title_parts;
}

add_filter( 'document_title_parts', 'mytheme_title_tag', 10, 2 );

/**
 * Sitemap content
 * ----------
 * Controls which links should be in the sitemap
 *
 * @param   [type]  $provider  [$provider description]
 * @param   [type]  $name      [$name description]
 *
 * @return  [type]             [return description]
 */
function mytheme_sitemap_content( $provider, $name ) {
    switch ($name) {
        case 'users':
            return;
        case 'taxonomies':
            return;
    }
    return $provider;
}

add_filter( 'wp_sitemaps_add_provider', 'mytheme_sitemap_content', 10, 2 );

function mytheme_add_favicons() {
    $favicon_folder = get_template_directory_uri() . "/assets/images/favicons";
    echo <<<HTML
        <link rel="apple-touch-icon" sizes="180x180" href="{$favicon_folder}/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="{$favicon_folder}/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="{$favicon_folder}/favicon-16x16.png">
        <link rel="manifest" href="{$favicon_folder}/site.webmanifest">
        <link rel="mask-icon" href="{$favicon_folder}/safari-pinned-tab.svg" color="#db074d">
        <meta name="msapplication-TileColor" content="#1c1c1c">
        <meta name="theme-color" content="#1c1c1c">
    HTML;
}

add_action( 'wp_head', "mytheme_add_favicons" );
