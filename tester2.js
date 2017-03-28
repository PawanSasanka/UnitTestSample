/**
 * Created by Pawan on 3/28/2017.
 */
var chai=require("chai");
 var should = chai.should();
var app= require('./Calculator.js');



describe('Summation of two numbers', function () {

    it(' should return number 3 ', function (done) {

        app.Sum(1,2).should.equal(3);
        done();

    });


});


describe('Substraction of two numbers', function () {

    it(' should return number 6 ', function (done) {

        app.Substraction(12,6).should.equal(6);
        done();

    });


});

describe('Multification of two numbers', function () {

    it(' should return number 8 ', function (done) {


        app.Multification(4,2).should.equal(8);
        done();

    });


});

describe('Division of two numbers', function () {

    it(' should return number 2 ', function (done) {

        app.Division(10,5).should.equal(2);
        done();

    });


});




