<?php

/**
 * Register and Enqueue Scripts.
 */
function mytheme_register_scripts() {

	wp_enqueue_script( 'mytheme-js', mytheme_asset_url( 'assets/js/customs.js' ), array(), THEME_VERSION, false );

}

add_action( 'wp_enqueue_scripts', 'mytheme_register_scripts' );


/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @link https://git.io/vWdr2
 */
function mytheme_skip_link_focus_fix() {
	// The following is minified via `terser --compress --mangle -- assets/js/skip-link-focus-fix.js`.
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
	</script>
	<?php
}

add_action( 'wp_print_footer_scripts', 'mytheme_skip_link_focus_fix' );
