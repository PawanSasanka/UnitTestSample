/**
 * Created by Pawan on 3/28/2017.
 */
var chai=require("chai");
var should = chai.should();
var expect = chai.expect;
var strHandler= require('./StringHandler.js');

describe('Spliting Strings with should ', function () {

    var stringArray=[];


    before(function(done) {
        stringArray=strHandler.splitStrings("Hello World");
        done();
    });


    it(' Array should be returned ', function (done) {

        stringArray.should.be.an.Array;

        describe('Array should contain 2 values ', function () {

            it(' Array should contain 2 values ', function (done) {

                stringArray.should.have.length(2);
                done();

            });
        });
        done();

    });

    it(' First element should be a string of length 5 ', function (done) {

        stringArray[0].should.have.length(5);
        done();

    });


});
describe('Checking string value ', function () {


    var charLength=0;

    before(function(done) {

        charLength=strHandler.getCharacterLength("Hello");
        done();
    });
    it(' Character length of "Hello" should be a number ', function (done) {

        //charLength.should.be.exactly(5).and.be.a.Number();
        expect(charLength).is.a('number');

        done();

    });

    it(' Character length of "Hello" should be 5 ', function (done) {

        //charLength.should.be.exactly(5).and.be.a.Number();
        charLength.should.to.equal(5);

        done();

    });






});
