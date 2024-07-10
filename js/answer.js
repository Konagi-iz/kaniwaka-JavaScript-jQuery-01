/* Menu ------------ */
$('.menu').on('click', () => {
	$('.menu, .nav').toggleClass('is-active');

	if ($('body').css('overflow') === 'hidden') {
		$('body').css('overflow', '');
	} else {
		$('body').css('overflow', 'hidden');
	}
});

/* ScrollIn ------------ */
$('.scr-in').each((index, el) => {
	$(window).on('scroll', () => {
		const pos = $(el).position().top;
		const scroll = $(window).scrollTop();
		const height = $(window).height();
		const offset = 0.8;

		if (pos < scroll + height * offset) {
			$(el).addClass('scr-in--on');
		}
	});
});

/* Header ------------ */
let currentScroll = 0;

$(window).on('scroll', () => {
	const scroll = $(window).scrollTop();

	if (scroll > currentScroll) {
		$('#header').addClass('is-scrolled');
	} else {
		$('#header').removeClass('is-scrolled');
	}

	currentScroll = scroll;
});

/* Stalker ------------ */
$(window).on('mousemove', (event) => {
	const x = event.clientX;
	const y = event.clientY;

	$('.stalker').css('translate', `${x}px ${y}px`);
});

$(window).hover(
	() => {
		$('.stalker').addClass('is-active');
	},
	() => {
		$('.stalker').removeClass('is-active');
	}
);

$('a, button').hover(
	() => {
		$('.stalker').addClass('is-hover');
	},
	() => {
		$('.stalker').removeClass('is-hover');
	}
);
