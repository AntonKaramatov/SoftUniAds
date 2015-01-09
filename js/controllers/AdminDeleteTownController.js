'use strict';

app.controller('AdminDeleteTownController',
    function ($scope, $rootScope, $location, adminService, notifyService) {
    	$rootScope.pageTitle = "Delete Town";
        $scope.town = $rootScope.town;
        delete($rootScope.town);
    	$scope.delete = function (id){
    		adminService.deleteTown(id,
    			function success(){
    				notifyService.showInfo("Town deleted successfully");
    				$location.path("/admin/towns/list");
    			},
    			function error(err){
    				notifyService.showError("Failed to delete town", err);
    			}
    		);
    	}
	}
);
