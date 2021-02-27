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
		const firstEl = theContentEls[0];
		const secondEl = theContentEls[1];
		if(firstEl) {
			if(!firstEl.classList.contains("featured-media") && firstEl.classList.contains("is-style-preamble"))
				entryHeader.appendChild(firstEl);
			else if(secondEl && secondEl.classList.contains("is-style-preamble"))
				entryHeader.appendChild(secondEl);
		}
	}

})();
