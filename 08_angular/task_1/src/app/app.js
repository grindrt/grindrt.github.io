let app = angular.module('toDoApp', ['ngResource', 'ui.router']);

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
    $scope.searchField = "";
    $scope.searchText = "";

    dbService.getToDoList().$promise.then(function (tasks) {
        $scope.tasks = tasks;
        updateTodoLists($scope);
    });

    $scope.orderByDay = function (date1, date2) {
        return (new Date(date1.value).getTime() > new Date(date2.value).getTime() ? 1 : -1);
    };

    $scope.searchTodoItems = function (row) {
        if ($scope.searchField && $scope.searchText) {
            var propVal = row[$scope.searchField];
            return propVal
                ? $scope.searchField === 'text'
                    ? propVal.toUpperCase().indexOf($scope.searchText.toUpperCase()) == 0
                    : propVal.toUpperCase().indexOf($scope.searchText.toUpperCase()) > -1
                : false;
        }
        return true;
    };

    $scope.markDone = function () {
        updateTodoLists($scope);
    }

    function updateTodoLists($scope) {
        $scope.doneTasks = $scope.tasks.filter(function (x) { return x.isDone; });
        $scope.activeTasks = $scope.tasks.filter(function (x) { return !x.isDone; });
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

        var now = new Date();
        todoItem.dateCreation = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
        $scope.activeTasks.push(todoItem);
        $state.go('home');
    }
}]);

app.controller('editController', ['$scope', '$state', 'dbService', 'item', '$stateParams', function ($scope, $state, dbService, item, $stateParams) {
    $scope.itemCopy = Object.assign({}, item);
    $scope.state = $state.current
    $scope.params = $stateParams;

    $scope.editItem = (todoItem) => {
        // dbService.editItem(todoItem);
        if (todoItem) {
            var item = $scope.tasks.filter(function (x) {
                if (x.id === todoItem.id) {
                    x.text = todoItem.text;
                }
            });
        }

        $state.go('home');
    }
}]);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    //fix for 2f in the url
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'toDoController',
            templateUrl: 'src/app/templates/home.html'
        })
        .state('done', {
            url: '/done',
            controller: 'toDoController',
            templateUrl: 'src/app/templates/doneItems.html'
        })
        .state('add', {
            url: '/add',
            parent: 'home',
            controller: 'addController',
            templateUrl: 'src/app/templates/add.html'
        })
        .state('edit', {
            url: '/edit/:id',
            parent: 'home',
            controller: 'editController',
            templateUrl: 'src/app/templates/edit.html',
            resolve: {
                item: function ($stateParams, dbService) {
                    var params = $stateParams;
                    return dbService.getToDoList().$promise.then(function (todoList) {
                        var item = todoList.find(function (x) {
                            var id = +params.id;
                            return x.id === id;
                        });
                        return item;
                    })
                }
            },
            onEnter($state, item) {
                if (!item) $state.go('home');
            }
        });
}]);

app.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])