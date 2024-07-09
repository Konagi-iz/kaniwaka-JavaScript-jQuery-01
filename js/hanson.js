/* Menu ------------ */
$('.menu').on('click', () => {
	$('.nav, .menu').toggleClass('is-active');

	if ($('body').css('overflow') === 'hidden') {
		$('body').css('overflow', '');
	} else {
		$('body').css('overflow', 'hidden');
	}
});

function orderPizza(type, topping) {
	console.log(`ピザ：${type} トッピング：${topping} を注文しました！`);
}

orderPizza('マルゲリータ', 'バジル');

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
