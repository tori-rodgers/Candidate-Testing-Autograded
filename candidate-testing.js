const input = require('readline-sync');
//-------ONLY FOR TASK 1 ------//
let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
//-------ONLY FOR TASK 1 ------//





let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("Greetings candidate! Please enter your name: ");
}

// Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let userResponse = input.question(questions[i]);
    candidateAnswers.push(userResponse);
  }

  console.log(`\nCandidate Name: ${candidateName}`);
      for (let i = 0; i < questions.length; i++) {
        console.log(`${i + 1}) ${questions[i]}`);
        console.log(`Your Answer: ${candidateAnswers[i]}`);
        console.log(`Correct Answer: ${correctAnswers[i]}\n`);
      }
}
console.log(candidateAnswers)


function gradeQuiz(candidateAnswers) {
    let correctCount = 0;
      for (let i = 0; i < candidateAnswers.length; i++) {
        if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
          correctCount++;
          }
        }

    let totalQuestions = correctAnswers.length;
    let grade = (correctCount / totalQuestions) * 100;  //Calculate the candidates score.

      console.log(`>>> Overall Grade: ${grade}% (${correctCount} out of 5 responses correct) <<<`);

      if (grade >= 80) {
        console.log(">>> Status: PASSED <<<");
      } else {
        console.log(">>> Status: FAILED <<<");
      }

  return grade;
}

function runProgram() {
  askForName();
   console.log(`Hello, ${candidateName}! We have a short quiz for you.`);
   
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};