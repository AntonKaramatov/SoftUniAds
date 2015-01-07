'use strict';

app.controller('LeftSidebarController',
    function ($scope, $rootScope) {    	
		$scope.statusClicked = function(clickedStatus){
			$scope.selectedStatus = clickedStatus;
			console.log($scope.selectedStatus);
			$rootScope.$broadcast("statusSelectionChanged", clickedStatus);
		}
    }
);