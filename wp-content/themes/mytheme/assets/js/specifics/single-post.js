/**
 * ███████╗██╗███╗   ██╗ ██████╗ ██╗     ███████╗    ██████╗  ██████╗ ███████╗████████╗
 * ██╔════╝██║████╗  ██║██╔════╝ ██║     ██╔════╝    ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝
 * ███████╗██║██╔██╗ ██║██║  ███╗██║     █████╗      ██████╔╝██║   ██║███████╗   ██║
 * ╚════██║██║██║╚██╗██║██║   ██║██║     ██╔══╝      ██╔═══╝ ██║   ██║╚════██║   ██║
 * ███████║██║██║ ╚████║╚██████╔╝███████╗███████╗    ██║     ╚██████╔╝███████║   ██║
 * ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝
 *
 */

(() => {

	const post = document.querySelector(".post");
	let entryHeader, entryContent;

	if(post) {
		entryHeader = post.querySelector(".entry-header");
		entryContent = post.querySelector(".entry-content");
	}

	if(entryContent && entryContent.children) {
		const theContentEls = entryContent.children;
		if(theContentEls[0] && theContentEls[0].classList.contains("is-style-preamble")) {
			entryHeader.appendChild(theContentEls[0]);
		}
	}

})();
