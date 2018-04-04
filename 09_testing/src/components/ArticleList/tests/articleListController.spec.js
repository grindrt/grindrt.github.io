// import articleListComponentController from '../articleList.controller';

describe('', ()=>{
    let $controller, articleListComponentController, articleStore;    

    let articlesList;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('blogApp'));

    beforeEach(inject(function(_$controller_, _articleStore_){     
        $controller = _$controller_;
        articleStore = _articleStore_;

        articlesList = [
            { id: 1, title: "FrameMaker", text: "transform out-of-the-box e-services", date: "08/08/2017" },
            { id: 2, title: "Area Rugs", text: "mesh turn-key platforms", date: "12/09/2017" },
            { id: 3, title: "Healthy Eating", text: "drive visionary communities", date: "11/19/2017" },
            { id: 4, title: "Jing", text: "synthesize dynamic networks", date: "04/24/2017" }
        ];
        
        spyOn(articleStore, 'getArticles').and.callFake(function(){
            return articlesList;
        });

        articleListComponentController = $controller('articleListComponentController', {});
    }));

    it('should be defined', ()=>{
        expect(articleListComponentController).toBeDefined();
    });

    it('should initialize with a call to articleStore.getArticles()', function(){
        expect(articleStore.getArticles).toHaveBeenCalled();
        expect(articleStore.articles).toEqual(articles);
    });
});