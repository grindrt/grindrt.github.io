import uirouter from 'angular-ui-router';

import articleRouting from './articles.routing';
import articlesController from './articles.controller';

import articlePaginator from '../Paginator/paginator.directive.js';

export default angular.module('article', [uirouter])
    .config(articleRouting)
    .controller('articlesController', articlesController)
    .directive('articlePaginator', articlePaginator)
    .name;