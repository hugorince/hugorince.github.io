const countryToGuess2 = (obj) =>{

        let keys = Object.keys(obj)
        let countryQuestion = keys[Math.floor(Math.random() * keys.length)]
        let answer = obj[countryQuestion]
        console.log(answer)
        
        if (countryGuessed.length > 0){
            for (let i in countryGuessed){
                if (answer === countryGuessed[i]){
                countryToGuess2(capitals)
        }
                else {
    
        let cap = [answer]
        
        for (let i in obj){
            if (obj[i] != answer)
            cap.push(obj[i])
        }
    
        shuffle(cap)
        console.log(cap)
    
        let finalCap = [answer]
        for (let i in cap){
            if (cap[i] != answer && finalCap.length < 4){
                finalCap.push(cap[i])
            }
        }
        console.log(finalCap)
        shuffle(finalCap)
    
        button1.innerHTML = finalCap[0]
        button2.innerHTML = finalCap[1]
        button3.innerHTML = finalCap[2]
        button4.innerHTML = finalCap[3]
    
        document.getElementById("countryToGuess").innerHTML = 'What is the capital of ' + countryQuestion + ' ?';
        
        for (let i in buttons){
        buttons[i].addEventListener('click', () => {
            if (buttons[i].innerHTML === answer){
                result.innerHTML = "True"
                countryGuessed.push(answer)
                console.log(countryGuessed)
                score += 1
                document.getElementById('score').innerHTML = 'Your score is : ' + score
                console.log(score)
            }
            else {
                result.innerHTML = "False"
                document.getElementById('score').innerHTML = 'Your score is : ' + score
                score = 0
                countryGuessed = []
                console.log(countryGuessed)
    
                //AFFICHER UN GAME OVER AVEC LE SCORE
            }
        }
    )}
        }}}} 

const actualize = (arr1, arr2) => {
            let keys = Object.keys(arr1)
            let result = []
            for (let key in arr1){
                for (let j = 0 ; j < arr1.length ; j++){
                    if (arr2[j] ==! arr1[key]){
                        result.push(arr1[i])
                    }
                }
            }
            return result
        }
        
        for (let i in buttons){
        
            console.log('ClickEvent', i)
            if (buttons[i].innerHTML === answer){
                buttons[i].addEventListener('click', myFunction = ()=> {
                result.innerHTML = "True"
                countryGuessed.push(answer)
                console.log(countryGuessed)
                score += 1
                document.getElementById('score').innerHTML = 'Your score is : ' + score
                console.log(score)
                })
                
                
            }
            else {
                buttons[i].addEventListener('click', myFunction = ()=> {
                result.innerHTML = "False"
                document.getElementById('score').innerHTML = 'Your score is : ' + score
                score = 0
                countryGuessed = []
                console.log(countryGuessed)
            })
            
              //AFFICHER UN GAME OVER AVEC LE SCORE
            }
            //buttons[i].removeEventListener('click', myFunction)
        }


        if (difficulty == 1){
            for (let i in buttons){
            buttons[i].innerHTML = finalCap[i]
            }
        }
        if (difficulty == 2){
            for (let i in buttons6){
            buttons6[i].innerHTML = finalCap[i]
            console.log(buttons6[i])
            }
        }
        if (difficulty == 3){
            for (let i in buttons8){
            buttons8[i].innerHTML = finalCap[i]
            }
        }
    
        if (difficulty == 1){
            for (let i in buttons){
                buttons[i].onclick = () => {
                if (buttons[i].innerHTML === answer){
                    buttons[i].className = 'btnWin'
                    countryGuessed.push(answer)
                    console.log( 'Array of Country already guessed = ', countryGuessed)
                    score += 1
                    if (score > highScore){
                        highScore = score
                    }
                    console.log('highscore is :', highScore)
                    scoreDisplay.innerHTML = 'Your score is : ' + '<b>' + score
                    classNull()
                    continuePlay.className = 'continueAnim'
                    continuePlay.innerHTML = 'Continue'
                    for (let j in buttons){
                    if (buttons[j] != buttons[i]){
                        buttons[j].className = 'btn2'
                    }
                }
                    continuePlay.onclick = () => {
                        continuePlay.className = 'continue'
                        continuePlay.innerHTML = 'Guess'
                        document.getElementById('highscore').innerHTML = '🏆 Highscore is : ' + highScore
                        classBtn()
                        continuePlay.className = 'stop'
                        countryToGuess(obj)
                    }
                }
                else {
                    buttons[i].className = 'btnLose'
                    for (let j in buttons){
                        if (buttons[j] != buttons[i]){
                            buttons[j].className = 'btn2'
                        }
                        if (buttons[j].innerHTML === answer){
                            buttons[j].className = 'btnWin'
                        } 
                    }
                    classNull()
                    scoreDisplayLose()
                    score = 0
                    countryGuessed = []
                    continuePlay.innerHTML = 'Play Again'
                    continuePlay.className = 'playAgain'
                    console.log('Empty Array = ', countryGuessed)
                    continuePlay.onclick = () => {
                        scoreDisplayAgain()
                        document.getElementById('highscore').innerHTML = '🏆 Highscore is : ' + highScore
                        continuePlay.innerHTML = 'Guess'
                        classBtn()
                        continuePlay.className = 'stop'
                        countryToGuess(obj)
                    }
    
                }
            }
            }
            continuePlay.onclick = null
        }



///////////////////////
//HIGHSCORES

// const NO_OF_HIGH_SCORES = 10
// const HIGH_SCORES = 'highScores'
// const highScoreString = localStorage.getItem(HIGH_SCORES)



// function checkHighScore(score) {
//     const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//     const lowestScore = highScores[NO_OF_HIGH_SCORES-1]?.score ?? 0;
    
//     if (score > lowestScore) {
//       saveHighScore(score, highScores); // TODO
//       showHighScores(); // TODO
//     }
// }

// function saveHighScore(score, highScores) {
//     const name = prompt('You got a highscore! Enter name:');
//     const newScore = { score, name };
    
//     // 1. Add to list
//     highScores.push(newScore);
  
//     // 2. Sort the list
//     highScores.sort((a, b) => b.score-a.score);
    
//     // 3. Select new list
//     highScores.splice(NO_OF_HIGH_SCORES);
    
//     // 4. Save to local storage
//     localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
// }

// const highScoreList = document.getElementById(HIGH_SCORES);

// highScoreList.innerHTML = highScores.map((score) => 
//   `<li>${score.score} - ${score.name}`
// )
