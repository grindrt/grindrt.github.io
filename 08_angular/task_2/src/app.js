import uirouter from 'angular-ui-router';
import ngresource from 'ng-resource';

import './services/serverService';
import articleStore from './services/articleStore';

import routing from './routings/routing';
import articleForm from './components/ArticleForm';

import articleListComponent from './components/ArticleList';
import paginationComponent from './components/ArticleList/Pagination';
import paginationFilter from './components/ArticleList/Pagination/pagination.filter';
// import dbService from './services/serverService';

angular.module('blogApp', [
	uirouter,
	ngresource,
	articleForm
])
	// .factory('dbService', dbService)
	.service('articleStore', articleStore)
	.component('articleListComponent', articleListComponent)
	.component('paginationComponent', paginationComponent)
	.config(routing)
	.filter('paginationFilter', paginationFilter);