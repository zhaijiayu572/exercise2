$(function () {
    var iLength = $('#brand .brand-content').width();
    $('#brand .brand-nav li').on('click',function () {
        var iLeft = iLength*$(this).index();
        console.log(iLeft);
        $('#brand .brand-content ul').animate({
            left:-iLeft
        },1000);
        $(this).addClass('selected').siblings().removeClass('selected');
        return false
    });
});
