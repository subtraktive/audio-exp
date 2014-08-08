'use strict';

audioExp.factory('visualizer',[function(){
	
	var Visualizer = function(buffer){
		this.canvas = document.getElementById('visualizer');
		this.canvasCtx = this.canvas.getContext("2d");
		this.cwidth = this.canvas.width;
		this.cheight = this.canvas.height;
		this.buffer = buffer;
		this.len = buffer.length; //Buffer length
	}

	Visualizer.prototype.draw = function(){
		this.canvasCtx.clearRect(0, 0, this.cwidth, this.cheight);

		this.canvasCtx.fillStyle = 'rgb(200, 200, 200)';
		this.canvasCtx.fillRect(0, 0, this.cwidth, this.cheight);
		this.canvasCtx.lineWidth = 2;
		this.canvasCtx.strokeStyle = 'rgb(20,20,20)';

		this.canvasCtx.beginPath();

		var sliceWidth = this.cwidth * 1.0 / this.len,
		x = 0, v, y;

		for(var i = 0; i < this.len; i++){
			v = this.buffer[i]/256.0;
			console.log("v is", v);
			y = v* this.cheight/2;
			console.log("y us", y);

			if(i == 0){
				this.canvasCtx.moveTo(x, y);
			}else{
				this.canvasCtx.lineTo(x, y);
			}

			x += sliceWidth;
		}

		this.canvasCtx.lineTo(this.cwidth, this.cheight/2);
		this.canvasCtx.stroke();
	}

	return Visualizer;
}])