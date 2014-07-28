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
    }
])