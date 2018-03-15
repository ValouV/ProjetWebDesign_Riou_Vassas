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


      $scope.currentPage = 0;
      $scope.pageSize = 20;

    var url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&rows=10&start=&sort=population&facet=country';


      $scope.$watch('currentPage + pageSize', function(){
        url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&rows='+$scope.pageSize+'&start='+$scope.currentPage+'&sort=population&facet=country';
            $http.jsonp(url).
      then(function(data) {
        $scope.list = data.data.records;
      });

      });

  }).filter('milions', function() {

    return function(input) {
      if (input!==undefined){
        var nbr = Math.abs(input);
      if (nbr >= Math.pow(10, 6)) {
        input = (input / Math.pow(10, 6)).toFixed(1)+' M';
      }
    }
      return input;
    };

  });
