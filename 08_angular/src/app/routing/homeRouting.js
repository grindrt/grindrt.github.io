import angular from 'angular';

angular.module('todo')
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: '../templates/home.html',
            resolve: {
                todoList: (todoListService) => todoListService.getToDoList()
            }
        })
    }]);