/**
 * Created by Pawan on 3/28/2017.
 */

var splitStrings = function (val) {

    return val.split(" ");

};

var getCharacterLength = function (val) {

    return val.length+1;
};

module.exports.splitStrings= splitStrings;
module.exports.getCharacterLength= getCharacterLength;