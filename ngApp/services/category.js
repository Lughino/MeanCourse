angular.module('ngStoreApp').service('CategoryService', function($http, $q) {
  return {
    initDb : function() {
      var deferred = $q.defer();
      $http.get('/api/v1/initdb').then(
        function(result) {
          deferred.resolve();
        }
      ).catch(
        function(err) {
          deferred.reject(err);
        }
      );
      return deferred.promise;
    },
    getCategoryList : function() {
      var deferred = $q.defer();
      $http.get('/api/v1/categories').then(
        function(result) {
          var returnArray = [];
          for(var key in result.data) {
            returnArray.push({'id' : key, 'value' : result.data[key]});
          }
          deferred.resolve(returnArray);
        }
      ).catch(
        function(err) {
          deferred.reject(err);
        }
      );
      return deferred.promise;
    }
  }
});