'use strict';

audioExp.directive('keyboard', [ 'synth', function (synth){

	return{

		restrict: 'A',

		link: function(scope, elm, attr){

			var animateNotes = function(note, elm){
				var noteNode = document.createElement('div');
				noteNode.classList.add('note');
				noteNode.innerHTML = note;
				if(!elm.contains(noteNode)){
					elm.appendChild(noteNode);
					// elm.classList.remove('color');
				}
				window.setTimeout(function(){
					elm.removeChild(noteNode);
				}, 2000)
			}

			var keys = $(elm).find('.key');

			$(keys).each(function(){

				$(this).on('mousedown', function(event){
					event.stopPropagation();
					var note = this.dataset.note + 5; //parseInt(8*Math.random());
					synth.noteOn(note);
					animateNotes(note, event.target);
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