homeRouting.$inject = ['$stateProvider', '$urlRouteProvider'];

// angular.module('todo')
    // .config(['$stateProvider', ($stateProvider) => {

let homeRouting = ($stateProvider, $urlRouteProvider) => {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: '../templates/home.html',
            resolve: {
                todoList: (todoListService) => todoListService.getToDoList()
            }
        });

        $urlRouteProvider.otherwise('/')
    };

export default homeRouting;