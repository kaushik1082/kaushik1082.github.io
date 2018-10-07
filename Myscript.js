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
function temperaturebug() {
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
        document.getElementById('img').src ="img/walk.jpg"
        return num1 * 3;
    }
    else if (activity == 'running')
    {
        document.getElementById('img').src ="img/run.jpg"
        return num1 * 6;
    }
    else if (activity == 'coding')
    {
        document.getElementById('img').src ="img/code.jpg"
        return num1 * 2.5;
    }
    else if (activity == 'video game')
    {
        document.getElementById('img').src ="img/gaming.jpg"
        return num1 * 3.5;
    }
}


