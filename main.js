class Game {

   constructor(sentence) {
      this.originalSentence = sentence;
      this.gameFeedback = this.wordToStars(this.originalSentence); 
      this.attemptsLeft = 10; 
      this.gameStatus = "in progress"; 
   }


   oldGuess(letter) { //TO DELETE!!!!
      if (!this.originalSentence.includes(letter)) {
         this.attemptsLeft--

         if (this.attemptsLeft <= 0) {
            this.gameStatus = "lost";
            return this.gameStatus
         }
      } 

      this.gameFeedback.forEach((e, i) => {
         if (this.originalSentence[i] === letter) {
            this.gameFeedback[i] = letter;
         }

         if (!this.gameFeedback.includes("*")){
            this.gameStatus = "won";
            return this.gameStatus;
         }
      })
      return this.gameFeedback;
   }

   wordToStars(sentence) {
      let gameFeedback = (sentence).split("")

      gameFeedback.forEach((x, i) => {
         gameFeedback[i] === " " ? gameFeedback[i] = " " : gameFeedback[i] = "*"
      });

      gameFeedback = gameFeedback.join("").split(" ")
      return gameFeedback
   }

   guess(letter) {
      // let matchIndexes = [];
   
      if (!this.originalSentence.includes(" ")) {
   
         if (this.originalSentence.includes(letter)) {
            
            for (let i = 0; i < this.originalSentence.length; i++) {
               
               console.log(this.originalSentence[i])

               if (this.originalSentence[i] === letter) {
                  // matchIndexes.push(i);
                  console.log(this.gameFeedback[i])
                  console.log(letter)
                  this.gameFeedback[i] = letter;
               }
            }
         }
         return this.gameFeedback
         // return matchIndexes
      }
      
      if (this.originalSentence.includes(" ")) {
         let sentenceIntoWords = this.originalSentence.split(" ")
   
         for (let i = 0; i < sentenceIntoWords.length; i++) {

            matchIndexes.push([])

            if (sentenceIntoWords[i].includes(letter)) {
               
   
               for (let j = 0; j < sentenceIntoWords[i].length; j++) {
                  if (sentenceIntoWords[i][j] === letter) {
                     matchIndexes[i].push(j)
                  }
               }
            }
         }

         return this.gameFeedback
         // return matchIndexes
      }
   }
}

const currentGame = new Game("mi casa")







