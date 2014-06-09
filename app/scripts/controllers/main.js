'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', 'bufferLoader', 'audio', 'keypadService', function ($scope, Synth, BufferLoader, audio, keyService) {

	var ctx = new AudioContext();
	var synth1 = $scope.synth = new Synth(ctx);
	$scope.filter = {};

	$scope.playNote = function(note){
		var synth1 = $scope.synth = new Synth(ctx)
		synth1.noteOn(note)
	}

	$scope.stopNote = function(){
		syth1.noteOff();
	}

	$scope.slideNote = function(note){
		synth1.noteSlide(note);
	}

  	var active_osc = {};
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

	var keyPressed = {};

	$(document).keydown(function(e){	
		if(!keyPressed[e.keyCode]){
			keyPressed[e.keyCode] = true;
			var syn =  new Synth(ctx);
			$scope.filter.vcf = syn.vcf;
		    keyService.keydown(e, syn);
		    active_osc[e.keyCode] = syn;
		}
	});

	$(document).keyup(function(e){
		keyPressed[e.keyCode] = false;
		active_osc[e.keyCode].noteOff();
	    delete active_osc[e.keyCode];
	});

}]);
