'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', 'bufferLoader', 'audio', function ($scope, Synth, BufferLoader, audio) {

  var synth1 = $scope.synth = new Synth(audio.context);
 
  $scope.playNote = function(note){
  	synth1.noteOn(note)
  }

  $scope.stopNote = function(){
  	syth1.noteOff();
  }

  $scope.slideNote = function(note){
  	synth1.noteSlide(note);
  }

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
