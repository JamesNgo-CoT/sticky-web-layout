/* global $ */

$(() => {
	$('.btn-add-content').on('click', function () {
		$(this).after(`
			<br>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies placerat varius. Vestibulum ante ipsum
			primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis quam lacus. Suspendisse non ipsum
			vitae lectus pulvinar vestibulum gravida vel neque. Cras maximus felis vel sem mollis mattis. Morbi rhoncus, lacus
			vitae porta malesuada, magna lorem facilisis orci, tempus auctor dolor est sed massa. Duis feugiat mi nisl, sit
			amet lobortis tellus scelerisque id. Donec eleifend massa ut magna tincidunt, interdum posuere purus vulputate.
		`);
	});

	const $header = $('.sticky-web-layout > header[aria-hidden="true"]');
	$('.sticky-web-layout > header + header .btn-add-content').on('click', function() {
		$('.btn-add-content', $header).trigger('click');
	});
});
