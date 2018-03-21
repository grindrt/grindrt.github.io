import angular from 'angular';

angular.module('toDo')
    .factory('todoListService', ['dbService', (dbService) => {
        
        let getToDoList = () => dbService.getToDoList();

        function addItem(todoItem){
            todo.dateCreation = new Date();

            dbService.postToDoItem(todo);
        }

        function editItem(todoItem){
            // edit functionality
        }

    }]);