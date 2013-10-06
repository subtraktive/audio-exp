'use strict';

var audioExp = angular.module('audioExpApp',[]);

audioExp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/synth', {
      templateUrl: 'views/synth.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

audioExp.run(['$window', 'keypadService', function (window, keypad){
  window.onkeydown = function(e){ keypad.keydown(e)};
  window.onkeyup = function(e){keypad.keyup(e)};
}])