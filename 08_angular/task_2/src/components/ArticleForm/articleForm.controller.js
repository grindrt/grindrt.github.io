articleFormController.$inject = ['$scope', '$state', 'articleStore', 'item', '$stateParams'];

export default function articleFormController($scope, $state, articleStore, item, $stateParams) {
    let self = this;

    self.$onChanges = function (changes) {
        self.isEdit = !!changes.id;
    }

    self.$onInit = function () {
        self.date = new Date();
        self.isEdit = !!item && !!item.id;

        $scope.article = item || {title: '', text: '', date: new Date()};
        $scope.pageTitle = self.isEdit ? 'Edit ' + item.title : 'Add article' ;
    }

    self.submit = function (article) {
        if(self.artForm.$valid){ 
            if (self.isEdit) {
                articleStore.updateArticle(article);
            }
            else {
                articleStore.addArticle(article);
            }
        
            $state.go('articles');}
    }
}