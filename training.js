
function question(question, answers, correct) {
    this.question = question
    this.answers = answers
    this.correct = correct
}

question.prototype.typeQuestion = function () {
    var suggestions = "";
    for (var i = 0; i < this.answers.length; i++) {
        suggestions += `${i + 1} : ${this.answers[i]}\n`;
    }
    return suggestions;
}

var answers = 
  
    ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

question.prototype.checkAnswer = function (response) {
    document.write(response == this.correct ? answers : 'please reload the page and start again');
}

question.prototype.toText = function () {
    return `${this.question} : \n -------\n${this.typeQuestion()}`;
}

//creating questions
var q1 = new question('when was alphabit created', ['2016', '2015'], 0)
var q2 = new question('what is the name of our ex presedent', ['moncef', 'azziz', 'oussama'], 2)
var q3 = new question('what is our slogan ', ['raise the bar higher', 'keep the bar higher', 'we are alphabit'], 0)
var q4 = new question('how many departements do we have', ['4', '3'], 1)


//creating a quiz
var Quz = [q1, q2, q3 , q4];

//genrating a random question
n = Math.floor(Math.random() * 4);
var question = Quz[n];

//showing question to the user throw a prompt
//and getting input
var answer = parseInt(prompt(question.toText()));

//showing result
question.checkAnswer(answer - 1);

