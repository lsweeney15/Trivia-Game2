var questions = [{
            ques: "In the episode, 'Sabre', what famous actor is featured as himself in the Sabre orientation video?",
            ans: ["Christian Slater", "Johnny Depp", "Tom Hanks", "Joe Rogan"],
            name: "orientationActor",
            correct: "Christian Slater",
            divClass: ".orientationActor"
        },
        {
            ques: "In the episode, 'Sexual Harassment', What is on Todd Packer's vanity license plate?",
            ans: ['LUVMKR', 'WLHUNG', 'TODPKR', 'BGDADDY'],
            name: "licensePlate",
            correct: 'WLHUNG',
            divClass: ".licensePlate"
        },
        {
            ques: "In the episode, 'Beach Games', who gets abandoned in the lake wearing a sumo costume?",
            ans: ["Andy", "Stanley", "Dwight", "Phyllis"],
            name: "sumoOutfit",
            correct: "Andy",
            divClass: ".sumoOutfit"
        },
        {
            ques: "Which of the following is NOT the name of one of Michael Scott’s alter egos",
            ans: ["Ping", "Michel Klump", "Agent Michael Scarn", "Mark Greg Sputnik"],
            name: "alterEgo",
            correct: "Mark Greg Sputnik",
            divClass: ".alterEgo"
        },
        {
            ques: "In the episode, 'Dream Team', Michael Scott Paper Company meets with an investor.  Who is it?",
            ans: ["Vikram", "Nana", "Pam’s Mom", "David Wallace"],
            name: "investor",
            correct: "Nana",
            divClass: ".investor"
        },
        {
            ques: "In the episode 'Health Care', Which of these is NOT one of Jim and Pam's made up diseases?",
            ans: ["Killer nanorobots", "Hot dog fingers", "Spontaneous dental hydroplosion", "Bouts of Flonkerton"],
            name: "healthCare",
            correct: "Bouts of Flonkerton",
            divClass: ".healthCare"
        },
        {
            ques: "In the episdoe, 'Halloween', What is Jim's costume?",
            ans: ["Dave", "Bookface", "Three Hole Punch Jim", "Rational Consumer"],
            name: "jimCostume",
            correct: "Three Hole Punch Jim",
            divClass: ".jimCostume"
        },
        {
            ques: "What is 'Florida Stanley's' goal in life? To drive fast and leave what?",
            ans: ["A sexy corpse", "his wife, Cynthia", "Michael behind", "a legacy"],
            name: "stanleysGoal",
            correct: "A sexy corpse",
            divClass: ".stanleysGoal"
        },
        {
            ques: "In the episode, 'Fun Run', Dwight mercy kills Angela's cat. Which of he cats is it?",
            ans: ["Pringles", "Garbage", "Fluffy", "Sprinkles"],
            name: "deadCat",
            correct: "Sprinkles",
            divClass: ".deadCat"
        },
        {
            ques: "In the episode, 'Goodbye Toby, where is Toby leaving for?",
            ans: ["Peru", "Costa Rica", "Nashua", "Hell"],
            name: "toby",
            correct: "Costa Rica",
            divClass: ".toby"
        }
    ] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz