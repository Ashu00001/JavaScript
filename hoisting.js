console.log(j);

hoistDemo();
function hoistDemo()
{
    console.log(i);
    var i=10;
}
hoistDemo(); 
var j=120;
//in this case the variable is defined after but still works concept called hoisting but would define
//the variable as undefined similarly in case of hoistDemo
//all the variables declaration are moved to top of the function but the value  hasn't been assigned

