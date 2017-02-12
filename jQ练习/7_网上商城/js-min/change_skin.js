$(function () {
    var idNow = $.cookie('id');
    var src = "style-mine/skin/"+idNow+".css";
    $('link.skin').attr('href',src);
    $("#"+idNow).addClass('selected').siblings().removeClass('selected');
    $('#skin li').on('click',function () {
        var id = $(this).attr('id');
        var src = "style-mine/skin/"+id+".css";
        $('link.skin').attr('href',src);
        $(this).addClass('selected').siblings().removeClass('selected');
        $.cookie('id',id,15);
    })
});
