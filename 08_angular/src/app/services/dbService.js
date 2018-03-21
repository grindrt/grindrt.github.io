import angular from 'angular';

angular.module('toDo')
    .factory('dbService', ['$resource', ($resource) => {
        return $resource('http://localhost:8888/todoList', {}, {
            'getToDoList':{
                method: 'GET',
                isArray: true
            }
        })
    }])