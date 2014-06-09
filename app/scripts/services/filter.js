'use strict';

audioExp.factory('VCF', [function(){

	//Voltage Controlled Filter
	function VCF(ctx){
		this.filter = ctx.createBiquadFilter();
		this.filter.type = 0;
		this.filter.frequency.value = 300;
		this.filter.cTime = ctx.currentTime;
	}

	VCF.prototype.setFreq = function(val, time){
		this.freq = val;
		this.filter.frequency.value = val;
		//this.filter.setFreq( val, time);
	}

	VCF.prototype.setQ = function(val, time){
		this.filter.Q.setValueAtTime(val, time);
	}

	VCF.prototype.setType = function(type){
		this.filter.type = type;
	}

	VCF.prototype.connect = function(node){
		this.filter.connect(node);
	}

	return VCF;


}])