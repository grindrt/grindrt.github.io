// import angular from 'angular';

homeController.$inject = ['$scope', 'todoList'];

// angular.module('toDo')
//     .controller('homeController', ['$scope', 'todoList', ($scope, todoList)=>{

	let homeController = ($scope, todoList)=>{
        $scope.todoList = todoList;
    };

    export default homeController;