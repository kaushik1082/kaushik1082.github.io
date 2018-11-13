
function calculate(expression)  //ex. expression is 2+5 or 9*6 or 10/5
{
    var num = expression;
    var numLength = num.length;

    for (var i = 0; i <= numLength; i++)
    {
        if (expression.substr(i,1) === '+' || expression.substr(i,1) === '-' || expression.substr(i,1) === '*' || expression.substr(i,1) === '^'|| expression.substr(i,1) === '/')
        {
            var operator = expression.substr(i,1);
            var firstNum = Number(expression.substr(0,i));
            var secondNum = Number(expression.substr(i+1, numLength-1));
        }
    }
    if (operator === '+')
    {
        return addNums(firstNum, secondNum)
    }
    else if (operator === '-')
    {
        return subNums(firstNum, secondNum)
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum)
    }
    else if (operator === '^')
    {
        return powNums(firstNum, secondNum)
    }
}
function backspace()
{
    var backspace = document.calculator.calcWindow.value.substr(0, document.calculator.calcWindow.value.length - 1);
    return backspace;
}
function addNums(p1, p2) //addNums expects 2 parameters... p1 and p2
{
    return p1 + p2;
}
function subNums(p1, p2) //addNums expects 2 parameters... p1 and p2
{
    return p1 - p2;
}
function multiplyNums(p1, p2) //addNums expects 2 parameters... p1 and p2
{
    return p1*p2;
}
function divideNums(p1, p2) //addNums expects 2 parameters... p1 and p2
{
    return p1/p2;
}
function powNums(p1,p2)
{
    return Math.pow(p1,p2)
}
