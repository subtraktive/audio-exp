'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', function ($scope, Synth) {

	var context = new webkitAudioContext();
  	$scope.synth = new Synth(context);
	//synth = new Synth(audiocontext);
  	
  	$scope.synth.oscillator.type = 2;

	var colorKeys = function(elm){
		var val1 = parseInt(255*Math.random()),
		val2 = parseInt(255*Math.random()),
		val3 = parseInt(255*Math.random()),
		val4 = 1*Math.random();
		elm.setAttribute("style", "background-color:rgba("+val1+","+val2+","+val3+", 1);color:rgba("+val1+","+val2+","+val3+", 1)");
		window.setTimeout(function(){
			elm.removeAttribute("style");
		}, 300)
	}


  }]);
