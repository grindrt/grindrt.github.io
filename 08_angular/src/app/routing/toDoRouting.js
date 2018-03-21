// import angular from 'angular';

toDoRouting.$inject = ['$stateProvider', '$urlRouteProvider'];

// angular.module('todo')
//     .config(['$stateProvider', ($stateProvider) => {
let toDoRouting = ($stateProvider, $urlRouteProvider) => {
        $stateProvider.state('add', {
            url: '/add',
            controller: 'addController',
            templateUrl: './templates/add.html'
        });
        $stateProvider.state('edit', {
            url: '/edit',
            controller: 'editController',
            templateUrl: '../templates/edit.html',
            resolve: {
                todo: ($stateParams, todoListService) => (
                    todoListService.getToDoList().then((todoList) => (
                        todoList.find(({ _id }) => _id === $stateParams.id)
                    ))
                )
            },
            onEnter($state, todo) {
                if (!todo) $state.go('home');
            }
        });
    };

export default toDoRouting;