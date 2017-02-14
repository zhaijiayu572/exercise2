require(["./leaf"],function (Leaf) {
    var windowWidth = document.documentElement.clientWidth;
    var oContainer = document.getElementById('container');
    for(var i=0;i<4;i++){
        var width = 50+Math.random()*50;
        var left = Math.random()*(windowWidth-width);
        var leaf = new Leaf({
            width:width,
            left:left,
            container:oContainer
        });
        leaf.fall();
    }

});
