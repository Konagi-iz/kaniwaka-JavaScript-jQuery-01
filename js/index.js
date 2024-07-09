window.addEventListener('DOMContentLoaded', () => {
	/* Hero nav scroll ------------ */
	const $heroNavs = $('.lcl-hero-nav__link');

	$heroNavs.on('click', function() {
			const target = $(this).attr('data-anchor');
			const pos = $(`.anchor-${target}`).offset().top;

			$('html, body').animate({ scrollTop: pos });
		});
});

window.addEventListener('DOMContentLoaded', () => {
	/* Works nav switch ------------ */
	const $workItems = $('.lcl-works-list__item');
	const $worksNavs = $('.lcl-works-nav__item');

	$workItems.each((i, el) => {
		ScrollTrigger.create({
			trigger: el,
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				switchItem($worksNavs[i]);
			},
			onEnterBack: () => {
				switchItem($worksNavs[i]);
			},
		});
	});

	function switchItem(el) {
		$worksNavs.removeClass('is-active');
		$(el).addClass('is-active');
	}

	/* Works nav scroll ------------ */
	$worksNavs.each((i, el) => {
		const $btn = $(el).children();
		const pos = $($workItems[i]).offset().top;
		const elHeight = $($workItems[i]).height();
		const windowHeight = $(window).height();

		$btn.on('click', () => {
			$('html, body').animate({ scrollTop: pos - (windowHeight - elHeight) / 2 });
		});
	});
});
