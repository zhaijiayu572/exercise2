$(function () {
    $('.tab-nav li').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tab-content li').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
    })
});
