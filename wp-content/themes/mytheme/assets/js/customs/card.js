( function() {

	const CARDS = document.querySelectorAll(".card");
	CARDS.forEach(card => {
		card.addEventListener("click", () => {
			card.classList.toggle("is-open");
		})
	});

})();
