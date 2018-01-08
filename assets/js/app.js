document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
	var navbarBurgers = [].slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if (navbarBurgers.length > 0) {

		// Add a click event on each of them
		navbarBurgers.forEach(function (navbarBurger) {
			navbarBurger.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var targetId = navbarBurger.dataset.target;
				var target = document.getElementById(targetId);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				navbarBurger.classList.toggle('is-active');
				target.classList.toggle('is-active');
			});
		});
	}
});

(function () {
	// window.addEventListener('load', function () {
	// 	var pageHeight = document.documentElement.scrollHeight;
	// 	var viewportHeight = document.documentElement.clientHeight;
  //
	// 	var prog = document.querySelector('.progress-indicator');
  //
	// 	var totalScrollHeight = pageHeight - viewportHeight;
  //
	// 	scrollHandler();
	// 	window.addEventListener('scroll', function () {
	// 		scrollHandler();
	// 	});
  //
	// 	function scrollHandler() {
	// 		window.requestAnimationFrame(function () {
	// 			var perc = Math.min(1, window.pageYOffset / totalScrollHeight);
	// 			updateProgress(perc);
	// 		});
  //
	// 		function updateProgress(perc) {
	// 			prog.value = perc * 100;
	// 			prog.innerHTML = perc * 100 + '%';
	// 		}
	// 	}
	// });

	window.addEventListener('load', function () {
		var article = document.querySelector('#article');
		var articleHeight = article.getBoundingClientRect().height;
		var initialTop = getOffsetTop(article);

		var pageHeight = document.documentElement.scrollHeight;
		var viewportHeight = document.documentElement.clientHeight;

		var prog = document.querySelector('.progress-indicator');

		var totalScrollHeight = (initialTop + articleHeight) - viewportHeight;

		scrollHandler();
		window.addEventListener('scroll', function () {
			scrollHandler();
		});

		function scrollHandler() {
			window.requestAnimationFrame(function () {
				var perc = Math.min(1, window.pageYOffset / totalScrollHeight);
				updateProgress(perc);
			});

			function updateProgress(perc) {
				prog.value = perc * 100;
				prog.innerHTML = perc * 100 + '%';
			}
		}

		// Util Tool
		function getOffsetTop(elem) {
			var top = 0;

			while (elem.offsetParent) {
					top += elem.offsetTop;
					elem = elem.offsetParent;
			}

			return top;
		}
	});

})();
