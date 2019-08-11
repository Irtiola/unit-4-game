// variable and jquery that updates number of wins/losses

var wins = 0;
$('#wins').text(wins);
var losses = 0;
$('#losses').text(losses);

//variable total score
var score = 0;

//styling with jquery
$(".rules >p").css("color", "green");


// function to generate a random number between min and max will be used to generate random number
//from 19 to 120 and from 1 to 12
function getRandomValue(min, max) {
    var rn = Math.floor(Math.random() * (max - min)) + 1;
    return rn;
}

//dedclaring global var
var gameNum = 0;
var gemList = {};

function restartGame() {
    score = 0;
    $('#totalScore').text(score);
    gameNum = getRandomValue(19, 120);
    $('#randomNum').text(gameNum);
    gemList = {
        red: { value: getRandomValue(1, 12), img: 'assets/images/red.jpeg' },
        blue: { value: getRandomValue(1, 12), img: 'assets/images/blue.jpeg' },
        yellow: { value: getRandomValue(1, 12), img: 'assets/images/yellow.jpeg' },
        green: { value: getRandomValue(1, 12), img: 'assets/images/green.jpeg' }

    };
    console.log(gemList);
}

//function that adds gems on screen
function addGemOnScreen() {

    $('#gemsRow').append('<img src="assets/images/red.jpeg" data-type="red">');//long way
    $('#gemsRow').append('<img src=' + gemList.blue.img + ' data-type="blue">');//short way 
    $('#gemsRow').append('<img src=' + gemList.yellow.img + ' data-type="yellow">');
    $('#gemsRow').append('<img src=' + gemList.green.img + ' data-type="green">');

}
restartGame();//very important to call this function before adding gems on screen!
addGemOnScreen();



// all action when user clicks and checking conditions in order to update wins/losses
$('img').on('click', function () {
    var color = $(this).attr('data-type');
    score += gemList[color].value;
    $('#totalScore').text(score);
    var audio = $('#isound')[0];
    audio.play();
    if (score > gameNum) {
        losses++;
        $('#losses').text(losses);
        alert('Sorry, you lost!');
        restartGame();

    }
    if (score == gameNum) {
        wins++;
        $('#wins').text(wins);
        alert('You are the winner!');
        restartGame();

    }

});



