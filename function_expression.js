var factorial= function funfact(n)
{
    var res=1;
    while(n>0)
    {
        res*=n;
        n--;
    }
    return res;
};
console.log(factorial);// would print the function
console.log(factorial(5)); // would print 120
