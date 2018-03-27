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