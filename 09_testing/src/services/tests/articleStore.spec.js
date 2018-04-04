// import articleStore from '../articleStore';

describe('articleStore', () => {
    let ArticleStore;

    let articlesList;

    beforeEach(angular.mock.module('blogApp'));

    beforeEach(inject(function (_$articleStore_) {
        ArticleStore = _$articleStore_;

        articlesList = [
            { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
            { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
            { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
            { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
        ];
    }));

    it('should be defined', function () {
        expect(ArticleStore).toBeDefined();
    });

    describe('.getArticleIndex', () => {
        it('should be defined', function(){
            expect(ArticleStore.getArticleIndex).toBeDefined();
        });

        it('.getArticleIndex should return 2 for record with id = 2', function () {
            expect(ArticleStore.getArticleIndex(articlesList[1].id)).toEqual(2);
        });
    });

    describe('.getArticles', () => {
        it('should be defined', function(){
            expect(ArticleStore.getArticles).toBeDefined();
        });

        it('.getArticles should a hard-corded list of articles', function () {
            expect(ArticleStore.getArticles()).toEqual(articlesList);
        });
    });

    describe('.addArticle', () => {
        it('should be defined', function(){
            expect(ArticleStore.addArticle).toBeDefined();
        });

        it('.addArticle should add new article', function () {
            let newArticle = { id: 5, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" };
            ArticleStore.addArticle(newArticle);

            expect(articlesList.length).toEqual(5);
        });
    });

    describe('.deleteArticle', () => {
        it('should be defined', function(){
            expect(ArticleStore.deleteArticle).toBeDefined();
        });

        it('.deleteArticle should delete article by id', function () {
            ArticleStore.deleteArticle(1);

            expect(articlesList.length).expect(3);
        });
    });

    describe('.updateArticle', () => {
        it('should be defined', function(){
            expect(ArticleStore.updateArticle).toBeDefined();
        });

        it('.updateArticle should update an existing article', function () {
            let article = articlesList[0];
            let title = "Test title";
            article.title = title;

            ArticleStore.updateArticle(article);

            expect(articlesList[0].title).toEqual(title);
        });
    });
});