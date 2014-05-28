'use strict';

audioExp.directive('loopCtrl', ['audio', function(audio){
	return{
		restrict: 'A',
		link: function(scope, elm, attr){
			var val = parseInt(attr.value,10);
                elm.bind('click', function(e) {
                    e.preventDefault();
                    audio.play(val);
                });
		}
	}
}])