/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		wide: ['961px', '1880px'],
		normal: ['961px', '1620px'],
		narrow: ['961px', '1320px'],
		narrower: ['737px', '960px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.
	var $nav_a = $nav.find('a');

	$nav_a
		.addClass('scrolly')
		.on('click', function (e) {

			var $this = $(this);

			// External link? Bail.
			if ($this.attr('href').charAt(0) != '#')
				return;

			// Prevent default.
			e.preventDefault();

			// Deactivate all links.
			$nav_a.removeClass('active');

			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			$this
				.addClass('active')
				.addClass('active-locked');

		})
		.each(function () {

			var $this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			// No section for this link? Bail.
			if ($section.length < 1)
				return;

			// Scrollex.
			$section.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function () {

					// Deactivate section.
					$section.addClass('inactive');

				},
				enter: function () {

					// Activate section.
					$section.removeClass('inactive');

					// No locked links? Deactivate all links and activate this section's one.
					if ($nav_a.filter('.active-locked').length == 0) {

						$nav_a.removeClass('active');
						$this.addClass('active');

					}

					// Otherwise, if this section's link is the one that's locked, unlock it.
					else if ($this.hasClass('active-locked'))
						$this.removeClass('active-locked');

				}
			});

		});

	// Scrolly.
	$('.scrolly').scrolly();

	// Header (narrower + mobile).

	// Toggle.
	$(
		'<div id="headerToggle">' +
		'<a href="#header" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Header.
	$('#header')
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'header-visible'
		});

})(jQuery);

function showImage(stringItem) {
	var modal = document.getElementById("imageModal");
	var modalImage = document.getElementById("modalImage");

	modalImage.src = stringItem;
	setTimeout(function () {
		modal.classList.add("show");
		modal.style.display = "block";
	}, 50);
}

function closeModal() {
	var modal = document.getElementById("imageModal");
	modal.classList.remove("show");
	setTimeout(function () {
		modal.style.display = "none";
	}, 500);
}

document.getElementById("imageModal").addEventListener("click", function (event) {
	var modalContent = document.querySelector(".modal-content");
	if (!modalContent.contains(event.target)) {
		closeModal();
	}
});


function calculateAge(birthDate, currentDate = new Date()) {
	const birth = new Date(birthDate);
	let age = currentDate.getFullYear() - birth.getFullYear();

	// Adjust for the birthday not occurring yet this year
	if (
		currentDate.getMonth() < birth.getMonth() ||
		(currentDate.getMonth() === birth.getMonth() && currentDate.getDate() < birth.getDate())
	) {
		age--;
	}

	return age;
}
document.addEventListener('DOMContentLoaded', function (e) {
	var age = calculateAge('2002-04-08');
	var introParagraph = document.getElementById('introParagraph');
	var aboutMeAge = document.getElementById('aboutMeAge');
	aboutMeAge.innerText = aboutMeAge.innerText.replace("%age", age);
	introParagraph.innerText = introParagraph.innerText.replace("%age", age);
});
