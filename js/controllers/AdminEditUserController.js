'use strict';

app.controller('AdminEditUserController',
    function ($scope, $rootScope, $route, $location, adminService, townsService, notifyService) {
    	$rootScope.pageTitle = "Edit User";
		$scope.towns = townsService.getTowns();
		$scope.userData = $rootScope.user;
        delete($rootScope.user);

		$scope.edit = function(userData){
        	adminService.editUser(userData,
        		function success(){
        			notifyService.showInfo("User profile update successful");
                    $location.path("/admin/users/list");
        		},
        		function error(err) {
        			notifyService.showError("User profile update failed", err);
        		});
        };

        $scope.changePass = function (passwordData){
            passwordData.username = $scope.userData.username;
        	adminService.changeUserPassword(passwordData,
        		function success(){
        			notifyService.showInfo("Password changed successfully");
        			$scope.passwordData = {};
        		},
        		function error(err) {
        			notifyService.showError("Password change failed", err);
        		});
        }
	}
);
