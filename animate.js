var rectY1 = 40;
var rectY2 = 90;
var rectY3 = 80;
var pic2 = new Image();
pic2.src = "img/text.png";
var rectX1 = 550;
var rectX2 = 600;
var pic1 = new Image();
pic1.src = "img/h.png";


function drawBackground()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#fffdfd";
    ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
}
function initialize()
{
    drawBackground(); //establish bg elements
    var ctx = document.getElementById("myCanvas").getContext("2d");
    //draw a red rectangle to animate
    //in fact, anything you wish to get animate should get drawn here
    ctx.fillStyle = "#000000";
    ctx.fillRect(210,rectY1,45,55);

    ctx.fillStyle = "#000000";
    ctx.fillRect(190,rectY2,85,10);

    ctx.fillStyle = "#fdfcff";
    ctx.fillRect(212,rectY3,41,10);

    ctx.drawImage(pic2,rectX1,25,200,200);

    ctx.fillStyle = "#000000";
    ctx.font = "30px Arial";
    ctx.fillText("MY HAT!", rectX2, 110);

    ctx.fillStyle = "#727174";
    ctx.fillRect(200, 100, 65, 55);


    //draw two circles, differently
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(250, 125, 5, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#1d33ab";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(220, 125, 5, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#0c12ff";
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#fdfbff";
    ctx.fillRect(225, 135, 20, 10);

    ctx.fillStyle = "#727174";
    ctx.fillRect(215, 150, 35, 55);

    ctx.beginPath(); //starting a new line
    ctx.moveTo(250, 150);
    ctx.lineWidth = 7;
    ctx.lineTo(260, 225);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(215, 150);
    ctx.lineWidth = 7;
    ctx.lineTo(205, 225);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(225, 200);
    ctx.lineWidth = 7;
    ctx.lineTo(225, 275);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(240, 200);
    ctx.lineWidth = 7;
    ctx.lineTo(240, 275);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.drawImage(pic1,228,155,25,25);
}
function animate()
{
    a = requestAnimationFrame(animate);
    drawBackground();
    moveRectUp();
    robot();
    moveTextright();
    checkText();

}
function startAnimation()
{
    animate();
}

function stopAnimation()
{
    cancelAnimationFrame(a);
}

var moveAmount = 3*(-1);
var moveAmountX = 7*(-1);

function moveRectUp()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    rectY1 = rectY1 + moveAmount;
    ctx.fillStyle = "#000000";
    ctx.fillRect(210,rectY1,45,55);

    rectY2 = rectY2 + moveAmount;
    ctx.fillStyle = "#000000";
    ctx.fillRect(190,rectY2,85,10);

    rectY3 = rectY3 + moveAmount;
    ctx.fillStyle = "#fdfcff";
    ctx.fillRect(212,rectY3,41,10);
}
function moveTextright()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    rectX1 = rectX1 + moveAmountX;
    ctx.drawImage(pic2,rectX1,25,200,200);

    rectX2 = rectX2 + moveAmountX;
    ctx.fillStyle = "#000000";
    ctx.font = "30px Arial";
    ctx.fillText("MY HAT!", rectX2, 110);
}

function checkText()
{
    if(rectX1 < 201)
    {
        rectX1 = 200
    }
    if(rectX2 < 251)
    {
        rectX2 = 250
    }
}
function robot()
{

    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#727174";
    ctx.fillRect(200, 100, 65, 55);


    //draw two circles, differently
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(250, 125, 5, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#1d33ab";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(220, 125, 5, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#0c12ff";
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#fdfbff";
    ctx.fillRect(225, 135, 20, 10);

    ctx.fillStyle = "#727174";
    ctx.fillRect(215, 150, 35, 55);

    ctx.beginPath(); //starting a new line
    ctx.moveTo(250, 150);
    ctx.lineWidth = 7;
    ctx.lineTo(260, 225);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(215, 150);
    ctx.lineWidth = 7;
    ctx.lineTo(205, 225);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(225, 200);
    ctx.lineWidth = 7;
    ctx.lineTo(225, 275);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.beginPath(); //starting a new line
    ctx.moveTo(240, 200);
    ctx.lineWidth = 7;
    ctx.lineTo(240, 275);
    ctx.strokeStyle = "#727174";
    ctx.stroke();

    ctx.drawImage(pic1,228,155,25,25);
}