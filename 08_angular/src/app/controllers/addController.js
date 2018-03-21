import angular from 'angular';

angular.module('todo')
    .controller('addController', ['$scope', '$state', 'todoListService', ($scope, $state, todoListService) => {
        $scope.newItem = {
            "id": "",
            "text": "",
            "isDone": false,
            "dateCreation": ""
        };

        $scope.addItem = (todoItem)=>{
            todoListService.addItem(todoItem);
            $state.go('home');
        }
    }]);