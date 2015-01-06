var adsApp = angular.module("adsApp", [
	"ngRoute",
	"ngResource"
]);

adsApp.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
		when("/", {
			templateUrl: "partials/guest/home.html",
			controller: "adsController"
		}).
		when("/login", {
			templateUrl: "partials/guest/login.html",
			controller: "homeController"
		}).
		when("/register", {
			templateUrl: "partials/guest/register.html",
			controller: "homeController"
		}).
		otherwise({
			redirectTo: "/"
		});
	}
]);