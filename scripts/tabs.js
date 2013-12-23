app.controller('TabsController', function($scope) {});

app.controller('HomeTabController', function($scope){

  $scope.roundProgressData = {
    label: 11,
    percentage: 0.11
  };

  // Here I synchronize the value of label and percentage in order to have a nice demo
  $scope.$watch('roundProgressData', function (newValue, oldValue) {
    newValue.percentage = newValue.label / 100;
  }, true);
});