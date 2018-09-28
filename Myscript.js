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
    else if (num >= 52)
    {
        return "F-"
    }
}
function temperaturebug() {
    var num = Number(document.project5.input1.value);

    if (num >= 78) {
        document.getElementById('weather').src = "img/summer.jpg"
        return "SUMMER!"
    }
    if (num >= 70) {
        document.getElementById('weather').src = "img/fall.jpg"
        return "FALL!"
    }
    if (num >= 40) {
        document.getElementById('weather').src = "img/spring.jpg"
        return "SPRING!"
    }
    if (num >= 30) {
        document.getElementById('weather').src = "img/winter.jpg"
        return "WINTER!"

    }
    if (num > -10000000000000000) {
        document.getElementById('weather').src = "img/winter.jpg"
        return "WINTER!"
    }
}
function helloWorld() {
    var language = document.project2.input1.value; //capture data from input box on HTML
    language = language.toLowerCase();
    var num1 = Number(document.project2.input2.value);
    //here comes the LOGIC
    if (language == 'wk') {
        return num1 * 3;
    }
    else if (language == 'ru') {
        return num1 * 6;
    }
    else if (language == 'co') {
        return num1 * 2.5;
    }
    else if (language == 'vg') {
        return num1 * 3.5;
    }


    //PEBCAK
    // Problem exists between chair and keyboard



































}


