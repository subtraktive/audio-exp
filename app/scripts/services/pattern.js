'use strict';

audioExp.factory('pattern', [

    function() {
        var Pattern = {
            config: {
                background: "rgba(0, 0, 0, 1)",
                width: 800,
                height: 800,
                tx: 0.5,
                ty: 0.8,
                depth: 20,
                ratio: 1 / Math.sqrt(1.7),
                w: 100,
                h: 100,
                color: "hsla(" + Math.random() * 255 + ", 50%, 50%, .2)",
                x: -1
            },

            getRandColor: function() {
                return "hsla(" + Math.random() * 255 + ", 40%, 50%, .8)";
                //return "#" + Math.floor(Math.random() * 16777215).toString(16);
            },

            init: function() {
                var canvas = document.getElementById('canvas'),
                    ctx = canvas.getContext('2d');

                canvas.width = this.config.width;
                canvas.height = this.config.height;
                ctx.fillStyle = this.config.background;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.translate(canvas.width * this.config.tx, canvas.height * this.config.ty);
                this.recurse(ctx, 0, this.config)
            },

            recurse: function(ctx, n, config) {

                this.config.x = this.config.x * -1;

                if (n >= config.depth) {
                    return;
                }

                //Draw the shape
                ctx.fillStyle = this.getRandColor();
                ctx.beginPath();
                ctx.moveTo(-config.w / 2, config.h / 2);
                ctx.lineTo(0, -config.h / 2);
                ctx.lineTo(config.w / 2, config.h / 2);
                ctx.closePath();
                ctx.fill();
                //ctx.fillRect(0, 0, config.w, config.h);

                //Save
                ctx.save();

                //Transform the object
                ctx.translate(this.config.x * config.w / 2, 0);
                ctx.rotate(this.config.x * Math.PI / 5);
                ctx.scale(config.ratio, config.ratio);
                console.log("the x is", this.config.x);
                ctx.translate(this.config.x * config.w / 2, -config.h);

                this.recurse(ctx, n + 1, config);
                //ctx.restore();
            }
        }

        return Pattern.init();
    }
])