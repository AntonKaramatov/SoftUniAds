var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 4);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/my-ads.html',
        controller: 'UserMyAdsController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/delete-ad.html',
        controller: 'UserDeleteAdController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'UserEditProfileController'
    });

    $routeProvider.when('/admin/home', {
        templateUrl: 'templates/admin/home.html',
        controller: 'AdminHomeController'
    });

    $routeProvider.when('/admin/ads/edit/:id', {
        templateUrl: 'templates/admin/edit-ad.html',
        controller: 'AdminEditAdController'
    });

    $routeProvider.when('/admin/ads/delete/:id', {
        templateUrl: 'templates/admin/delete-ad.html',
        controller: 'AdminDeleteAdController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function(event){
        if($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()){
            $location.path("/");
        }

        if($location.path().indexOf("/admin") != -1 && !authService.isAdmin()){
            $location.path("/");
        }

        if($location.path() === "/" && authService.isAdmin()){
            $location.path("/admin/home");
        }

        if($location.path() === "/user/ads" || $location.path() === "/admin/home") {
            $rootScope.showAdsMenu = true;
        }
        else {
            $rootScope.showAdsMenu = false;
        }

        if($location.path() === "/" || $location.path() === "/admin/home") {
            $rootScope.showFilters = true;
        }
        else {
            $rootScope.showFilters = false;
        }
    })
})
