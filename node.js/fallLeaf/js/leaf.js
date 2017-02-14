define(function (require,exports,moudle) {
    function Leaf(options) {
        this.width = options.width;
        this.left = options.left;
        this.oImg = new Image();
        this.oImg.width = this.width;
        this.oImg.style.left = this.left + 'px';
        this.oImg.src = "./img/"+Math.ceil(Math.random()*4)+".png";
        options.container.appendChild(this.oImg);
    }
    Leaf.prototype.fall = function () {
        var oImg = this.oImg;
        setInterval(function () {
            oImg.style.top = oImg.offsetTop +5+'px';
        },Math.random()*200);
    };
    moudle.exports = Leaf;
});
