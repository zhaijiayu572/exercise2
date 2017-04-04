var Img = React.createClass({
    click:function () {
        if(this.props.myPos.isCenter){
            this.props.back();

        }else{
            this.props.fn();
        }

    },
    render:function () {
        var style = {
            left:this.props.myPos.pos.left,
            top:this.props.myPos.pos.top,
            transform: "rotate("+this.props.myPos.pos.reg+"deg)"
        };
        var a = {};
        var b = {};
        if(this.props.myPos.isBack){
            // a.transform = "rotateY(-180deg)";
            // b.transform = "rotateY(0deg)";
            style.transform = "rotateY(180deg)";
        }
        console.log(this.props.myPos.isBack);
        return (
            <div className="img-container" style={style} onClick={this.click}>

                <div className="front" style={a}>
                    <img src={'img/'+this.props.data.fileName} alt=""/>
                    <div className="img-title">{this.props.data.title}</div>
                </div>
                <div className="back" style={b}>{this.props.data.desc}</div>
            </div>
        )


    }
});
var Panel = React.createClass({
    render:function () {
        return (
            <span></span>
        )
    }
});
var Container = React.createClass({
    getInitialState:function () {
        return {
            imgPosArr: [{
                pos: {
                    left: 0,
                    top: 0,
                    reg:0
                },
                isCenter:false,
                isBack:false
            }]
        }
    },
    const:{
        xLeftMin:0,
        xLeftMax:0,
        xRightMin:0,
        xRightMax:0,
        yMin:0,
        yMax:0,
        center:{
            left:0,
            top:0,
            reg:0
        }
    },
    componentDidMount:function () {
        var stageWidth = this.refs.section.offsetWidth;
        var imgWidth = ReactDOM.findDOMNode(this.refs.img).offsetWidth;
        var stageHeight = this.refs.section.offsetHeight;
        var imgHeight = ReactDOM.findDOMNode(this.refs.img).offsetHeight;
        this.const.xLeftMin = -imgWidth/2;
        this.const.xLeftMax = (stageWidth/2)-(imgWidth*1.5);
        this.const.xRightMin = (stageWidth/2)+(imgWidth/2);
        this.const.xRightMax = stageWidth-(imgWidth/2);
        this.const.yMin = -(imgHeight/2);
        this.const.yMin = stageHeight-(imgHeight/2);
        this.const.center.left = (stageWidth/2)-(imgWidth/2);
        this.const.center.top = (stageHeight/2)-(imgHeight/2);
        this.setRandPos(0);
    },
    setRandPos:function (centerIdx) {

        for (var i = 0; i < this.state.imgPosArr.length; i++) {
            if (i < this.state.imgPosArr.length / 2) {
                this.state.imgPosArr[i].pos = {
                    left: this.getRandom(this.const.xLeftMin, this.const.xLeftMax),
                    top: this.getRandom(this.const.yMin, this.const.yMax),
                    reg:this.getRandom(-30,30)
                };
                this.state.imgPosArr[i].isCenter = false;
                this.state.imgPosArr[i].isBack = false;
            } else {
                this.state.imgPosArr[i].pos = {
                    left: this.getRandom(this.const.xRightMin, this.const.xRightMax),
                    top: this.getRandom(this.const.yMin, this.const.yMax),
                    reg:this.getRandom(-30,30)
                };
                this.state.imgPosArr[i].isCenter = false;
                this.state.imgPosArr[i].isBack = false;
            }
        }
        this.state.imgPosArr[centerIdx].pos = this.const.center;
        this.state.imgPosArr[centerIdx].isCenter = true;
        this.forceUpdate();

        console.log(this.state.imgPosArr);
    },
    changeCenter:function (centerIdx) {
        return function () {
            this.setRandPos(centerIdx);
        }.bind(this);
    }
    ,
    getRandom:function (min,max) {
        return Math.floor(Math.random()*(max-min)+min);
    },
    getBack:function (centerIdx) {
        
        return function () {
            if(this.state.imgPosArr[centerIdx].isBack){
                this.state.imgPosArr[centerIdx].isBack = false;
            }else{
                this.state.imgPosArr[centerIdx].isBack = true;
            }

            this.forceUpdate();
        }.bind(this);
    },
    render: function () {
        var imgArr = [];
        var panelArr = [];
        imgDatas.forEach(function (val,index) {
            if(!this.state.imgPosArr[index]){
                this.state.imgPosArr[index] = {
                    pos:{
                        left:0,
                        top:0,
                        reg:0
                    },
                    isCenter:false,
                    isBack:false
                }
            }
            imgArr.push(<Img data={val} key={index}
                             myPos={this.state.imgPosArr[index]} ref="img"
                             fn={this.changeCenter(index)} back={this.getBack(index)}/>);
            panelArr.push(<Panel data={index} key={index}/>);
        }.bind(this));
        return (
            <section ref='section' className="container">
                {imgArr}
                <div className="panel-tab">
                    {panelArr}
                </div>
            </section>
        )
    }
});
ReactDOM.render(
    <Container/>,
    document.getElementById("stage")
);
