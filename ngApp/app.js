/**
 * Created by luca on 23/09/14.
 */

angular.module('ngStoreApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl : './views/index.html',
    controller : 'IndexCtrl'
  });
});