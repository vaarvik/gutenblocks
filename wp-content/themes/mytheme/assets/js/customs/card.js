( function() {

	const CARDS = document.querySelectorAll(".card");
	CARDS.forEach((card, i) => {
		card.addEventListener("click", (e) => {
			if(card.classList.toggle("is-open"))
				resetAllCardsExcept(card);
		});
	});

	function resetAllCardsExcept(card) {
		CARDS.forEach(otherCard => {
			if(card != otherCard)
				otherCard.classList.remove("is-open");
		})
	}
})();
