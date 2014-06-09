'use strict';

audioExp.factory('Envelope', function(){

	var Envelope = function(ctx, attack, decay, sustain, release){
		this.ctx = ctx;
		this.attack = attack;
		this.decay = decay;
		this.sustain = sustain;
		this.release = release;
	}

	Envelope.prototype.connect = function(node){
		this.dest = node;
	}

	Envelope.prototype.trigger = function(){
		var now = ctx.currentTime;
		this.dest.cancelScheduledValues(now);
		this.dest.setValueAtTime(0, now);
		this.dest.linearRampToValueAtTime(1, now + this.attack);
		this.dest.linearRampToValueAtTime(this.sustain, now + this.attach + this.decay);
		this.dest.linearRampToValueAtTime(0, now + this.attach + this.decay + this.release);
	}

	return Envelope;
})