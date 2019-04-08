$(document).ready(function () {
    var FontObj = {
        windowSize: '',
        changeFontSize: function () {
            if (this.windowSize > 1290) {
                $('html').css({'font-size': '100px'})
            } else{
                $('html').css({'font-size': Math.floor(this.windowSize / 12.9) + 'px'})
            }
            if (this.windowSize < 650) {
                $(".content .banner img").attr('src', 'images/m_banner.png')
            }
        }
    }
    FontObj.windowSize = $(document).width();
    FontObj.changeFontSize()
    $(window).resize(function () {
        FontObj.windowSize = $(window).width();
        FontObj.changeFontSize()

    })
    $(".desc-item").css({'height': window.innerHeight + 'px'})
    $('.banner').css({'height': window.innerHeight + 'px'})
    $('.header-nav-btn a.deploy-navigation').bind('click', function () {
        $(this).toggleClass('expand')
        if ($(this).hasClass('expand')) {
            $('.header-nav').css({'transform': 'translate(0px)','-webkit-transform': 'translate(0px)',
            '-moz-transform': 'translate(0px)'})
        } else {
            $('.header-nav').css({'transform': 'translate(180px)', '-webkit-transform': 'translate(180px)',
                '-moz-transform': 'translate(180px)'})
        }
    })

    if (FontObj.windowSize < 998) {
        $('.header-nav li').bind('click', function () {
            $(this).find('.sub').slideToggle("slow")
        })
    }

    function scrollToTop() {
        if ($('.scroll-top').length) {

            //Check to see if the window is top if not then display button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            });

            //Click event to scroll to top
            $('.scroll-top').click(function() {
                $('html, body').animate({ scrollTop: 0 }, 1500);
                return false;
            });
        }
    }
    scrollToTop();
})
