import config from '../../config/Url.json';
// let config = require('../../config/Url.js');

// angular.factory('dbService', ['$resource', function ($resource) {

dbService.$inject = ['$resource'];

export default function dbService($resource) {

    var data = $resource(config.API_HOST + '/todoList', {}, {
        'getToDoList': {
            method: 'GET',
            isArray: true
        }
    });
    return data;

};
// }]);