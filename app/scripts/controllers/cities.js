'use strict';

/**
 * @ngdoc function
 * @name projetWebDesignApp.controller:CitiesCtrl
 * @description
 * # CitiesCtrl
 * Controller of the projetWebDesignApp
 */
angular.module('projetWebDesignApp')
  .controller('CitiesCtrl', function ($scope, $http) {
    var url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&sort=population&facet=country';


    $http.jsonp(url).
      then(function(data) {
        $scope.list = data.data.records;
      });

  });
