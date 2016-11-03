(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($locationProvider,$stateProvider, $urlRouterProvider) {
     $locationProvider.html5Mode(true);

    $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html"
      })
      .state('index.user', {
        url: "/user/:id",
        templateUrl: "app/components/common/minor.html"
      })
      .state('index.other', {
        url: "/other/:id",
        templateUrl: "app/components/common/other.html"
      });


    $urlRouterProvider.otherwise('/index/main');
  }

})();
