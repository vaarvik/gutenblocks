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
})();