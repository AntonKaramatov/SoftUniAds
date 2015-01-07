'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
		$scope.towns = townsService.getTowns();
		$scope.categories = categoriesService.getCategories();
		$scope.categoryClicked = function(clickedCategoryId){
			$scope.selectedCategoryId = clickedCategoryId;
			$rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
		}
		$scope.townClicked = function(clickedTownId){
			$scope.selectedTownId = clickedTownId;
			$rootScope.$broadcast("townSelectionChanged", clickedTownId);
		}
    }
);
