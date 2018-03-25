articleFormRouting.$inject = ['$stateProvider'];

export default function articleFormRouting($stateProvider){
    $stateProvider.
        state('article', {
            url:'/article',
            controller: 'articleFormController as articleCtrl',
            template: require('./articleForm.template.html') //'src/templates/articles.html'
        });
}