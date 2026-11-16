const card = document.getElementById('card');

function openCard() {
	if (card.classList.contains('open')) return;
	card.classList.add('open');
}

function closeCard(event) {
	event.stopPropagation();
	card.classList.remove('open');
}