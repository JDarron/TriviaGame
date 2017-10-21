$(document).ready(function() {
    // ================= VARIABLES =========================

    // CORRECT 
    // INCORRECT

    // CORECTANSWER = { QUESTION1: 'B', QUESTION2: 'D', QUESTION3: 'A', QUESTION4: 'C', QUESTION5: 'D', QUESTION6: 'B', QUESTION7: 'A', QUESTION8: 'D' }

    // ================= FUNCTIONS =========================

    // FUNCTION HIDECONTENT 
    // STYLE DISPLAY NONE

    // FUNCTION SHOWCONTENT 
    // STYLE DISPLAY BLOCK
    // STYLE DISPLAY NONE START BUTTON

    // FUNCTION TIMEUP
    //STYLE.DISPLAY NONE CONTENT
    //STYLE.DISPLAY NONE BUTTON				
    // GET USER INPUT VALUES 
    // LOOP THROUGH  
    // GET INPUT VALUE
    // IF INPUT VALUE === CORRECTANSWER.QUESTION + I
    // CORRECT++ 
    // ELSE 
    // INCORRECT++

    // FUNCITON TIMER
    // SHOW TIME LEFT 



    // END GAME WHEN TIME RUNS OUT
    // TIME RUN OUT HIDE QUESTIONS AND SHOW SCORE


    // REVEAL NUMBER OF QUESTIONS RIGHT AND WRONG 
    // SHOW CORRECT ANSWERS
    // SHOW INCORRECT ANSWERS


    // ----------------- CALL FUNCTIONS ON START -----------

    // CALL HIDECONTENT 

    // ================= ONCLICKS ==========================

    // .ON CLICK DO THIS 
    // CALL SHOW CONTENT
    // CALL TIMOUT (TIMEUP)


    //console.log( document.forms[0].elements[1].value );

    console.log($('input[name=radioName]:checked', '#q1').val());


    $("#submit").on("click", function(e) {
        e.preventDefault();
        console.log($('input[name=quiz-answers]:checked', '#q1').val());
    })
});