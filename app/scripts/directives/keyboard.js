'use strict';

audioExp.directive('keyboard', [ 'synth', 'animateKeys', 'changeBg', function (synth, animateNotes, changeBg){

	return{

		restrict: 'A',

		link: function(scope, elm, attr){

			var keys = $(elm).find('.key');

			$(keys).each(function(){

				$(this).on('mousedown', function(event){
					event.stopPropagation();
					var note = this.dataset.note + 5; //parseInt(8*Math.random());
					synth.noteOn(note);
					animateNotes(note, event.target);
					changeBg.changeColor();
					//colorKeys(event.target);
				});

				$(this).on('mouseup', function(event){
					event.stopPropagation();
					var note = this.dataset.note + 5; // parseInt(8*Math.random());
					synth.noteOff();
				});

				$(this).on('mousemove', function(event){
					event.stopPropagation();
					var element = document.elementFromPoint(event.x, event.y);

					if(element.dataset.note){
						var note = element.dataset.note + parseInt(8*Math.random());
						synth.noteSlide(note);
					}
				});
			})
		}
	}
}])