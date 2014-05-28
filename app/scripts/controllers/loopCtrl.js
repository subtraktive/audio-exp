'use strict';

audioExp.controller('loopCtrl',['audio', function(Audio){
	var ctx = new AudioContext();
	var loop = new Audio(ctx, "sound/beat1.wav");
	loop.load();
	loop.connect(ctx.destination);
	loop.play();
}])