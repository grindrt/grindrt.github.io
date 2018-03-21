let app = angular.module('toDoApp', ['ngResource', 'ui.router']);

app.factory("todoFactory", function () {
    var taskList = ["New Delhi", "Mumbai", "Kolkata", "Chennai"];
    return {
        getTasks: function getTasks() {
            return taskList;
        },
        addTask: function addTask(text) {
            taskList.push(text);
        },
        removeTask: function removeTask(text) {
            taskList.splice(taskList.indexOf(text), 1)
        }
    };
});

app.factory('customValidationRule',() => ({
    validateField(input, isSubmitted) { 
        return (input.$dirty && input.$touched) || isSubmitted;
    }
}));

app.factory('dbService', ['$resource', function ($resource) {
    var data = $resource('http://localhost:8888/todoList', {}, {
        'getToDoList': {
            method: 'GET',
            isArray: true
        }
    });
    return data;
}]);

app.controller('toDoController', ['$scope', 'dbService', function ($scope, dbService) {
    dbService.getToDoList().$promise.then(function (tasks) {
        $scope.tasks = tasks;
        $scope.doneTasks = tasks.filter(function (x) { return x.isDone; });
        $scope.activeTasks = tasks.filter(function (x) { return !x.isDone; });

        $scope.time = tasks[0].dateCreation
    });

    $scope.orderByDay = function (date) {
        const dif = Date.now() - new Date(date.value);
        const days = Math.floor(dif / (1000 * 60 * 60 * 24));

        return days > 0;
    }
}]);

app.controller('addController', ['$scope', '$state', 'dbService', function ($scope, $state, dbService) {
    $scope.newItem = {
        "id": "",
        "text": "",
        "isDone": false,
        "dateCreation": ""
    };

    $scope.addItem = (todoItem) => {
        // dbService.addItem(todoItem);
        todoItem.dateCreation = Date.now();
        $scope.activeTasks.push(todoItem);
        $state.go('home');
    }
}]);

app.controller('editController', ['$scope', '$state', 'dbService', 'todo', function ($scope, $state, dbService, todo) {
    $scope.itemCopy = Object.assign({}, todo);

    $scope.editItem = (todoItem) => {
        // dbService.addItem(todoItem);

        var item = $scope.activeTasks.filter(function (x) { return x.id === todoItem.id });

        $state.go('home');
    }
}]);

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        controller: 'addController',
        templateUrl: 'src/app/templates/add.html'
    });
    $stateProvider.state('edit', {
        url: '/edit',
        controller: 'editController',
        templateUrl: 'src/app/templates/edit.html',
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

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});