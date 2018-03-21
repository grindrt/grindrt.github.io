// import angular from 'angular';

editController.$inject = ['$scope', '$state', 'todoListService', 'todo'];

// angular.module('todo')
//     .controller('editController', ['$scope', '$state', 'todoListService', 'todo', ($scope, $state, todoListService, todo) => {

let editController = ($scope, $state, todoListService, todo) => {
        $scope.editItem = (todoItem) => {
            todoListService.editItem(todoItem);
            $state.go('home');
        }
    // }]);
}