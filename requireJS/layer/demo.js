require(['jquery','layer'],function ($,Layer) {
     var layer = new Layer('dsb',{
         width:500,
         height:100
     });
     $('button').on('click',function () {
         layer.open();
         // $('.demo-mask').on('click',function () {
         //     layer.close();
         // })
     });

});
