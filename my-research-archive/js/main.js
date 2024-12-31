(function ($) {
    "use strict";

    // Navbar on scrolling
   $('.navbar').css('display', 'flex');

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $('.navbar').fadeIn('slow').css('display', 'flex');
    //     } else {
    //         $('.navbar').fadeOut('slow').css('display', 'none');
    //     }
    // });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);
const targetDate = new Date('2025-04-08T12:00:00');

                    function updateCountdown() {
                        const now = new Date();
                        const difference = targetDate - now;

                        if (difference > 0) {
                            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                            document.getElementById('days').textContent = days.toString().padStart(2, '0');
                            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
                        } else {
                            document.getElementById('countdown').innerHTML = "<h4 class='text-primary'>The video is live now!</h4>";
                        }
                    }

                    setInterval(updateCountdown, 1000);
                    updateCountdown();
