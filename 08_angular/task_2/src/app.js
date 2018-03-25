import uirouter from 'angular-ui-router';

import './services/serverService';

import routing from './routings/routing';
import article from './components/Article';
import articleForm from './components/ArticleForm';

let app = angular.module('blogApp', [
    uirouter, 
    article,
    articleForm
]);

// routing
app.config(routing);