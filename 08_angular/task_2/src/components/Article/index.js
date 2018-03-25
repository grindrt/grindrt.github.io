import uirouter from 'angular-ui-router';

import articleRouting from './articles.routing';
import articlesController from './articles.controller';

export default angular.module('article', [uirouter])
    .config(articleRouting)
    .controller('articlesController', articlesController)
    .name;