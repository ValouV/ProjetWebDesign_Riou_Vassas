'use strict';

/**
 * @ngdoc function
 * @name projetWebDesignApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetWebDesignApp
 */
angular.module('projetWebDesignApp')
  .controller('AboutCtrl', function ($scope) {

      $scope.imagePath = 'images/angular.png';

  }).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });
