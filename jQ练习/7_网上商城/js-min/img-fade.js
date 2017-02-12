$(function () {
    var index = 0;
    function changeImg_fade(index) {
        $('#imgScroll .img-content a').eq(index).show().siblings().hide();
        $('#imgScroll .img-nav li').eq(index).addClass('selected').siblings().removeClass('selected');
    }
    $('#imgScroll .img-nav li').on('mouseover',function () {
        index = $(this).index();
        changeImg_fade(index);
    });
    var timer = setInterval(function () {
        index++;
        if(index==$('#imgScroll .img-nav li').length){
            index=0;
        }
        changeImg_fade(index);
    },3000);
    $('#imgScroll').on({
        'mouseover':function () {
            clearInterval(timer);
        },
        'mouseout':function () {
            timer = setInterval(function () {
                index++;
                if(index==$('#imgScroll .img-nav li').length){
                    index=0;
                }
                changeImg_fade(index);
            },3000);
        }
    })
});


