angular.module('starter.controllers', [])

.controller("UserCtrl", function($scope, Users) {
  $scope.users = Users;
  $scope.addUser = function() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    console.log(email);
    console.log(password);
      $scope.users.$add({
        "email": email,
        "password":password
      });
  };
})

.factory("Users", function($firebaseArray) {
  var usersRef = new Firebase("https://motiv.firebaseio.com/users");
  return $firebaseArray(usersRef);
});
