/**
 * Created by Pawan on 3/28/2017.
 */

var Sum = function (val1,val2)
{
    return(val1+val2);
};

var Substraction = function (val1,val2)
{
    return(val1-(-val2));
};
var Multification = function (val1,val2)
{
    return(val1*val2);
};
var Division  = function (val1,val2)
{
    return(val1/val2);
};




module.exports.Sum=Sum;
module.exports.Substraction=Substraction;
module.exports.Multification=Multification;
module.exports.Division=Division;
