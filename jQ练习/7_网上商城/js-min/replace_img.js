$(function () {
    $('.img-list li').on('click',function () {
        var which = $(this).attr('id');
        $src = 'images/pro_img/'+which;
        $('.small-img img').attr('src',$src+'_small.jpg');
        $('.big-img img').attr('src',$src+'_big.jpg');
        $('.full-img img').attr('src',$src+'_small.jpg');
    })
});
