
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

question.prototype.checkAnswer = function (response) {
    document.write(response == this.correct ? 'hey' : 'you are wrong');
}

question.prototype.toText = function () {
    return `${this.question} : \n -------\n${this.typeQuestion()}`;
}

//creating questions
var q1 = new question('is javascrpt the best language in the world', ['yes', 'no'], 0)
var q2 = new question('what is the name of this game\'s coder', ['jhon', 'jane', 'mohammed'], 2)
var q3 = new question('this game was ccreated by ', ['js', 'html', 'css'], 0)

//creating a quiz
var Quz = [q1, q2, q3];

//genrating a random question
n = Math.floor(Math.random() * 3);
var question = Quz[n];

//showing question to the user throw a prompt
//and getting input
var answer = parseInt(prompt(question.toText()));

//showing result
question.checkAnswer(answer - 1);

