angular
  .module('app')
  .config(configApp)

configApp.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function configApp($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider

    .state('app', {
      templateUrl: 'app/modules/layout/layout.html',
      controller: 'layoutCtrl as vm'
    })
    
    .state('app.login', {
      url: '/login',
      templateUrl: 'app/modules/login/login.html',
      controller: 'loginCtrl as vm'
    })
    .state('app.details', {
      url: '/details',
      templateUrl: 'app/modules/search/search-details.html',
      controller: 'searchDetailsCtrl as vm'
    })
    .state('app.search', {
      url: '/search',
      templateUrl: 'app/modules/search/search.html',
      controller: 'searchCtrl as vm'
    });
  $urlRouterProvider.otherwise("/login");

}