var $totalScore = $("#total-score");
var totalScore = 0;
var $goalScore = $("#goal-score");
var goalScore = 0;
var $gem1 = $("#gem1");
var gem1 = 0;
var $gem2 = $("#gem2");
var gem2 = 0;
var $gem3 = $("#gem3");
var gem3 = 0;
var $gem4 = $("#gem4");
var gem4 = 0;
var $winCounter = $("#win");
var winCounter = 0;
var $loseCounter = $("#lose");
var loseCounter = 0;
var $winLoss = $("#win-loss");
function goalGen(min, max) {
  return (goalScore = Math.floor(Math.random() * (max - min)) + min);
}

function startUp() {
  gem1 = Math.floor(Math.random() * 12 + 1);
  gem2 = Math.floor(Math.random() * 12 + 1);
  gem3 = Math.floor(Math.random() * 12 + 1);
  gem4 = Math.floor(Math.random() * 12 + 1);
  console.log(gem1, gem2, gem3, gem4);
  totalScore = 0;
  $totalScore.text(totalScore);
  goalGen(19, 120);
  $goalScore.text(goalScore);
}

function winCheck() {
  if (totalScore === goalScore) {
    winCounter++;
    $winCounter.text(winCounter);
    $totalScore.text("You Win!");
    $winLoss.text("You Win!");
    startUp();
  }
  if (totalScore > goalScore) {
    loseCounter++;
    $loseCounter.text(loseCounter);
    // $totalScore.text("You Lose!");
    $winLoss.text("You lose!");
    startUp();
  }
}

startUp();

$gem1.on("click", function() {
  totalScore = totalScore + gem1;
  $totalScore.text(totalScore);
  $winLoss.text("");
  winCheck();
});

$gem2.on("click", function() {
  totalScore = totalScore + gem2;
  $totalScore.text(totalScore);
  $winLoss.text("");
  winCheck();
});

$gem3.on("click", function() {
  totalScore = totalScore + gem3;
  $totalScore.text(totalScore);
  $winLoss.text("");
  winCheck();
});

$gem4.on("click", function() {
  totalScore = totalScore + gem4;
  $totalScore.text(totalScore);
  $winLoss.text("");
  winCheck();
});

// if (totalScore === goalScore) {
//     alert("you Win!")
//     win++;
//     startUp();
// }

// if (totalScore > goalScore) {
//     alert("You Lose!")
//     lose++;
//     startUp
// }
