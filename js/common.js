'use strict';

;(function($) {
    var lenovo = {
        banner: function() {
            var banner = new Swiper("#banner",{
                pagination: '.swiper-pagination',
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                loop: true
            });
        },
        detail: function() {
            var detail = new Swiper("#detail",{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                autoplay: false,
                loop: true
            })
        }
    };
    
    lenovo.banner();
    lenovo.detail();
})(jQuery, window);
