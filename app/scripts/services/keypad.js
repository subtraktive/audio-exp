'use strict';

audioExp.factory('keypadService', ['synth', function (synth){

	var Keypad = function(){

		this.keymap = {
					65: 'C',
					87: 'C#',
					83: 'D',
					69: 'D#',
					68: 'E',
					72: 'F',
					85: 'F#',
					74: 'G',
					73: 'G#',
					75: 'A',
					79: 'A#',
					76: 'B'
				};

	};
	
	Keypad.prototype.keydown = function (event){
		if(event.keyCode in this.keymap){
			synth.noteOn(this.keymap[event.keyCode]+5);
		}
	}

	Keypad.prototype.keyup = function (){
		synth.noteOff();
	}

	return new Keypad();
}]);