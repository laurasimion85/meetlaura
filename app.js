$(document).ready(function() {


    $(window).scroll(function() {

        if (this.scrollY > 10) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }

    })

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


    //owl carousel script


    $('.carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 10,
        nav: true,
        dots: true,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }


    });
    var pupils = document.querySelectorAll(".pupil");

    for (var i = 0; i < pupils.length; i++) {
        var offset = pupils[i].getBoundingClientRect();
        pupils[i]['centerX'] = offset.left + offset.width / 2,
            pupils[i]['centerY'] = offset.bottom;
    }

    function goGoogly(e) {
        var pointerEvent = e;
        if (e.targetTouches && e.targetTouches[0]) {
            e.preventDefault();
            pointerEvent = e.targetTouches[0];
            mouseX = pointerEvent.pageX;
            mouseY = pointerEvent.pageY;
        } else {
            mouseX = e.clientX + window.pageXOffset,
                mouseY = e.clientY + window.pageYOffset;
        }
        for (var i = 0; i < pupils.length; i++) {
            pupils[i]['radians'] = Math.atan2(mouseX - pupils[i]['centerX'], mouseY - pupils[i]['centerY']),
                pupils[i]['degree'] = (pupils[i]['radians'] * (180 / Math.PI) * -1);
            pupils[i].style.transform = 'rotate(' + (pupils[i]['degree'] + 180) + 'deg)';
        }
    }

    window.addEventListener('mousemove', goGoogly);
});