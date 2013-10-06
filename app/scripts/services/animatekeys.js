'use strict';

audioExp.factory('animateKeys', function() {
	
	var AnimateNotes = function (note, elm){
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
	};

	return AnimateNotes;
})