/**
 * ██╗    ██╗██████╗     ██████╗ ██╗      ██████╗  ██████╗██╗  ██╗     ██████╗ ██████╗ ██████╗ ███████╗
 * ██║    ██║██╔══██╗    ██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 * ██║ █╗ ██║██████╔╝    ██████╔╝██║     ██║   ██║██║     █████╔╝     ██║     ██║   ██║██║  ██║█████╗
 * ██║███╗██║██╔═══╝     ██╔══██╗██║     ██║   ██║██║     ██╔═██╗     ██║     ██║   ██║██║  ██║██╔══╝
 * ╚███╔███╔╝██║         ██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗    ╚██████╗╚██████╔╝██████╔╝███████╗
 *  ╚══╝╚══╝ ╚═╝         ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
 *
 */

(() => {
	document.querySelectorAll(".wp-block-code").forEach((pre) => {
		const codeTag = pre.querySelector("code");
		codeTag.classList.add("language-jsx");
	});

	Prism.highlightAll();

	//add a class that shows if the element has a scrollbar or not
	document.querySelectorAll(".code-toolbar").forEach((element) => {
		const pre = element.querySelector(".wp-block-code");
		if(pre.scrollWidth - 1 > pre.offsetWidth) {
			element.classList.add("has-scrollbar");
		}
	});
})();
