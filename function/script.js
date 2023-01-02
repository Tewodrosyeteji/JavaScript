'use strict'

//challenge one

//1  get answer

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer(){
       const answer= Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)}`));
   
         
      
       //register answer

       typeof answer ==='number' && answer < this.answers.length && this.answers[answer]++;
       this.displayResults();
       this.displayResults('string');
    },

displayResults(type='array'){
    if(type === 'array'){
        console.log(this.answers);
    }else{
        console.log(`string type:${this.answers.join(', ')}`);
    }
}

    };


    document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll),);
    poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},'string');

    //challenge two

    (function () {
        const header = document.querySelector('h1');
        header.style.color = 'red';

        document.querySelector('body').addEventListener('click', function(){
            header.style.color='blue'
        });
        })();