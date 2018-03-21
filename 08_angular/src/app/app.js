  // import 'bootstrap/dist/css/bootstrap.css';

 // import angular from 'angular';
 // import uirouter from 'angular-ui-router';

 // import './routing/homeRouting';
 // import './routing/toDoRouting';

 // import './controllers/homeController';
 // import './controllers/addController';
 // import './controllers/editController';

// angular.module('toDo', ['uirouter', 'ngResource'])
// 	.config(homeRouting)
// 	.config(toDoRouting)
// 	.controller(homeController, 'homeController')
// 	.controller(addController, 'addController')
// 	.controller(editController, 'editController');


let app = angular.module('toDoApp', ['ngResource']);

app.factory("todoFactory", function(){
    var taskList = ["New Delhi", "Mumbai", "Kolkata", "Chennai"];
    return {
        getTasks: function getTasks() {
             return taskList;
        },
        addTask: function addTask(text){
            taskList.push(text);
        },
        removeTask: function removeTask(text){
            taskList.splice(taskList.indexOf(text), 1)
    	}
    };
});

app.factory('dbService', ['$resource', function ($resource) {

		console.log('dbService');
		console.log($resource);

		var data = $resource('http://localhost:8888/todoList', {}, {
            'getToDoList':{
                method: 'GET',
                isArray: true
            }
        });

		console.log(data());

        return data; 
    }]);


app.controller('toDoController', ['$scope', 'todoFactory', 'dbService', function ($scope, todoFactory, dbService) {
    $scope.tasks = dbService.getToDoList(); 
    $scope.newTaskName = '';

    $scope.addTask = function () {
        todoFactory.addTask($scope.newTaskName)
        $scope.newTaskName = '';
    };

    $scope.removeTask = function (text) {
        todoFactory.removeTask(text);
    }
}]);