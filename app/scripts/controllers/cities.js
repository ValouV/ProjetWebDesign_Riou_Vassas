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
//Variable to interact with the url of the API
      $scope.currentPage = 0;
      $scope.pageSize = 20;
      $scope.ordrecroissant=true;
//URL to obtain data from the API
    var url;


      $scope.$watch('currentPage + pageSize + ordrecroissant', function(){ //put value in the URL to have the right data
        if ($scope.ordrecroissant) {url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&rows='+$scope.pageSize+'&start='+$scope.currentPage+'&sort=population'};
        if (!$scope.ordrecroissant) {url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&rows='+$scope.pageSize+'&start='+$scope.currentPage+'&sort=-population'};  
            $http.jsonp(url). //get the data as a json file
      then(function(data) {
        $scope.list = data.data.records; //put the data in list
      });

      });

  }).filter('milions', function() {//allows with a custom filter to have 1M instead of 1 000 000 when population is higher than a million

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
