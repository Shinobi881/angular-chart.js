(function () {
  'use strict';

var app = angular.module('StackedBarChart', ['chart.js', 'ui.bootstrap']);

  app.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#34D204', '#FBDE37', '#E10505'],
      responsive: true
    });
    
  });

 app.controller('StackedBarCtrl', function ($scope) {
    // $scope.labels = ['Bad', 'Not Good', 'Neutral', 'Mostly Good', 'Good'];
    $scope.labels = ['D3', 'Afterhours', 'Marcon', 'Blogs'];
    // $scope.series = ['Bad', 'Not Good', 'Neutral', 'Mostly Good', 'Good'];
    $scope.type = 'StackedBar';

    $scope.data = [
      [8, 3, 4],
      [5, 7, 3],
      [2, 5, 8]
    ];
  }); 

  
})();
