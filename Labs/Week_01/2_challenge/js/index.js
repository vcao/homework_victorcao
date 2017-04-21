//Build your arrays


var questions = ["Hello, what is your name?","How are you doing today?", "What is your favorite color?"];
var answers = [];
var responses = ["Nice to meet you,","That's wonderful!","That's nice, but it's not red!"];


var intCurrentQuestion = 0;

$(function(){

    //ask a question
    askQuestion(intCurrentQuestion);
    
    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        //send an answer
        sendAnswer(answer);
    });

});


function askQuestion(questionNumber)
{
    $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
    //set the current question to the the passed parameter
    intCurrentQuestion = questionNumber;
}

function sendAnswer(answer)
{
    $('#answer').val('');
    $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
    //add the answer to the answer array
    answers.push(answer);
    //lookup a response
    lookUpResponse();
    //ask the next question
    var nextQuestion = questions[intCurrentQuestion + 1];
    if (nextQuestion === undefined) {
        $('#conversation').append('<li class="list-group-item ai">Thank you for your time. Goodbye!</li>');
    } else {
        askQuestion(intCurrentQuestion + 1);
    }
}

function sendResponse(response)
{
    $('#conversation').append('<li class="list-group-item ai">' + response + '</li>');
}

function lookUpResponse()
{
    var response = undefined;
    if(intCurrentQuestion == 0)
    {
        response = responses[0] + " " + answers[0];
    } else if(intCurrentQuestion == 1) {
        response = answers[1] + "! " + responses[1];
        //add if/else statements to alter responses
    } else if(intCurrentQuestion == 2) {
        answer = answers[2].toLowerCase();
        if (answer == "red") {
            response = "So awesome! I love red, too!";
        } else {
            response = answers[2] + "... " + responses[2];
        }
    }


    if(response)
    {
        //send the response
        sendResponse(response);
    }
}

