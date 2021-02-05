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
		const filter = field.value;
		const items = list.querySelectorAll(".search-item");
		items.forEach((item, i) => {
			const itemText = item.dataset.searchContent;
			if (itemText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
				if(!item.dataset.filters || item.dataset.filters === ""){
					item.classList.remove("has-search-filter");
				}
				//tell the element that it is not affected by the filtering from the search input
				item.dataset.hasSearchFilter = "false";
			} else {
				item.dataset.hasSearchFilter = "true";
				item.classList.add("has-search-filter");
			}
		});
	}
})();
