'use strict';

audioExp.factory('keypadService', ['synth', 'animateKeys', 'changeBg', function (synth, animateNotes, changeBg){

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
	
	Keypad.prototype.keydown = function (event, synth){
		if(event.keyCode in this.keymap){
			var note = this.keymap[event.keyCode];
			var elm = document.querySelector('div[data-note="'+note+'"]');
			synth.noteOn(note+5);
			animateNotes(note, elm);
			changeBg.changeColor();
		}
	}


	return new Keypad();
}]);