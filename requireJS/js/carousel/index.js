require(['jquery','carousel'],function ($,Carousel) {
    var config = {
        panelStyle:'circle',   //有square和circle两种样式
        btnStyle:'bottom'
    };
    var carousel = new Carousel(config);
    var carousel2 = new Carousel();
});
