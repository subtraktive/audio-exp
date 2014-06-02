'use strict';

audioExp.controller('loopCtrl',['audio', '$scope', function(Audio, $scope){
	var ctx = new AudioContext();
	var loop = new Audio(ctx, "sound/beat1.wav");
	loop.load();
	loop.connect(ctx.destination);
	loop.play();

	$scope.togglePlay = function(){
		if(loop.playing){
			loop.stop();
		}
		else{
			loop.connect(ctx.destination);
			loop.play();
		}
	}
}])