
import angular from 'angular';

angular.module('todo')
    .controller('editController', ['$scope', '$state', 'todoListService', 'todo', ($scope, $state, todoListService, todo) => {
        $scope.editItem = (todoItem) => {
            todoListService.editItem(todoItem);
            $state.go('home');
        }
    }]);