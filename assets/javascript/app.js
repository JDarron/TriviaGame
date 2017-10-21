$(document).ready(function() {
    // ================= VARIABLES =========================

    // CORRECT
    var correct = 0;
    // INCORRECT
    var incorrect = 0;
    // NUMBER OF QUESTIONS IN THE QUIZ
    var numQuestions = 8;
    // CORRECT ANSWERS
    var correctAnswer = ["b", "d", "a", "c", "d", "b", "a", "d"];
    // GRABBING THE DIVS TO DISAPEAR AND REAPPEAR
    var content = document.getElementById("content");
    var button = document.getElementById("submit");
    var score = document.getElementById("score");
    var timerContent = document.getElementById("timer-content");
    // TIMER SECONDS TO COUNT DOWN
    var timerSeconds = 45;

    // ================= FUNCTIONS =========================

    // FUNCTION HIDECONTENT
    function hideContent() {
        // STYLE DISPLAY NONE
        content.style.display = "none";
        // STYLE DISPLAY NONE TIMER
        timerContent.style.display = "none";
    };

    // FUNCTION HIDE SCORE
    function hideScore() {
        score.style.display = "none";
        // STYLE DISPLAY NONE TIMER
        timerContent.display = "none";
    };

    // FUNCTION SHOWCONTENT
    function showContent() {
        // STYLE DISPLAY BLOCK
        content.style.display = "block";
        // STYLE DISPLAY NONE START BUTTON
        button.style.display = "none";
        // STYLE DISPLAY BLOCK TIMER
        timerContent.style.display = "bLock";
        // SHOW TIMER CONTENT
        $("#timer").text(timerSeconds);
    };

    // FUNCTION TIMEUP
    function timeUp() {
        console.log("We in this b****!")
        // CALL HIDECONTENT     	
        hideContent();
        // LOOP THROUGH THE QUESTIONS & COMPARE     	
        for (var i = 0; i < numQuestions; i++) {
            // GET USER INPUT VALUES 		
            var returnValue = $('input[name=question' + (i + 1) + ']:checked').val();
            // IF ANSWER IS CORRECT    	
            if (returnValue === correctAnswer[i]) {
                // CORRECT++ 
                correct++;
                console.log("Question " + (i + 1) + ": True - " + correct);
            } else { // ELSE ANSWER IS INCORRECT 
                // INCORRECT++
                incorrect++;
                console.log(incorrect);
                console.log("Question " + (i + 1) + ": False - " + incorrect);
            }
        };
        // CALL SHOW SCORE
        showScore();
        // CLEAR INTERVAL
        clearInterval(timer);
    }; // END TIMEUP FUNCTION

    // FUNCTION SHOW SCORE
    function showScore() {
        //STYLE DISPLAY BLOCK
        score.style.display = "block";
        // STYLE DISPLAY NONE
        content.style.display = "none";
        // ADD THE CORRECT ANSWERS TO THE PAGE
        $("#correct-answers").text(correct);
        // ADD THE INCORRECT ANSWERS TO THE PAGE
        $("#incorrect-answers").text(incorrect);

    };

    // FUNCTION TIMER 
    function timer() {
        timerSeconds--;
        $("#timer").text(timerSeconds);
    };

    // ----------------- CALL FUNCTIONS ON START -----------

    // CALL HIDECONTENT
    hideContent();
    // CALL HIDESCORE
    hideScore();

    // ================= ONCLICKS ==========================

    $("#submit").on("click", function(e) {
        // CALL SHOW CONTENT
        showContent();
        // CALL FUNCTION TIMER
        setInterval(timer, 1000);
        // CALL TIMOUT (TIMEUP)
        setTimeout(timeUp, 45000);
    });

});