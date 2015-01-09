angular.module('ngStoreApp').controller('IndexCtrl',
  function($scope, CategoryService) {
    $scope.name = "Luca";
    
    $scope.currentCategory = {'value' : 'NESSUNA CATEGORIA'};
    $scope.$on('newcategory', function(event, category) {
      $scope.currentCategory = category;
    });
    
    $scope.initDb = function() {
      CategoryService.initDb().then(
        function() {
          alert('success');
        }
      ).catch(
        function(err) {
          console.log(err);
          alert(err.statusText);
        }
      );
    }
  }
);