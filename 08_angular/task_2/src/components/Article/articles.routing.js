articleRouting.$inject = ['$stateProvider'];

export default function articleRouting($stateProvider){
    $stateProvider.
        state('articles', {
            url:'/articles',
            controller: 'articlesController as articlesCtrl',
            template: require('./article.template.html') //'src/templates/articles.html'
        });
}