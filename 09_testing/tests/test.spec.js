// describe('Article Store', function () {
//     let suite;

//     //  beforeEach(module(blogApp));

//     beforeEach(angular.mock.module('blogApp'));
//     beforeEach(angular.mock.module('ui.router'));

//     // beforeEach(function () {
//     //     suite = {};

//     //     let mockData = [
//     //         { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
//     //         { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
//     //         { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
//     //         { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
//     //     ];

//     //     // articleStore.mockData = mockData;

//     //     suite = articleStore(mockData);
//     //     // suite.mockData = mockData;

//     //     // suite.mockData = mockData;
//     //     // suite.articlesList = mockData;
//     // });    
    
//     // beforeEach(angular.mock.inject(function ($injector) {
//     //     // var suite = {};

//     //     // mockData = [
//     //     //     { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
//     //     //     { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
//     //     //     { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
//     //     //     { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
//     //     // ];

//     //     // suite.mockData = mockData;
//     //     // suite.articlesList = mockData;
//     // }));

//     // afterEach(function(){
//     //     suite = null;
//     // });

//     // it('addArticle adding new item', function (done) {
//     //     var newArticle = { id: 1 };
//     //     var addedArticle = suite.addArticle(newArticle);

//     //     expect(addedArticle).toEqual(newArticle);
//     // });

//     beforeEach(angular.mock.inject(function(articleStore){
//         suite = articleStore();
//     }));

//     it('should exists', function(){
//         expect(suite).toBeDefined();
//     });

//     it('getArticles returns 4 records', function(){
//         // var data = suite.getArticles();

//         // let data = suite.getArticles();
//         expect(4).toEqual(4);
//     });
// });

describe('articleListComponentController', function(){
    var $controller, articleListComponentController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('articleListComponent'));

    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
        articleListComponentController = $controller('articleListComponentController', {});
    }));

    it('should be defined', function(){
        expect(articleListComponentController).toBeDefined();
    });
});

// describe('ArticleList component', function () {
//     let suite;

//     beforeEach(module(blogApp));

//     beforeAll(angular.mock.inject(($articleListComponentController, $rootScope)=>{
//         suite.$articleListComponentController = $articleListComponentController;
//         suite.bindings = { edit: ()=>{} };

//         spyOn(suite.bindings,'edit' );
//     }));

//     beforeEach(angular.mock.inject(($rootScope, $controller) => {
//         let articles, articleStore;

//         articles = [
//             { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
//             { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
//             { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
//             { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
//         ];

//         articleStore={
//             getArticles: ()=>articles,
//             addArticle: (article) => {articles.push(article); return articles;},
//             deleteArticle: (id)=>true,
//             updateArticle: (article)=>article
//         };

//         suite = {};
//         suite.$scope = $rootScope.$new();
//         suite.articleListComponentController = $controller('articleListComponentController', {
//             articleStore: articleStore,
//             $scope: suite.$scope
//         });
//         suite.$scope.$apply();
//     }));

//     it('addArticle going well', function (done) {
//         let ctrl = suite.$articleListComponentController('')
//     });
// });

/// isparta-loader