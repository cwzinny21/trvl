// QUIZ SECTION code
$(".personalityQuiz").submit(function(event) {
  event.preventDefault();
  var answers = $(this).serializeArray();

  var scores = {
    greeceItaly: 0,
    japanSingapore: 0,
    peruArgentina: 0
  };

  console.log(scores);

  for (var answer of answers) {
    scores[answer.value] += 1;
  }

  var maxScore = "greeceItaly";
  for (var score in scores) {
    if (scores[score] > scores[maxScore]) {
      maxScore = score;
    }
  }
  console.log(maxScore);

  $(".personalityQuiz").css('display', 'none');
  $(".result#"+maxScore).css('display', 'block');
});
