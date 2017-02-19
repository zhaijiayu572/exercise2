define(function () {
    function Layer(title,config) {
        var set = {
            width:400,
            height:300,
            url:''
        };
        $.extend(set,config);
        this.$container = $('<div class="demo-container">');
        this.$mask = $('<div class="demo-mask"></div>');
        this.$content = $('<div class="layer-content"></div>').css({
            width:set.width,
            height:set.height,
            marginLeft:-set.width/2,
            marginTop:-set.height/2
        });
        this.$title = $('<div class="layer-title"></div>');
        this.spantitle = $('<span>'+title+'</span>');
        this.$close = $('<span class="close"></span>');
        this.tempContainer = $('<div class="tempContainer"></div>').css({
            width:300,
            height:200
        }).load('template.html');
        this.open = function () {
            this.$mask.appendTo(this.$container);
            this.$content.appendTo(this.$container);
            this.$title.appendTo(this.content);
            this.spantitle.appendTo(this.$title);
            this.$close.appendTo(this.$title);
            this.tempContainer.appendTo(this.$content);
            $('body').append(this.$container);
            var that = this;
            this.$mask.on('click',function () {
                that.$container.remove();
            });
        };
        this.close = function () {
            alert(this.$container);
            this.$container.remove();
        };

    }
    return Layer;
});
