$(function () {
    $("#item .item-img").on({
        mouseover:function (e) {
            var $pointer = $('.pointer');
            var $bigImg = $('.big-img');
            var $window = $('.big-item-img');
            var iLeft = e.pageX - $(this).offset().left - $pointer.width()/2;
            var iTop = e.pageY - $(this).offset().top - $pointer.height()/2;
            var maxLeft = $(this).width()-$pointer.width();
            var maxTop = $(this).height()-$pointer.height();
            $pointer.show();
            $window.show();
            if(iLeft<0){
                iLeft = 0;
            }
            if(iTop<0){
                iTop=0;
            }
            if(iLeft>maxLeft){
                iLeft = maxLeft;
            }
            if(iTop>maxTop){
                iTop = maxTop;
            }
            $pointer.css({
                left:iLeft+'px',
                top:iTop
            });
            $bigImg.css({
                left:iLeft*(-$window.width()/$pointer.width()),
                top:iTop*(-$window.width()/$pointer.width())
            });
            $(this).on('mousemove',function (e) {
                var $pointer = $('.pointer');
                var $bigImg = $('.big-img');
                var $window = $('.big-item-img');
                var iLeft = e.pageX - $(this).offset().left - $pointer.width()/2;
                var iTop = e.pageY - $(this).offset().top - $pointer.height()/2;
                var maxLeft = $(this).width()-$pointer.width();
                var maxTop = $(this).height()-$pointer.height();
                if(iLeft<0){
                    iLeft = 0;
                }
                if(iTop<0){
                    iTop=0;
                }
                if(iLeft>maxLeft){
                    iLeft = maxLeft;
                }
                if(iTop>maxTop){
                    iTop = maxTop;
                }
                $pointer.css({
                    left:iLeft,
                    top:iTop
                });
                $bigImg.css({
                    left:iLeft*(-$window.width()/$pointer.width()),
                    top:iTop*(-$window.width()/$pointer.width())
                })
            })
        },
        // mousemove:function (e) {
        //     var $pointer = $('.pointer');
        //     var $bigImg = $('.big-img');
        //     var $window = $('.big-item-img');
        //     var iLeft = e.pageX - $(this).offset().left - $pointer.width()/2;
        //     var iTop = e.pageY - $(this).offset().top - $pointer.height()/2;
        //     var maxLeft = $(this).width()-$pointer.width();
        //     var maxTop = $(this).find('.item-img').height()-$pointer.height();
        //     if(iLeft<0){
        //         iLeft = 0;
        //     }
        //     if(iTop<0){
        //         iTop=0;
        //     }
        //     if(iLeft>maxLeft){
        //         iLeft = maxLeft;
        //     }
        //     if(iTop>maxTop){
        //         iTop = maxTop;
        //     }
        //     $pointer.css({
        //         left:iLeft,
        //         top:iTop
        //     });
        //     $bigImg.css({
        //         left:iLeft*(-$window.width()/$pointer.width()),
        //         top:iTop*(-$window.width()/$pointer.width())
        //     })
        // },
        mouseout:function () {
            $(this).off('mousemove');
            $('.pointer').hide();
            $('.big-item-img').hide();
        }
    })
});
