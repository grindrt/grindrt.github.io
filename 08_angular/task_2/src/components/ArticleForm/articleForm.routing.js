articleFormRouting.$inject = ['$stateProvider'];

export default function articleFormRouting($stateProvider) {
    $stateProvider
        .state('article', {
            url: '/article/add',
            controller: 'articleFormController as articleCtrl',
            template: require('./articleForm.template.html'),
            resolve: {
                item: function() { return {} }
            }
        })
        .state('articleEdit', {
            url: '/article/:id/edit',
            controller: 'articleFormController as articleCtrl',
            template: require('./articleForm.template.html'),
            params:{
                id: null
            },
            resolve: {
                item: function ($stateParams, articleStore) {
                    var params = $stateParams;
                    return articleStore.getArticles().find(function (x) {
                            var id = +params.id;
                            return x.id === id;
                        }
                    );
                }
            },
            onEnter($state, item) {
                if (!item) $state.go('home');
            }
        });
}