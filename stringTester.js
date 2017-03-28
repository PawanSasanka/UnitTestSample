/**
 * Created by Pawan on 3/28/2017.
 */

var chai=require("chai");
var should = chai.should();
var expect = chai.expect;
var strHandler= require('./StringHandler.js');

describe('Spliting Strings with should ', function () {

    it(' Array should be returned ', function (done) {

        strHandler.splitStrings("Hello World").should.be.an.Array;

        describe('Array should contain 2 values ', function () {

            it(' Array should contain 2 values ', function (done) {

                strHandler.splitStrings("Hello World").should.have.length(2);
                done();

            });
        });
        done();

    });

    it(' First element should be a string of length 5 ', function (done) {

        strHandler.splitStrings("Hello World")[0].should.have.length(5);
        done();

    });


});

describe('Check character length of a word ', function () {

    it(' Word "Hello" have 5 character ', function (done) {

        strHandler.getCharacterLength("Hello").should.to.equal(5);

        done();

    });




});
