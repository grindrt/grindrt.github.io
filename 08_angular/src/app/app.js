  // import 'bootstrap/dist/css/bootstrap.css';

 import angular from 'angular';
 import uirouter from 'angular-ui-router';

 import './routing/homeRouting';
 import './routing/toDoRouting';

 import './controllers/homeController';
 import './controllers/addController';
 import './controllers/editController';

angular.module('toDo', ['uirouter', 'ngResource'])
	.config(homeRouting)
	.config(toDoRouting)
	.controller(homeController, 'homeController')
	.controller(addController, 'addController')
	.controller(editController, 'editController');