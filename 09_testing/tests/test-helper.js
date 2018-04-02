import 'angular-mocks';
import 'chai';
import 'sinon';
import 'mocha';

chai.use('sinon-chai');
chai.use('chai-as-promised');

beforeEach(()=> this.sinon = sinon.sandbox.create() );

afterEach(() => {
    this.sinon.restore();
    clearContext(this);
});

let clearContext = function(context){
    for (const prop in context) {
        if (context.hasOwnProperty(prop)) {
            delete context[prop];            
        }
    }
};

module.exports = {
    rootUrl: 'http://localhost:9000',
    expect: chai.expect
};
