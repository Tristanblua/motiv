angular.module('starter.controllers', [])

// .controller("UserCtrl", function($scope, Users) {
//   $scope.users = Users;
//   $scope.addUser = function() {
//     var email = document.getElementsByName("email")[0].value;
//     var password = document.getElementsByName("password")[0].value;
//     console.log(email);
//     console.log(password);
//       $scope.users.$add({
//         "email": email,
//         "password":password
//       });
//   };
// })

// .factory("Users", function($firebaseArray) {
//   var usersRef = new Firebase("https://motiv.firebaseio.com/users");
//   return $firebaseArray(usersRef);
// })


.controller("UserCtrl", function($scope) {
	var ref = new Firebase("https://motiv.firebaseio.com");
	$scope.addUser = function () {
		var email = document.getElementsByName("email")[0].value;
	    var password = document.getElementsByName("password")[0].value;
	    var name = document.getElementsByName("name")[0].value;
	    var surname = document.getElementsByName("surname")[0].value;
		ref.createUser({
		  email    : email,
		  password : password,
		  name     : name,
		  surname  : surname
		}, function(error, authData) {
		  if (error) {
		    console.log("Error creating user:", error);
		  } else {
		    console.log("Successfully created user account with uid:", authData.uid);
		    console.log("____");
		    if (authData) {
         	  ref.child("users").child(authData.uid).set({
		        uid: authData.uid,
		        name: name,
		        surname: surname
		      });
      		}
		  }
		});
    };
})

.controller("AuthCtrl", function($scope) {
	var ref = new Firebase("https://motiv.firebaseio.com");

	$scope.authUser = function() {
		var email = document.getElementsByName("email")[0].value;
	    var password = document.getElementsByName("password")[0].value;
		ref.authWithPassword({
		  email    : email,
		  password : password
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	};
})

.controller("CheckAuth", function($scope) {
	var ref = new Firebase("https://motiv.firebaseio.com");
	var authData = ref.getAuth();
	if (authData) {
	  console.log("Authenticated user with uid:", authData.uid);
	}
})








