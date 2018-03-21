import angular from 'angular';

angular.module('toDo')
    .controller('homeController', ['$scope', 'todoList', ($scope, todoList)=>{
        $scope.todoList = todoList;
    }])