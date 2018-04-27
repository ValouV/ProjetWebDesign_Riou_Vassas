'use strict';

/**
* @ngdoc function
* @name projetWebDesignApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the projetWebDesignApp
*/
angular.module('projetWebDesignApp')
.controller('MainCtrl', function ($http) {

  //url for finding 100 cities with the most population
  var url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&sort=population&rows=100';

  //create map
  mapboxgl.accessToken = 'pk.eyJ1IjoidmFsb3V2IiwiYSI6ImNqZXNhaGV5aTVkeTkycXBlMGV3bGNycXYifQ.F57k7NEQSKGD3Gc_rAunCQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9'
  });

  //when map load
  map.on('load', function() {
    //get json from url
    $http.jsonp(url).then(function(data) {
      //point layout creation
      var geoPoints = {
        'type': 'circle',
        'source': {
          'type': 'geojson',
          'data': {}
        },
        'paint': {
          'circle-radius': {
            'base': {},
            'stops': {}
          },
          'circle-color': '#fbb03b'
        }
      };
      //then for each point in json
      angular.forEach(data.data.records, function(value){
        //creating a point
        geoPoints.source.data = value.geometry;
        geoPoints.id = value.recordid;
        console.log(value.fields.population/1000000);
        geoPoints.paint['circle-radius'].base = ((value.fields.population)/1000000);
        geoPoints.paint['circle-radius'].stops =[[1, (value.fields.population)/1000000], [12, (value.fields.population)/1000000*10]];

        //finally add all the points
        map.addLayer(
          geoPoints
        );
      });

    });
  });

});
