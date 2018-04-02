import 'angular';
import testHelper from './test-helper';
let expect = testHelper.expect;

describe('', function(){
    let scope, articleListComponentController;

    beforeEach(module('blogApp'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        articleListComponentController = $controller('articleListComponentController', {
            $scope: scope,
            articleStore: {
                addArticle: (article)=>(article),
                updateArticle: (article)=>(article),
                deleteArticle: (article)=>(true),
            }
        });
    }));

    it('addArticle going well', function(done){
        let newArticle = { id: 1};
        let addedArticle = scope.addArticle(newArticle);

        expect(addedArticle).toEqual(newArticle);
    });
});