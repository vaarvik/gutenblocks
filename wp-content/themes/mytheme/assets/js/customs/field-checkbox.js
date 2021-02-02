/**
 * ███████╗██╗███████╗██╗     ██████╗      ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗██████╗  ██████╗ ██╗  ██╗
 * ██╔════╝██║██╔════╝██║     ██╔══██╗    ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔══██╗██╔═══██╗╚██╗██╔╝
 * █████╗  ██║█████╗  ██║     ██║  ██║    ██║     ███████║█████╗  ██║     █████╔╝ ██████╔╝██║   ██║ ╚███╔╝
 * ██╔══╝  ██║██╔══╝  ██║     ██║  ██║    ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══██╗██║   ██║ ██╔██╗
 * ██║     ██║███████╗███████╗██████╔╝    ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗██████╔╝╚██████╔╝██╔╝ ██╗
 * ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝      ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝
 *
 */
(() => {
	const checkboxes = document.querySelectorAll(".filter-checkbox");
	checkboxes.forEach(checkbox => {
		const listToSearch = document.querySelector(`#${checkbox.dataset.searchIn}`);
		const filterType = checkbox.dataset.searchFor;
		const btn = checkbox.querySelector(`.btn`);
		btn.addEventListener("click", (e) => {
			btn.classList.toggle("active");
			searchInList(checkbox, listToSearch, filterType);
		});
	});

	function searchInList(checkbox, list, filterType) {
		const filter = checkbox.innerText.toLowerCase().replace(" ", "-");
		const items = list.querySelectorAll(".search-item");
		items.forEach((item, i) => {
			const optionsText = item.dataset[filterType];
			const optionsArray = optionsText.split(",");
			for(let i in optionsArray) {
				//if the component has the category then don't do anything more with it
				if (optionsArray[i].toLowerCase() === filter ) {
					return;
				}
			};

			//if there is no match...
			//create an array from the string in dataset.filters
			const oldFilters = item.dataset.filters ? item.dataset.filters.split(",") : [];
			//create a variable that checks if there is any filter already and if they include the current filter
			const hasThisFilter = oldFilters && oldFilters.includes(filter);
			//if this item don't have this filter
			if(!hasThisFilter){
				//add filters to the component
				item.dataset.filters = `${ filter }${ oldFilters ? "," + oldFilters.join(",") : "" }`;
				//hide item
				item.style.display = "none";
			}
			//if the filter is already on the component then remove it again
			else {
				//remove filter
				item.dataset.filters = oldFilters.filter(string => string !== filter);

				//show item is no filters is on it
				const hasSearchFilter = item.dataset.hasSearchFilter && item.dataset.hasSearchFilter === "true";
				if(item.dataset.filters === "" && !hasSearchFilter){
					item.style.display = "";
				}
			}
		});
	}
})();
