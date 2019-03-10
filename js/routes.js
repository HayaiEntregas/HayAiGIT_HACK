angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('hayaiEntregas', {
    url: '/page2',
    templateUrl: 'templates/hayaiEntregas.html',
    controller: 'hayaiEntregasCtrl'
  })

  .state('listaDeMotoboys', {
    url: '/page3',
    templateUrl: 'templates/listaDeMotoboys.html',
    controller: 'listaDeMotoboysCtrl'
  })

  .state('cleiton', {
    url: '/page4',
    templateUrl: 'templates/cleiton.html',
    controller: 'cleitonCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('hayaiDriver', {
    url: '/page5',
    templateUrl: 'templates/hayaiDriver.html',
    controller: 'hayaiDriverCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});