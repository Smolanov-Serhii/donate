$( document ).ready(function() {

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    if ($(".js-locale").length){
        $(".js-locale").click( function(e) {
            $('.other-language').fadeToggle(300);
        });
    };

    if ($(".js-popup").length){
        $(".js-popup").click( function(e) {
            $('.popup').fadeToggle(300);
            $('body').addClass('lock');
        });
    };

    if ($(".popup__close").length){
        $(".popup__close").click( function(e) {
            $('.popup').fadeToggle(300);
            $('body').removeClass('lock');
        });
    };

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".language-chooser-image"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.other-language').fadeOut(300); // скрываем его
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".popup__container"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.popup').fadeOut(300); // скрываем его
            $('body').removeClass('lock');
        }
    });

    if($('.content__tabs').length){
        $(".content__tabs .content__tab").click(function() {
            $(".content__tabs .content__tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".content__contents .content__content").hide().eq($(this).index()) .css("display", "flex")
                .hide()
                .fadeIn();
        }).eq(0).addClass("active");
        $(".content__contents .content__content").eq(0).addClass("active").fadeIn(300);
    }

});




