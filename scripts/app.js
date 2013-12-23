var app = angular.module('app', ['ngRoute', 'ionic','angular.directives-round-progress']);

app.controller('AppCtrl', function ($scope) {


});

app.config(function ($routeProvider) {


  $routeProvider.
    when('/',
      {
        controller: 'HomeController',
        templateUrl: 'scripts/home.template.html'

      }
    ).
    when('/tabs',
      {
        controller: 'TabsController',
        templateUrl: 'scripts/tabs.template.html'

      }
    ).
    otherwise({redirectTo: '/'});
});


