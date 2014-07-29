'use strict';
//Audio Sculptor

audioExp.factory('as', [

    function() {

        var as = {};

        var checkSupport = function() {
            var context;

            if (typeof webkitAudioContext == 'undefined' || typeof AudioContext == "undefined") {
                alert("No web audio support")
            } else {
                if (typeof AudioContext == 'function') {
                    context = new AudioContext();
                } else {
                    context = new webkitAudioContext();
                }
                as.context = function() {
                    return context;
                }
            }
        }

        as.init = function() {
            checkSupport();
        }

        as.now = function() {
            return this.context().currentTime;
        };

        as.connect = function() {
            arguments[0].connect(arguments[1]);
        }

        as.init();

        return as;
    }
])