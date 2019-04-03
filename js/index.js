$(document).ready(function () {
    var FontObj = {
        windowSize: '',
        changeFontSize: function () {
            if (this.windowSize > 1290) {
                console.log(11)
                $('html').css({'font-size': '100px'})
            } else{
                $('html').css({'font-size': Math.floor(this.windowSize / 12.9) + 'px'})
            }
        }
    }
    FontObj.windowSize = $(document).width();
    FontObj.changeFontSize()
    $(window).resize(function () {
        FontObj.windowSize = $(window).width();
        FontObj.changeFontSize()

    })

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
})
