// import uirouter from 'angular-ui-router';

// import articleRouting from './articles.routing';
// import articlesController from './articles.controller';

// import articlePaginator from '../Paginator/paginator.directive.js';

// export default angular.module('article', [uirouter])
//     .config(articleRouting)
//     .controller('articlesController', articlesController)
//     // .directive('articlePaginator', articlePaginator)
//     .name;


import articleListComponentController from './articleList.controller';

let articleListComponent = {
        template: require('./articleList.template.html'), 
        controller: articleListComponentController,
        scope: {
        },
        bindToController:{
        	amount: '=',
        	articles: '=',
        	current: '=',
        	pageSize: '=',
        	numberOfPages: '='
        }
}

export default articleListComponent;