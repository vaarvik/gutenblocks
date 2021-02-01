/**
 * ███████╗██╗███████╗██╗     ██████╗     ███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗
 * ██╔════╝██║██╔════╝██║     ██╔══██╗    ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║
 * █████╗  ██║█████╗  ██║     ██║  ██║    ███████╗█████╗  ███████║██████╔╝██║     ███████║
 * ██╔══╝  ██║██╔══╝  ██║     ██║  ██║    ╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║
 * ██║     ██║███████╗███████╗██████╔╝    ███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║
 * ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝     ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 *
 */
(() => {
	const fields = document.querySelectorAll(".field.search");
	fields.forEach(field => {
		const listToSearch = document.querySelector(`#${field.dataset.searchIn}`);
		field.addEventListener("keyup", (e) => {
			searchInList(field, listToSearch);
		})
	});

	function searchInList(field, list) {
		const filter = field.value.toUpperCase();
		const items = list.querySelectorAll(".search-item");
		items.forEach((item, i) => {
			const itemText = item.dataset.searchContent;
			if (itemText.toUpperCase().indexOf(filter) > -1) {
				item.style.display = "";
			} else {
				item.style.display = "none";
			}
		});
	}
})();
