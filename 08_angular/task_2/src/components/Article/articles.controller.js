articlesController.$inject = ['$scope'];

export default function articlesController($scope){
    let vm = this;
    let articles = [
        {
            title: "First",
            date: "1/1/2001"
        },
        {
            title: "Second",
            date: "1/2/2001"
        },
        {
            title: "Third",
            date: "1/3/2001"
        },
        {
            title: "Fourth",
            date: "1/4/2001"
        },
        {
            title: "Fifth",
            date: "1/5/2001"
        }
    ];

    vm.amount = articles.length;
    vm.articles = articles;
}