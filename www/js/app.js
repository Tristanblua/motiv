var starter = angular.module('starter', ['ionic', "firebase", "starter.controllers"]);

starter.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
   if(window.cordova && window.cordova.plugins.Keyboard) {
     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
     // for form inputs)
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

     // Don't remove this line unless you know what you are doing. It stops the viewport
     // from snapping when text inputs are focused. Ionic handles this internally for
     // a much nicer keyboard experience.
     cordova.plugins.Keyboard.disableScroll(true);
   }
   if(window.StatusBar) {
     StatusBar.styleDefault();
   }
 });
});


starter.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('app', {
   url: '/',
   templateUrl: 'templates/home.html',
 })
 .state('login', {
   url: '/login',
   templateUrl: 'templates/login.html',
   controller: 'UserCtrl'
 });
 // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/home');
});