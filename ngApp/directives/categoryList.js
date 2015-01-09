angular.module('ngStoreApp').directive('categoryList', function() {
  return {
    link : function(scope, element, attrs) {
      
    },
    scope : {},
    restrict : 'EA',
    templateUrl : './directives/categoryList.html',
    controller : function($scope, $rootScope, CategoryService) {
          $scope.categories = {};
          CategoryService.getCategoryList().then(
            function(result) {
               $scope.categories = result;
                $scope.currentCategory = $scope.categories[0];
              }
            ).catch(
              function(err) {
                  $scope.debug = err;
                }
              );
          $scope.currentCategory = {};
          $scope.changeCategory = function(category) {
              $rootScope.$broadcast('newcategory', category);
          }
      }
  }
});