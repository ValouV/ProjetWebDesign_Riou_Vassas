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

    var url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&sort=population&facet=country';

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
                'base': 1.75,
                'stops': [[1, 20], [10, 180]]
            },
            'circle-color': '#fbb03b'
          }
      };
      //then for each point in json
      angular.forEach(data.data.records, function(value, key){
        //creating a point
        geoPoints.source.data = value.geometry;
        geoPoints.id = value.recordid,
        map.addLayer(
            geoPoints
        );
      });

    });
    });

  });
