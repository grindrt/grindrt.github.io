articleFormRouting.$inject = ['$stateProvider'];

export default function articleFormRouting($stateProvider) {
    $stateProvider
        .state('article', {
            url: '/article/add',
            controller: 'articleFormController',
            template: require('./articleForm.template.html') //'src/templates/articles.html'
        })
        .state('articleEdit', {
            url: '/article/:id/edit',
            controller: 'articleFormController',
            template: require('./articleForm.template.html'),
            resolve: {
                item: function ($stateParams, articleStore) {
                    var params = $stateParams;
                    return articleStore.getArticles().then(function (articles) {
                        var item = articles.find(function (x) {
                            var id = +params.id;
                            return x.id === id;
                        });
                        return item;
                    })
                }
            },
            onEnter($state, item) {
                if (!item) $state.go('home');
            }
        });
}