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
		const repeaters = repeaterParent.querySelectorAll(".mt-repeater");
		repeaters.forEach(repeater => {
			console.log(`#${repeater.id}-add-btn`)
			const addBtn = repeater.querySelector(`#${repeater.id}-add-btn`);
			const info = repeater.querySelector(`#${repeater.id}-info`);
			let item = repeater.querySelector(`#${repeater.id}-reference`);
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
			//prevent a change of the name or id of a reference element
			if(fields[i].children && !fields[i].classList.contains('mt-reference')) {
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
		const thisId 	= parseInt(Math.max(...repeaterIds) + 1);
		const thisKey 	= repeaterIds.length + 1;

		//clone an item based on a ghost reference, remove the reference class and make adds the generated ID to it
		const itemClone 			= item.cloneNode(true);
		itemClone.id 				= `${repeater.id}_${thisId}`;
		itemClone.dataset.slug		= `${repeater.id}_${thisId}`;
		itemClone.dataset.itemId 	= `${thisId}`;
		itemClone.dataset.itemKey	= `${thisKey}`;
		itemClone.classList.remove("mt-reference");

		//updates the value, name and ID of each childs of repeaters that is imported
		updateChildrenInfo(itemClone, function (parent, field) {
			field.value = "";

			if (field.classList.contains('mt-btn-group')) return;

			if (field.classList.contains('mt-reference')) {
				field.id 				= `${parent.id}-reference`;
				return;
			};

			if (field.classList.contains('mt-repeater__item')) {
				field.id 				= `${parent.id}_0`;
				field.name 				= `${parent.id}_0`;
			}
			else if (field.classList.contains('mt-repeater__btn')) {
				field.id 	= `${parent.id}-${field.dataset.slug}`;
				field.name 	= `${parent.id}-${field.dataset.slug}`;
				if (parent.classList.contains('mt-btn-group')) {
					field.id 	= `${parent.parentNode.id}-${field.dataset.slug}`;
					field.name 	= `${parent.parentNode.id}-${field.dataset.slug}`;
				}
			}
			else if (field.classList.contains('mt-repeater__info')) {
				field.id 	= `${parent.id}-${field.dataset.slug}`;
				field.name 	= `${parent.id}`;
				field.value	= "[0]"; //set the default array size of the new repeater info
			}
			else if (field.classList.contains('mt-label')) {
				field.htmlFor 	= `${parent.id}__${field.dataset.slug}`;
			}
			else {
				field.id 	= `${parent.id}__${field.dataset.slug}`;
				field.name 	= `${parent.id}__${field.dataset.slug}`;
			}
		});

		//add events for the buttons nested repeaters in the cloned repeater
		if (itemClone.querySelector(".mt-repeater")) {
			addRepeaterEvents(itemClone);
		}

		//add the clone to the DOM after the last repeater
		const prevSibling = repeater.querySelector(`#${repeater.id}_${repeaterIds[repeaterIds.length - 1]}`);
		insertAfter(prevSibling, itemClone);

		//update the array that holds the info about total repeater
		repeaterIds.push(thisId);
		info.value = JSON.stringify(repeaterIds);
	}

})();
