function gradeCalculator()
{
    var num = Number(document.project3.input1.value);

    if (num >= 98)
    {
        return "A+";
    }
    else if (num >= 95)
    {
        return "A"
    }
    else if (num >= 92)
    {
        return "A-"
    }
    else if (num >= 88)
    {
        return "B+";
    }
    else if (num >= 85)
    {
        return "B";
    }
    else if (num >= 82)
    {
        return "B-"
    }
    else if (num >= 78)
    {
        return "C+";
    }
    else if (num >= 75)
    {
        return "C";
    }
    else if (num >= 72)
    {
        return "C-"
    }
    else if (num >= 68)
    {
        return "D+";
    }
    else if (num >= 65)
    {
        return "D";
    }
    else if (num >= 62)
    {
        return "D-"
    }
    else if (num >= 58)
    {
        return "F+";
    }
    else if (num >= 55)
    {
        return "F";
    }
    else if (num <= 52)
    {
        return "F-"
    }
  else if (num >= 42 & num )
    {
        return "F"
    }
    else if (num >= 32)
    {
        return "F"
    }
    else if (num >= 22)
    {
        return "F"
    }
    else if (num >= 12)
    {
        return "F"
    }
    else if (num >= 2)
    {
        return "F"
    }

    else if (num >= 45)
    {
        return "F";
    }
    else if (num >= 35)
    {
        return "F";
    }
    else if (num >= 25)
    {
        return "F";
    }
    else if (num >= 15)
    {
        return "F";
    }
    else if (num >= 5)
    {
        return "F";
    }
}
function temperaturebug()
{
    var num = Number(document.project5.input1.value);

    if (num >= 78) {
        document.getElementById('weather').src = "img/summer.jpg";
        return "SUMMER!"
    }
    if (num >= 70) {
        document.getElementById('weather').src = "img/fall.jpg";
        return "FALL!"
    }
    if (num >= 40) {
        document.getElementById('weather').src = "img/spring.jpg";
        return "SPRING!"
    }
    if (num >= 30) {
        document.getElementById('weather').src = "img/winter.jpg";
        return "WINTER!"

    }
    if (num > -10000000000000000) {
        document.getElementById('weather').src = "img/winter.jpg";
        return "WINTER!"
    }
}
function returnWork()
{
    var activity = document.getElementById('workList').value;
    var num1 = Number(document.getElementById('input2').value);
    //here comes the LOGIC
    if (activity == 'walking')
    {
        return num1 * 3;
    }
    else if (activity == 'running')
    {
        return num1 * 6;
    }
    else if (activity == 'coding')
    {
        return num1 * 2.5;
    }
    else if (activity == 'video game')
    {
        return num1 * 3.5;
    }
}
function tenToTwo()
{
    num = Number(document.project3.num2.value); //number to convert
    base = 2; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2... % returns remainder
        //setup num for the next iteration of the loop.
        num = Math.floor(num/base);
    }
    return smallNum;
}
function smallToTen(num, base) //convert a small-base number to base-10
{
    num = Number(document.project4.num.value);
    base = Number(document.project4.base1.value); //base or 'num' to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, then counts the number of characters in the string
    //in this case, length of '1101' is 4

    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1)); //gets denominator of a fraction
        //for 1001, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        // above means 1001/1000 = 1.... 101/100 = 1.... 01/10 = 0.... 1/1 = 1....
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        //currentDigit*2^3 ... currentDigit*2^2.... currentDigit*2^2.... etc
        num = num%denominator; //reduces num for the next iteration
        // 1101 -> 101 - > 01 -> 1
        numLength--; //decreases the numLength value by 1... otherwise will loop infinitely.
    }
    return tenNum;
}

function tenToSmall(num, base) // convert a base-10 number to a smaller base
{
    //this function is expecting a number (num) in base 10
    //it will convert the number (num) to value of 'base'
    num = tenNum; //number to convert
    base = Number(document.project4.base2.value); //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2... % returns remainder
        //setup num for the next iteration of the loop.
        num = Math.floor(num/base);
    }
    return smallNum;
}


function xToY()
{
    var num = smallToTen();
    var base = Number(document.project4.base2.value);
    return tenToSmall(num, base);
}




