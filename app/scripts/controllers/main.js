'use strict';

audioExp.controller('MainCtrl', ['$scope', 'synth', 'bufferLoader', 'audio', 'keypadService', 'as',
    function($scope, Synth, BufferLoader, audio, keyService, as) {

        //var ctx = new AudioContext();
        var synth = $scope.synth = new Synth(as.context());
        $scope.filter = {};

        synth.setType("sawtooth");

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

        $(document).keydown(function(e) {
            if (!keyPressed[e.keyCode]) {
                keyPressed[e.keyCode] = true;
                keyService.keydown(e, synth);
                //active_osc[e.keyCode] = syn;
            }
        });

        $(document).keyup(function(e) {
            keyPressed[e.keyCode] = false;
            keyService.keyup(e, synth);
            delete active_osc[e.keyCode];
        });



    }
]);