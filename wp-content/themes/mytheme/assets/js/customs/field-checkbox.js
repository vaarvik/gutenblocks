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

		createFilterStyle(filterType);
		btn.addEventListener("click", (e) => {
			const notActive = btn.classList.toggle("active");
			searchInList(checkbox, listToSearch, filterType, notActive);
		});
	});

	function searchInList(checkbox, list, filterType, notActive) {
		let filter = checkbox.innerText.toLowerCase().replace(" ", "-");
		filter = filter[0] === "-" ? filter.substring(1) : filter;
		const items = list.querySelectorAll(".search-item");
		let currentFilters = list.dataset[`${filterType}Filters`] ? list.dataset[`${filterType}Filters`].split(",") : [];

		updateFiltersArray();

		if(!currentFilters.length && !notActive){
			resetFilter();
			return;
		}

		updateItemFilters();


		function updateItemFilters() {
			items.forEach((item, i) => {
				const itemCategories = item.dataset[filterType].split(",");
				if(arraysHasMatch(currentFilters, itemCategories)) {
					item.classList.remove(filterType + "-filter");
					return;
				}
				item.classList.add(filterType + "-filter");
			});
		}


		function updateFiltersArray() {
			if (notActive) {
				currentFilters.push(filter);
				list.dataset[`${filterType}Filters`] = currentFilters;
			} else {
				currentFilters = currentFilters.filter(string => string !== filter);
				list.dataset[`${filterType}Filters`] = currentFilters;
			}
		}


		function resetFilter() {
			items.forEach(item => {
				item.classList.remove(filterType + "-filter");
			});
		}
	}

	function arraysHasMatch(array1, array2) {

		for(let i in array1) {
			for(let j in array2) {
				if(array1[i].toLowerCase().replace(" ", "") == array2[j].toLowerCase().replace(" ", ""))
					return true;
			}
		};
		return false;
	}

	function createFilterStyle(filterType) {
		if( !document.querySelector(`#${filterType}-style`)){
			const styleEl = document.createElement("style");
			styleEl.id = `${filterType}-style`;

			styleEl.innerText = `.${filterType}-filter { display: none; }`.replace(/(\r\n|\n|\r)/gm, "");

			document.getElementsByTagName('head')[0].appendChild(styleEl);
		}
	}
})();
