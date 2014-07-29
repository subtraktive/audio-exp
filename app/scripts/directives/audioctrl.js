'use strict';

audioExp.directive('audioCtrl', [function (){
	
	return{
		restrict: 'A',

		link: function(scope, elm, attr){

			//initialize
			var synth = scope.synth;
			scope.freq = 0;
			scope.q = 0;
			//Attaching events to the sliders
			var keyboard = document.getElementById('keyboard'),
			keys = keyboard.querySelectorAll('.key'),
			waveType = document.getElementById('wavetype'),
			filterF = document.getElementById('cutoff-freq'),
			filterQ = document.getElementById('filter-q');
		}
	}
}])