'use strict';

audioExp.factory('filter', [function(){

	function Filter(ctx){
		this.filter = ctx.createBiquadFilter();
		this.freq = 50;
		this.filter.type = 0;
		this.filter.frequency.value = 1000;
	}

	Filter.prototype.setFreq = function(val, time){
		this.freq = val;
		this.filter.frequency.value = val;
		this.filter.frequency.setValueAtTime( val, time);
	}

	Filter.prototype.setType = function(type){
		this.filter.type = type;
	}

	Filter.prototype.connect = function(node){
		this.connect(node);
	}

	return Filter;


}])