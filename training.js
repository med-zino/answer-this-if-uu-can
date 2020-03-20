
    function question(question, answers,correct)
    {
        this.question = question
        this.answers = answers 
        this.correct = correct
    }

     var q1 = new question ('is javascrpt the best'+
     ' language in the world', ['yes','no'],0)
     
     var q2 = new question ('what is the name of this game\'s coder', ['jhon','jane','mohammed'],2)

     var q3 = new question ('this game was ccreated by ', ['js','html','css'],0)


    var Quz = [q1,q2,q3] 
    n = Math.floor(Math.random()*3)
    
    
    question.prototype.typeQuestion = function() {
        console.log(this.question)
        for (var i=0 ; i < this.answers.length ; i++ ){
            console.log(i +' : ' + this.answers[i] )
        }

    }
    answer = prompt('whats your answer')

    question.prototype.CheckAnswer = function() {
        if (answer === this.correct) { document.write('hey') }
        else {document.write('you are wrong')} 
    }

    Quz[n].typeQuestion() 

        answer = parseInt(prompt('whats your answer'))
    Quz[n].CheckAnswer()

