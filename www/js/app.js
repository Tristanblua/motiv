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
 .state('home', {
   url: '/home',
   templateUrl: 'templates/home.html',
 })
 .state('profil', {
   url: '/profil',
   templateUrl: 'templates/profil.html',
   controller: 'ProfilCtrl'
 })
 .state('register', {
   url: '/register',
   templateUrl: 'templates/register.html',
   controller: 'UserCtrl'
 })
 .state('login', {
   url: '/login',
   templateUrl: 'templates/login.html',
   controller: 'AuthCtrl'
 })
 .state('challenge', {
   url: '/challenge',
   templateUrl: 'templates/challenge.html',
   controller: 'YourChallengeCtrl'
 })
 .state('pickchallenge', {
   url: '/pickchallenge',
   templateUrl: 'templates/pickchallenge.html',
   controller: 'PickChallengeCtrl'
 })
 .state('numberchallenge', {
   url: '/numberchallenge',
   templateUrl: 'templates/numberchallenge.html',
   controller: 'PickNumberCtrl'
 })
 .state('createchallenge', {
   url: '/createchallenge',
   templateUrl: 'templates/createchallenge.html',
   controller: 'CreateChallengeCtrl'
 });
 // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/home');
});