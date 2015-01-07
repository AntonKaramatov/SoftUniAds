'use strict';

app.factory('adsService',
	function ($resource, baseServiceUrl) {
		var resource = $resource(baseServiceUrl + "/api/ads",
			null);
		function getAllAds(params, success, error){
			return resource.get(params, success, error);
		}
		return {
			getAds:getAllAds
		};
    }
);

app.factory('townsService',
	function ($resource, baseServiceUrl) {
		var resource = $resource(baseServiceUrl + "/api/towns");
		function getAllTowns(success, error) {
				return resource.query(success, error);
		}
		return {
			getTowns:getAllTowns
		};
    }
);

app.factory('categoriesService',
	function ($resource, baseServiceUrl) {
		var resource = $resource(baseServiceUrl + "/api/categories");
		function getAllCategories(success, error) {
			return resource.query(success, error);
		}
		return {
			getCategories:getAllCategories
		};
    }
);
