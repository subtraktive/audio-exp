'use strict';

audioExp.factory('Envelope', function(){

	var Envelope = function(ctx, settings){
		this.ctx = ctx;
		this.attack = settings.attack;
		this.decay = settings.decay;
		this.sustain = settings.sustain;
		this.release = settings.release;
	}

	Envelope.prototype.connect = function(node){
		this.dest = node;
	}

	Envelope.prototype.trigger = function(){
		var now = this.ctx.currentTime;
		this.dest.cancelScheduledValues(now);
		this.dest.setValueAtTime(0, now);
		this.dest.linearRampToValueAtTime(1, now + this.attack);
		this.dest.linearRampToValueAtTime(this.sustain, now + this.attack + this.decay);
		this.dest.linearRampToValueAtTime(0, now + this.attack + this.decay + this.release);
	}

	return Envelope;
})