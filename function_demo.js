function foo()
{
    console.log("i am in foo");
}

var poo= function()
{
    console.log("i am in poo");
}
foo();
poo();

function insideMe(foo)
{
    console.log("inside me");
    foo();
}
insideMe(foo);
function anotherFun()
{
    console.log("inside another");
    return foo();
}
anotherFun();
//printMe(function(){console.log('inside test funtion')});
//printMe(()=>console.log('inside yet another function'));
//printMe();
var obj ={}