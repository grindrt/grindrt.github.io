export default function articleRouting($stateProvider){
    $stateProvider.
        state('articleList', {
            url:'/articles',
            component: 'articleListComponent'
        });
}