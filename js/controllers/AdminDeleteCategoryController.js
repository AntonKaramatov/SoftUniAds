'use strict';

app.controller('AdminDeleteCategoryController',
    function ($scope, $rootScope, $location, adminService, notifyService) {
    	$rootScope.pageTitle = "Delete Category";
        $scope.cat = $rootScope.cat;
        delete($rootScope.cat);
    	$scope.delete = function (id){
    		adminService.deleteCategory(id,
    			function success(){
    				notifyService.showInfo("Category deleted successfully");
    				$location.path("/admin/categories/list");
    			},
    			function error(err){
    				notifyService.showError("Failed to delete category", err);
    			}
    		);
    	}
	}
);
