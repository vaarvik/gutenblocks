/**
 * ███╗   ███╗████████╗    ███╗   ███╗███████╗████████╗ █████╗     ███████╗██╗███████╗██╗     ██████╗ ███████╗
 * ████╗ ████║╚══██╔══╝    ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗    ██╔════╝██║██╔════╝██║     ██╔══██╗██╔════╝
 * ██╔████╔██║   ██║       ██╔████╔██║█████╗     ██║   ███████║    █████╗  ██║█████╗  ██║     ██║  ██║███████╗
 * ██║╚██╔╝██║   ██║       ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║    ██╔══╝  ██║██╔══╝  ██║     ██║  ██║╚════██║
 * ██║ ╚═╝ ██║   ██║       ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║    ██║     ██║███████╗███████╗██████╔╝███████║
 * ╚═╝     ╚═╝   ╚═╝       ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝ ╚══════╝
 *
 */

(() => {
	addRepeaterEvents();

	function addRepeaterEvents(repeaterParent = null) {
		if(!repeaterParent) repeaterParent = document;
		const repeaters = repeaterParent.querySelectorAll(".repeater");
		repeaters.forEach(repeater => {
			const addBtn = repeater.querySelector(`#${repeater.id}-add-btn`);
			const info = repeater.querySelector(`#${repeater.id}-info`);
			let item = repeater.querySelector(`#${repeater.id}_0-reference`);
			info.value = info.dataset.startValue;
			addBtn.addEventListener("click", function(e) {
				addField(info, item, repeater);
			});
		});
	}

	function updateChildrenInfo(element, callback) {
		const fields = element.children;
		for (let i = 0; i < fields.length; i++) {
			callback(element, fields[i]);
			if(fields[i].children) {
				updateChildrenInfo(fields[i], function(parent, field) {
					callback(parent, field);
				});
			}
		}
	}

	function insertAfter(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

	function addField(info, item, repeater) {
		//get the ids of the repeater items that should exist and generate a new ID for the new field
		const repeaterIds = JSON.parse(info.value);
		const thisId = parseInt(Math.max(...repeaterIds) + 1);

		//clone an item based on a ghost reference, remove the reference class and make adds the generated ID to it
		const itemClone = item.cloneNode(true);
		itemClone.classList.remove("reference");
		itemClone.id = `${repeater.id}_${thisId}`;

		//updates the value, name and ID of each childs of repeaters that is imported
		updateChildrenInfo(itemClone, function (parent, field) {
			field.value = "";

			//prevent a change of the name or id of a reference element
			if (field.classList.contains('reference')) return;

			if (field.classList.contains('repeater__item')) {
				field.id 	= `${parent.id}_0`;
				field.name 	= `${parent.id}_0`;
			}
			else if (field.classList.contains('repeater__btn')) {
				field.id 	= `${parent.id}-${field.dataset.slug}`;
				field.name 	= `${parent.id}-${field.dataset.slug}`;
			}
			else if (field.classList.contains('repeater__info')) {
				field.id 	= `${parent.id}-${field.dataset.slug}`;
				field.name 	= `${parent.id}`;
				field.value	= "[0]"; //set the default array size of the new repeater info
			}
			else {
				field.id 	= `${parent.id}__${field.dataset.slug}`;
				field.name 	= `${parent.id}__${field.dataset.slug}`;
			}
		});

		//add events for the buttons nested repeaters in the cloned repeater
		if (itemClone.querySelector(".repeater")) {
			const cloneRepeaters = itemClone.querySelectorAll(".repeater");
			cloneRepeaters.forEach(element => {
				addRepeaterEvents(itemClone);
			});
		}

		//add the clone to the DOM after the last repeater
		const prevSibling = repeater.querySelector(`#${repeater.id}_${repeaterIds[repeaterIds.length - 1]}`);
		insertAfter(prevSibling, itemClone);

		//update the array that holds the info about total repeater
		repeaterIds.push(thisId);
		info.value = JSON.stringify(repeaterIds);
	}


})();
