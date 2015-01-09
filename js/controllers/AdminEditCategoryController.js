'use strict';

app.controller('AdminEditCategoryController',
    function ($scope, $rootScope, $location, adminService, notifyService) {
    	$rootScope.pageTitle = "Edit Category";
        $scope.cat = $rootScope.cat;
        delete($rootScope.cat);
    	$scope.edit = function (category){
            var cat = {"name": category.username}
    		adminService.createCategory(cat, category.id,
    			function success(){
    				notifyService.showInfo("Category edited successfully");
    				$location.path("/admin/categories/list");
    			},
    			function error(err){
    				notifyService.showError("Failed to edit category", err);
    			}
    		);
    	}
	}
);
