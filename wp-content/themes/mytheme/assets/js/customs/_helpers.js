/**
 * ██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗ ███████╗
 * ██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗██╔════╝
 * ███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝███████╗
 * ██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║
 * ██║  ██║███████╗███████╗██║     ███████╗██║  ██║███████║
 * ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝
 *
 */

/**
 * Check if current browser is Internet Explorer
 *
 * @return  {Boolean}
 */
 function isIE() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ") > 0;
	var trident = ua.indexOf("Trident/") > 0;
	var edge = ua.indexOf("Edge/") > 0;

	return (msie || trident || edge);
}
