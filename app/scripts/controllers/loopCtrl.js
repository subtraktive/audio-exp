'use strict';

audioExp.controller('loopCtrl',['audio', '$scope', function(Audio, $scope){
	var ctx = new AudioContext();
	var gain = ctx.createGainNode();	
	gain.connect(ctx.destination);
	var loop = new Audio(ctx, "sound/beat1.wav", gain),
	loop2 = new Audio(ctx, "sound/sound.wav", gain);

	

	$scope.togglePlay = function(){
		if(loop.playing){
			loop.stop();
		}
		else{
			//loop.connect(ctx.destination);
			loop.play();
		}
	}

	$scope.togglePlay2 = function(){
		if(loop2.playing){
			loop2.stop();
		}
		else{
			//loop.connect(ctx.destination);
			loop2.play();
		}
	}
}])