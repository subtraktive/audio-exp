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

