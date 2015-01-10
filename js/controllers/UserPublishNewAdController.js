'use strict';

app.controller('UserPublishNewAdController',
    function ($scope, $rootScope, $location, userService, categoriesService, townsService, notifyService, authService) {
		$rootScope.pageTitle = "Publish New Add";
		$scope.towns = townsService.getTowns();
		$scope.categories = categoriesService.getCategories();
		$scope.adData = {
			imageDataUrl:null
		};

		$scope.publishAd = function(adData) {
			userService.createNewAd(adData, 
				function success() {
					notifyService.showInfo("Ad submited successfully. Once it is approved, it will be published");
					$location.path("user/ads")
				},
				function error(err){
					notifyService.showError("Submitting new advertisment failed", err);
				}
			);
		};

		$scope.fileSelected = function(fileInputField) {
		    delete $scope.adData.imageDataUrl;
		    var file = fileInputField.files[0];
		    $("#file-select-content").html($("#image").val());
		    if (file.type.match(/image\/.*/)) {
		        var reader = new FileReader();
		        reader.onload = function() {
		            $scope.adData.imageDataUrl = reader.result;
		            $(".image-box").html("<img src='" + reader.result + "'>");
		        };
		        reader.readAsDataURL(file);
		    } else {
		        $(".image-box").html("<p>File type not supported!</p>");
		    }
		};

    }
);