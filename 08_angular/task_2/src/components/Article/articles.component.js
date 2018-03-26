let articleComponent = {
    bindings:{
        articles: '=',    
        amount: '='
    },
        template: require('./article.template.html'),
        controller: 'articleComponentController as articlesCtrl'    
}

export default articleComponent;