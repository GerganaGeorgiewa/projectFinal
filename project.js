$(document).ready(function (){
    var $window = $(window);
    var $htmlBody = $('html, body');
    var $scrollToTopButton = $('#scroll-to-top-btn')
    $window.scroll(function () {
        var scrollPosition = $window.scrollTop();
        if(scrollPosition > 200){
            $scrollToTopButton.show();
        }else{
            $scrollToTopButton.hide();
        }
    });
    $scrollToTopButton.click(function () {
        $htmlBody.animate({
            scrollTop: 0
        }, 500)
    });

    $('.slider').bxSlider({
        mode: 'horizontal'
    });

});
