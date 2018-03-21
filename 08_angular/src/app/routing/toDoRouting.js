import angular from 'angular';

angular.module('todo')
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('add', {
            url: '/aadd',
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
    }]);