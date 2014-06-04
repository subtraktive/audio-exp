'use strict';

audioExp.factory('filter', [function(){

	function Filter(ctx){
		this.filter = ctx.createBiquadFilter();
		this.filter.type = 2;
		this.filter.frequency.value = 500;
		this.filter.cTime = ctx.currentTime;
	}

	Filter.prototype.setFreq = function(val, time){
		this.freq = val;
		this.filter.frequency.value = val;
		//this.filter.setFreq( val, time);
	}

	Filter.prototype.setQ = function(val, time){
		this.filter.Q.setValueAtTime(val, time);
	}

	Filter.prototype.setType = function(type){
		this.filter.type = type;
	}

	Filter.prototype.connect = function(node){
		this.filter.connect(node);
	}

	return Filter;


}])