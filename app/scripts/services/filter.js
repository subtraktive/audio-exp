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

        VCF.prototype.setFreq = function(val) {
            this.filter.frequency.value = val;
        }

        VCF.prototype.setQ = function(val) {
            this.filter.Q.value = val;
            console.log("the q is", val);
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