let blogApp = require('../src/app');

describe('articleStore', function () {
    let suite;

    beforeEach(module(blogApp));

    beforeEach(angular.mock.inject(($injector) => {
        suite = {};

        mockData = [
            { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
            { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
            { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
            { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
        ];

        suite.mockData = mockData;
        suite.articlesList = mockData;

    }));

    afterEach(() => suite = null);

    it('addArticle going well', function (done) {
        let newArticle = { id: 1 };
        let addedArticle = scope.addArticle(newArticle);

        expect(addedArticle).toEqual(newArticle);
    });
});

describe('ArticleList component', function () {
    let suite;

    beforeEach(module(blogApp));

    beforeAll(angular.mock.inject(($articleListComponentController, $rootScope)=>{
        suite.$articleListComponentController = $articleListComponentController;
        suite.bindings = { edit: ()=>{} };

        spyOn(suite.bindings,'edit' );
    }));

    beforeEach(angular.mock.inject(($rootScope, $controller) => {
        let articles, articleStore;

        articles = [
            { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
            { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
            { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
            { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
        ];

        articleStore={
            getArticles: ()=>articles,
            addArticle: (article) => {articles.push(article); return articles;},
            deleteArticle: (id)=>true,
            updateArticle: (article)=>article
        };

        suite = {};
        suite.$scope = $rootScope.$new();
        suite.articleListComponentController = $controller('articleListComponentController', {
            articleStore: articleStore,
            $scope: suite.$scope
        });
        suite.$scope.$apply();
    }));

    it('addArticle going well', function (done) {
        let ctrl = suite.$articleListComponentController('')
    });
});

/// isparta-loader