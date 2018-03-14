'use strict';

/**
 * @ngdoc overview
 * @name projetWebDesignApp
 * @description
 * # projetWebDesignApp
 *
 * Main module of the application.
 */
angular
  .module('projetWebDesignApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'isoCountryFilter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cities', {
        templateUrl: 'views/cities.html',
        controller: 'CitiesCtrl',
        controllerAs: 'cities'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://public.opendatasoft.com/**',
  ]);
}]);
