// import angular from 'angular';

addController.$inject = ['$scope', '$state', 'todoListService'];

// angular.module('todo')
//     .controller('addController', ['$scope', '$state', 'todoListService', ($scope, $state, todoListService) => {

let addController = ($scope, $state, todoListService) => {
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
    }
    // }]);

