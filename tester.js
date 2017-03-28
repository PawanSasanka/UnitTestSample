/**
 * Created by Pawan on 3/28/2017.
 */

var app= require('./Calculator.js');
var assert=require("assert");


describe('Summation of two numbers', function () {

    it(' should return number 3 ', function (done) {

        assert.equal(3,app.Sum(1,2));
        done();

    });


});

describe('Substraction of two numbers', function () {

    it(' should return number 6 ', function (done) {

        assert.equal(6,app.Substraction(12,6));
        done();

    });


});

describe('Multification of two numbers', function () {

    it(' should return number 8 ', function (done) {

        assert.equal(8,app.Multification(4,2));
        done();

    });


});

describe('Division of two numbers', function () {

    it(' should return number 2 ', function (done) {

        assert.equal(2,app.Division(10,5));
        done();

    });


});

