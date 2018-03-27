import uirouter from 'angular-ui-router';

import './services/serverService';
import articleStore from './services/articleStore';

import routing from './routings/routing';
import articleForm from './components/ArticleForm';

import articleListComponent from './components/ArticleList';

angular.module('blogApp', [
    uirouter, 
    articleForm
])
	.service('articleStore', articleStore)
	.component('articleListComponent', articleListComponent)
	.config(routing)
	.filter('pagination', ()=>( (input, start)=> ( input.slice(+start) ) ));