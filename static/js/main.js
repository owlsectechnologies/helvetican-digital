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

    /* attach a submit handler to the form */
    // $("#formoid").submit(function (event) {
    //
    //     /* stop form from submitting normally */
    //     event.preventDefault();
    //
    //     /* get the action attribute from the <form action=""> element */
    //     var $form = $(this),
    //         url = $form.attr('action');
    //
    //     /* Send the data using post with element id name and name2*/
    //     var posting = $.post(url, {
    //             full_name: $('#full_name').val(),
    //             email: $('#email').val(),
    //             phone: $('#phone').val(),
    //             message: $('#message').val()
    //         }
    //     );
    //
    //     /* Alerts the results */
    //     posting.done(function (data) {
    //         alert('success');
    //     });
    // });

    $("#formoid").submit(function (event) {
        event.preventDefault();

        const url = "http://localhost:8000/contact/8y6b0ahti0tzqfg2t2akf82pavmrc2sn/";
        let formData = new FormData();

        formData.append('full_name', $('#full_name').val());
        formData.append('email', $('#email').val());
        formData.append('phone', $('#phone').val());
        formData.append('message', $('#message').val());
        fetch(url,
            {
                body: formData,
                method: "post"
            });
    });
});