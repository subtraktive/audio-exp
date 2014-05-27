'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', 'bufferLoader', 'audio', function ($scope, Synth, BufferLoader, audio) {

	//var context = new webkitAudioContext();
  
  //var synth1 = $scope.synth = new Synth(context);
  	
  //$scope.synth.oscillator.type = 2;

   try {
        // More info at http://caniuse.com/#feat=audio-api
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audio.context = new webkitAudioContext();
        var synth1 = $scope.synth = new Synth(audio.context);
    } catch(e) {
        audio.proceed = false;
        alert('Web Audio API not supported in this browser.');
    }
 
    if (audio.proceed) {
        //---------------
        // Compatibility
        //---------------
        (function() {
            var start = 'start',
                stop = 'stop',
                buffer = audio.context.createBufferSource();
 
            if (typeof buffer.start !== 'function') {
                start = 'noteOn';
            }
            audio.compatibility.start = start;
 
            if (typeof buffer.stop !== 'function') {
                stop = 'noteOff';
            }
            audio.compatibility.stop = stop;
        })();
 
        //-------------------------------
        // Setup Audio Files and Buttons
        //-------------------------------
        for (var a in audio.files) {
            (function() {
                var i = parseInt(a) + 1;
                var req = new XMLHttpRequest();
                req.open('GET', audio.files[i - 1], true); // array starts with 0 hence the -1
                req.responseType = 'arraybuffer';
                req.onload = function() {
                    audio.context.decodeAudioData(
                        req.response,
                        function(buffer) {
                            audio.buffer[i] = buffer;
                            audio.source_loop[i] = {};
                            var button = document.getElementById('button-loop-' + i);
                            button.addEventListener('click', function(e) {
                                e.preventDefault();
                                audio.play(this.value);
                            });
                        },
                        function() {
                            console.log('Error decoding audio "' + audio.files[i - 1] + '".');
                        }
                    );
                };
                req.send();
            })();
        }
    }
 

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
