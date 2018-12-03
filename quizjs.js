
function checkAnswers()
{
    var score=0;
    var feedback=[];
    var Q6Answer = document.quiz.a6.value.toLowerCase()
    if (document.quiz.a2.value === 'Xbox')
    {
        score++;
        feedback.push("Question 1 is CORRRRRECT");
    } else {

        feedback.push("Incorrect!! Question 1 was XBOX, you weirdo");
    }
    if (document.quiz.a3.value === 'ov')
    {
        score++;
        feedback.push("Question 2 is CORRECT")
    } else {

        feedback.push("Incorrect!! Question 2 was OVERWATCH, you nerd");
    }
    if(document.quiz.a4A.checked === true && document.quiz.a4C.checked === true && document.quiz.a4D.checked === false && document.quiz.a4B.checked === false && document.quiz.a4E.checked === false && document.quiz.a4F.checked === true)
    {
        score++;
        feedback.push("Question 3 is CORRRRECT")
    } else {

        feedback.push("Incorrect!! Question 3 was HOODIES/JOGGERS/SHOES");
    }
    if(document.quiz.a5A.checked === true && document.quiz.a5C.checked === true && document.quiz.a5D.checked === true && document.quiz.a5B.checked === true && document.quiz.a5E.checked === true)
    {
        score++;
        feedback.push("Question 4 is CORRRRECT")
    } else {

        feedback.push("Incorrect!! Question 4 was ALL of them");
    }
    if (Number(document.quiz.a1.value) === 76)
    {
        score++;
        feedback.push("Question 5 is corrrrrrect!!");
    } else {

        feedback.push("Incorrect!! Question 5 was 76");
    }
    if ( Q6Answer === 'teacher')
    {
        score++;
        feedback.push("Question 5 is corrrrrrect!!");
    } else {

        feedback.push("Incorrect!! Question 5 was TEACHER");
    }
    alert(score);
    alert(feedback);

}