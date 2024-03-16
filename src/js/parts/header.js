export class Header {
    init() {
        // Hover effects and class toggling based on window width
        if ($(window).width() >= 992) {
            $('.menu-item').each(function () {
                if ($(this).children(".mega-menu").length === 0) {
                    return;
                } else {
                    $(this).hover(function () {
                        $('.header').addClass('header-hover');
                    }, function () {
                        $('.header').removeClass('header-hover');
                    });
                }
            });
            $('.mega-menu-link').each(function () {
                if ($(this).children(".mega-menu-img").length === 0) {
                    return;
                } else {
                    $(this).hover(function () {
                        $(this).addClass('menu-link-hover');
                    }, function () {
                        $(this).removeClass('menu-link-hover');
                    });
                }
            });
        }

        // Toggle mobile menu
        $('.menu-toggle').click(function (e) {
            e.preventDefault();
            $('.burgar-menu').toggleClass('activate');
            $('header').toggleClass('header-active');
            $('html').toggleClass('overflow-hidden');
            $('.header-logo').toggleClass('opacity-0');
            $('body').toggleClass('body-active');
        });

        // Responsive navigation menu
        $(".main-menu .menu-item").click(function (e) {
            if ($(window).width() <= 991 && $(this).children(".mega-menu").length > 0) {
                e.preventDefault();
                e.stopPropagation();
                // Toggle active class
                $(".main-menu .menu-item").removeClass("active");
                $(this).toggleClass("active");
                // Toggle visibility of mega menu
                $(this).children(".mega-menu").slideToggle();
                $(".main-menu .menu-item").not(this).children(".mega-menu").slideUp();
            }
        });

        // Prevent closing mega menu on click inside it
        $(".main-menu .mega-menu").click(function (e) {
            e.stopPropagation();
        });

        // Close mega menu on outside click
        $(document).click(function () {
            if ($(window).width() <= 991) {
                $(".main-menu .menu-item").removeClass("active");
                $(".main-menu .mega-menu").slideUp();
            }
        });
        // header fixed js
        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        $(window).scroll(function () {
            var sticky = $("header"),
                scroll = $(window).scrollTop();
            if (scroll >= 50) {
                sticky.addClass("header-fixed");
                sticky.removeClass("header-fixed-os");
            }
            else {
                sticky.removeClass("header-fixed");
                sticky.addClass("header-fixed-os");
            }
            var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
                $("header").removeClass("hidden");
            } else {
                $("header").addClass("hidden");
            }
            prevScrollPos = currentScrollPos;
        });
    }
}