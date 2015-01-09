'use strict';

app.controller('UserEditProfileController',
    function ($scope, $rootScope, $location, userService, townsService, notifyService) {
    	$rootScope.pageTitle = "Home";
		$scope.towns = townsService.getTowns();
		$scope.getProfile = function() {
			userService.getProfile(
				function success(data){
					$scope.userData = data;
				},
				function error(err){
					notifyService.showError("Getting profile failed", err);
				}
			);	
		}

		$scope.edit = function(userData){
        	userService.editProfile(userData,
        		function success(){
        			notifyService.showInfo("Profile update successful");
        		},
        		function error(err) {
        			notifyService.showError("Profile update failed", err);
        		});
        };

        $scope.changePass = function (passwordData){
        	userService.changePassword(passwordData,
        		function success(){
        			notifyService.showInfo("Password changed successfully");
        			$scope.passwordData = {};
        		},
        		function error(err) {
        			notifyService.showError("Password change failed", err);
        		});
        }

        $scope.getProfile();
	}
);
