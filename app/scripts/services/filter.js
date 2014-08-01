'use strict';

audioExp.factory('VCF', [

    function() {

        //Voltage Controlled Filter
        function VCF(ctx) {
            this.filter = ctx.createBiquadFilter();
            this.filter.type = "lowpass";
            this.filter.frequency.value = 3000;
            this.filter.cTime = ctx.currentTime;
        }

        VCF.prototype.setFreq = function(val, time) {
            this.freq = val;
            this.filter.frequency.value = val;
            //this.filter.setFreq( val, time);
        }

        VCF.prototype.setQ = function(val, time) {
            this.filter.Q.value = val;
        }

        VCF.prototype.setType = function(type) {
            this.filter.type = type;
        }

        VCF.prototype.connect = function(node) {
            this.filter.connect(node);
        }

        return VCF;


    }
])