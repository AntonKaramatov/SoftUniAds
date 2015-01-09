'use strict';

app.controller('AdminDeleteUserController',
    function ($scope, $rootScope, $route, $location, adminService, notifyService) {
		$rootScope.pageTitle = "Delete User";
		$scope.userData = $rootScope.user;
        delete($rootScope.user);

		$scope.deleteUser = function(username){
			adminService.deleteUser(username,
				function success(){
					notifyService.showInfo("User deleted successfully");
					$location.path("/admin/users/list");
				},
				function error(err){
					notifyService.showError("Deleting user failed", err);
				}
			);
		}
	}
);