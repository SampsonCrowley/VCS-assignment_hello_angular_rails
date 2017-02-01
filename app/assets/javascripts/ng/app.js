var basic = angular.module('basic',[
  'ui.router', 'restangular'
]).constant('_', window._);

basic.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

basic.config([
    'RestangularProvider',
    function(RestangularProvider){
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({
          "content-type": "application/json"
      });
    }
])

basic.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('index', {
        url:'/',
        template:'I got put here'
      })
      .state('messages',{
        url:'/messages',
        templateUrl: 'ng/views/messages/index.html',
        controller: 'MessagesCtrl'
      })
    }
])
