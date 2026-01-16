document.querySelectorALL('a[href^="#"]').forEach (anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(dis.getAtribute('href')).
		scrollIntoView({'Behavior:smooth'
		});
	});
});
const productCards = document.querySelectorALL('.product-card');
productCards.forEach(card => {
	card.addEventListener('mouseenter', function() {
		This.style.transform = 'traslateY(-15px)';
		});

	card.addEventListener('mouseenter', function(){
		Things.style.transform - 'traslateY(0)';
	});
});
