/**
 * ██╗███╗   ███╗ ██████╗      ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗ ██╗███╗   ██╗███████╗██████╗
 * ██║████╗ ████║██╔════╝     ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██║████╗  ██║██╔════╝██╔══██╗
 * ██║██╔████╔██║██║  ███╗    ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║██╔██╗ ██║█████╗  ██████╔╝
 * ██║██║╚██╔╝██║██║   ██║    ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║██║╚██╗██║██╔══╝  ██╔══██╗
 * ██║██║ ╚═╝ ██║╚██████╔╝    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║██║██║ ╚████║███████╗██║  ██║
 * ╚═╝╚═╝     ╚═╝ ╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
 *
 */

(() => {
	// Add fixes to object-fit image elements in IE
	var imgContainers = document.querySelectorAll(".img-container");
	if (imgContainers && isIE()) {
		for (var i = 0; i < imgContainers.length; i++) {
			var image = imgContainers[i].querySelector("img");
			if (!image) continue;
			var src = image.src;

			image.style.opacity = 0;
			imgContainers[i].style.backgroundImage = "url(" + src + ")";
		}
	}
})();
