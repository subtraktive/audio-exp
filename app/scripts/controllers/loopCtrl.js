'use strict';

audioExp.controller('loopCtrl',['audio', '$scope', 'filter', function(Audio, $scope, Filter){
	var ctx = new AudioContext();
	var gain = ctx.createGainNode();	
	var filter = $scope.filter = new Filter(ctx);
	var loop = new Audio(ctx, "sound/beat1.wav", filter.filter),
	loop2 = new Audio(ctx, "sound/sound.wav", filter.filter);
	filter.connect(gain);
	gain.connect(ctx.destination);

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