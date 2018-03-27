articleFormController.$inject = ['$scope', '$state', 'articleStore', 'item', '$stateParams'];

export default function articleFormController($scope, $state, articleStore, item, $stateParams) {
    let self = this;
    self.isAdd = true;

    self.$onChanges = function (changes) {
        self.isAdd = !!changes.id;
    }

    self.$onInit = function () {
        self.title = '';
        self.text = '';
        self.date = new Date()
    }

    self.submit = function (article) {
        if (self.isAdd)
            articleStore.addArticle(article)
        else
            articleStore.updateArticle(article);

        $state.go('home');
    }
}