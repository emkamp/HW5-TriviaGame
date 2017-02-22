$(document).ready(function() {

    var totalTime = 30
    var countdown = totalTime + 1;
    var timeBarWidth;
    var score = 0;
    var totalQuestions = 5;
    var currentQuestion = 0;

    var message = "You'll have " + totalTime + " seconds to answer " + totalQuestions + " questions."

    var question1 = {
        "question": "At Christmas dinner, Mark and his father argue about whether or not one of the dishes is traditional. Which was it?",
        "answer1": "Ham",
        "answer2": "Cauliflower",
        "answer3": "Beets"
    };
    var question2 = {
        "question": "According to Mark, what is the primary reason he marries Sophie?",
        "answer1": "Spite",
        "answer2": "Fear",
        "answer3": "Love"
    };
    var question3 = {
        "question": "What do the neighborhood hooligans call Mark?",
        "answer1": "Cleanshirt",
        "answer2": "Tosser",
        "answer3": "Cretin"
    };
    var question4 = {
        "question": "When Jez becomes a life coach, who is the man with the anger problems whom he finds himself forced to life coach?",
        "answer1": "Johnson",
        "answer2": "Jeff",
        "answer3": "Andy"
    };
    var question5 = {
        "question": "Which drug is Super Hans's favorite?",
        "answer1": "Ketamine",
        "answer2": "Heroin",
        "answer3": "Crack"
    };

    var questionArray = [question1, question2, question3, question4, question5];

    $("#next").hide();
    $("#message").html(message);
    $("#answer-choices").hide();

    function setTimeBar() {
        var timeBarWidth = (100 - ((countdown / totalTime) * 100)) + "%";
        $(".timer-bar-full").css("width", timeBarWidth);
        if (countdown === 0) {
            $(".timer-bar-full").addClass("timer-bar-full-100");
            gameOver();
        } else if (countdown < 10) {
            countdown = countdown - 1;
            $("#timer-counter").html(" " + countdown + " seconds");
            $(".timer-bar-full").addClass("timer-danger");
        } else if (countdown >= 10) {
            countdown = countdown - 1;
            $("#timer-counter").html(countdown + " seconds");
        }
        console.log("countdown = " + countdown + ", timeBarWidth = " + timeBarWidth);
    }

    setTimeBar();
    var interval;

    function setTime() {
        interval = setInterval(setTimeBar, 1000);
    }

    function gameOver() {
        $("#next").hide();
        $("#answer-choices").hide();
        $("h2").html("Game Over");
        $("#message").show().html("You scored " + score + " out of " + totalQuestions);
        clearInterval(interval);
    }

    function buildPage(obj) {
        $("h2").html(obj.question);
        $("#answer-choice-1").attr({ "value": obj.answer1 })
        $("#answer-choice-1-label").attr({ "for": obj.answer1 }).html(obj.answer1);
        $("#answer-choice-2").attr({ "value": obj.answer2 });
        $("#answer-choice-2-label").attr({ "for": obj.answer2 }).html(obj.answer2);
        $("#answer-choice-3").attr({ "value": obj.answer3 });
        $("#answer-choice-3-label").attr({ "for": obj.answer3 }).html(obj.answer3);
    }

    function keepScore() {
        //do a ton of if else statements to match answer to question and increment score if correct.
    }

    $("#start").click(function() {
        $("#start").hide();
        $("#message").hide();
        $("#next").show();
        $("#answer-choices").show();
        setTime();
        buildPage(questionArray[0]);
    });

    $("#next").click(function() {
        // see which answer is checked.  
        // use conditionals to compare this answer to its question
        // score++ if match
        if (currentQuestion < 4) {
            $('.answer').prop('checked', false);
            currentQuestion++;
            buildPage(questionArray[currentQuestion]);
        } else {
            gameOver();
        }
    });
});
