var a="abc";
//scope of a is global can be accessed from anywhere;
function scopeDemo()
{
    var i = 1;
    console.log(i);// scope of i is within this function
}
scopeDemo();
console.log(a);//would print abc
