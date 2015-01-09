'use strict';

// The RegisterController is responsible for the "User Registration" screen
app.controller('RegisterController',
    function ($scope, $rootScope, $location, townsService, authService, notifyService) {
        $rootScope.pageTitle = "Register";
        $scope.towns = townsService.getTowns();
        $scope.register = function(userData){
        	authService.register(userData,
        		function success(){
        			notifyService.showInfo("Registration successful. You are now logged in.");
        			$location.path("/");
        		},
        		function error(err) {
        			notifyService.showError("Registration failed", err);
        		})
        }
    }
);
