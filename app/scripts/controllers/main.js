'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', 'bufferLoader', 'audio', 'keypadService', 'as',
    function($scope, Synth, BufferLoader, audio, keyService, as) {

        //var ctx = new AudioContext();
        var synth = $scope.synth = new Synth(as.context());
        $scope.filter = {};

        // $scope.playNote = function(note) {
        //     var synth1 = $scope.synth = new Synth(ctx)
        //     synth1.noteOn(note)
        // }

        // $scope.stopNote = function() {
        //     syth1.noteOff();
        // }

        // $scope.slideNote = function(note) {
        //     synth1.noteSlide(note);
        // }

        var active_osc = {};
        var colorKeys = function(elm) {
            var val1 = parseInt(255 * Math.random()),
                val2 = parseInt(255 * Math.random()),
                val3 = parseInt(255 * Math.random()),
                val4 = 1 * Math.random();
            elm.setAttribute("style", "background-color:rgba(" + val1 + "," + val2 + "," + val3 + ", 1);color:rgba(" + val1 + "," + val2 + "," + val3 + ", 1)");
            window.setTimeout(function() {
                elm.removeAttribute("style");
            }, 300)
        }

        var keyPressed = {};

        $scope.changeOsc = function(val) {
            console.log("the active osc", active_osc);
        }

        // function update(syn) {
        //     var bars = 30;

        // var data = new Uint8Array(syn.analyser.frequencyBinCount);
        //     syn.analyser.getByteFrequencyData(data);
        //     for (var i = 0; i < data.length; i++) {
        //         console.log("the data is", data[i]);
        //     }
        //     console.log("the data is", data);
        // }

        $(document).keydown(function(e) {
            if (!keyPressed[e.keyCode]) {
                keyPressed[e.keyCode] = true;
                //synth.noteOn()
                //$scope.filter.vcf = syn.vcf;
                //update(syn);
                keyService.keydown(e, synth);
                //active_osc[e.keyCode] = syn;
            }
        });

        $(document).keyup(function(e) {
            keyPressed[e.keyCode] = false;
            //active_osc[e.keyCode].noteOff();
            keyService.keyup(e, synth);
            delete active_osc[e.keyCode];
        });



    }
]);