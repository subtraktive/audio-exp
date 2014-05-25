'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', 'bufferLoader', function ($scope, Synth, BufferLoader) {

	var context = new webkitAudioContext();
  	var synth1 = $scope.synth = new Synth(context);
	//synth = new Synth(audiocontext);
  	
  	$scope.synth.oscillator.type = 2;

    var bufferLoader = new BufferLoader(
        context,
        [
        "../sound/kick.wav"
        ],
        finishedLoading
    );

    bufferLoader.load();

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

  function finishedLoading(bufferList) {
    // Create two sources and play them both together.
    var source1 = context.createBufferSource();
    var source2 = context.createBufferSource();
    source1.buffer = bufferList[0];
    source2.buffer = bufferList[1];
    
    source1.connect(context.destination);
    source2.connect(context.destination);
    source1.noteOn(0);
    source2.noteOn(0);
}




  }]);
