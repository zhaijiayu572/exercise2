$(function () {
    var height = $('body').height();
    $bodyMask = $('.body-mask');
    $bodyMask.height(height);
    $fullImg = $('.full-img');
    $fullImg.css({
        marginLeft:-$fullImg.width()/2,
        marginTop:-$fullImg.height()/2
    });
    $('.full-item-img>span').on('click',function () {
        $fullImg.show();
        $bodyMask.show().on({
            click:function () {
                $(this).hide();
                $fullImg.hide();
            }
        });
        $(document).on('keydown',function (e) {
            if(e.which==27){
                $bodyMask.hide();
                $fullImg.hide();
            }
        })
    })
});
