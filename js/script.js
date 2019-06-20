$(document).ready(function() {
	var firstScrollSkills = true;
	$('.header_top_list li a').on('click', function(event) {
		event.preventDefault();
		var hrefs = $(this).attr('href');
		var top = $(hrefs).offset().top;
		$('html, body').animate({scrollTop: top}, 1200)
	});
	$('.clients_slider').slick({
		arrows: false,
		dots: true
	});
	$('.header_slider').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="header_arrow header_arrow_left"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="header_arrow header_arrow_right"><i class="fas fa-chevron-right"></i></button>'
	});
	$('.about_accordeon_title').on('click', function() {
		$(this).toggleClass('active').next().slideToggle(500)
	});
	$('.portfolio_list li a').on('click', function(event) {
		event.preventDefault();
		$('.portfolio_list li.active').removeClass('active');
		$(this).parent().addClass('active');
		var hrefs = $(this).attr('href');
		$('.shows').removeClass('shows')
		$(hrefs).addClass('shows');
	});

	$('.blog_arrow').on('click', function(event) {
		event.preventDefault();
		$('.blog_items.hiddens').removeClass('hiddens');
		$(this).css('display', 'none');
		$('.blog').css('padding-bottom', '50px');
	});

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if (wScroll + 500 > $('#skills').offset().top) {
			if (firstScrollSkills) {
				$('#circle').circleProgress({
				  value: 0.9,
				  thickness: 3,
				  size: 140,
				  animation: {
				  	duration: 3000
				  },
				  fill: {
				    color: "#ff0036"
				  }
				});
				$('#circle1').circleProgress({
				  value: 0.8,
				  thickness: 3,
				  size: 140,
				  animation: {
				  	duration: 5000
				  },
				  fill: {
				    color: "#ff0036"
				  }
				});
				$('#circle2').circleProgress({
				  value: 0.7,
				  thickness: 3,
				  size: 140,
				  animation: {
				  	duration: 7000
				  },
				  fill: {
				    color: "#ff0036"
				  }
				});
				$('#circle3').circleProgress({
				  value: 0.9,
				  thickness: 3,
				  size: 140,
				  animation: {
				  	duration: 10000
				  },
				  fill: {
				    color: "#ff0036"
				  }
				});
				firstScrollSkills = false;
			}
		}
	});
	$(window).bind('scroll', function() {
		var blog = $('.blog').offset().top;
		if ($(this).scrollTop() > blog) {
			$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7e2fdc9dcd758f972a38adceb9793f6ac52fe5d5adb7bb4cad3e2100fa1ad307&amp;width=100%25&amp;height=530&amp;lang=ru_RU&amp;scroll=false"></script>');
			$(window).unbind('scroll');
		}
	});
});