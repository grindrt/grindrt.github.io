articleListComponentController.$inject = ['$scope', 'articleStore'];

export default function articleListComponentController($scope, articleStore) {
    let self = this;
    self.amount = 0;
    self.articles = [];

    self.$onInit = activate();

    self.addArticle = (article) => articleStore.addArticle(article);

    self.deleteArticle = (article) => articleStore.deleteArticle(id);

    self.updateArticle = (article) => articleStore.updateArticle(article);

    self.edit = (id) => 

    function activate() {
        let articles = articleStore.getArticles() || [];

        self.amount = articles.length;
        self.articles = articles;
        $scope.current = 0;
        $scope.pageSize = 10;
    }
}