$(document).ready(function () {


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
		paginationSpeed: 500,
		singleItem: true,
		autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items: 5,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [979, 5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items: 5,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [979, 5],
	});


	// google map
	var map;

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: -34.397,
				lng: 150.644
			},
			zoom: 8
		});
	}


	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
		var oTop;
		if ($('.counter').length !== 0) {
			oTop = $('.counter').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.counter').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).on('scroll', function () {
		counter();
	});


	// venobox
	$('.venobox').venobox();

    (function ($) {
        function processForm(e) {
            var data = JSON.stringify({
                "full_name": $('#full_name').val(),
                "email": $('#email').val(),
                "phone": $('#phone').val(),
                "message": $('#message').val()
            });
            $.ajax({
                type: 'POST',
                url: 'http://46.101.205.188/contact/pq0sb1ihx3yekh0uzxcygt6zdpwjr7r3/',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: data,
                processData: false,
                // success: function( data, textStatus, jQxhr ){
                //     $('#response pre').html( data );
                // },
                // error: function( jqXhr, textStatus, errorThrown ){
                //     console.log( errorThrown );
                // }
            });

            e.preventDefault();
        }

        $('#contact').submit(processForm);
    })(jQuery);
});