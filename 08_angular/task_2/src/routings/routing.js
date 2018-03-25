routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
}