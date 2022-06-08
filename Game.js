class Game {

   constructor(sentence) {

      this.originalSentence = sentence;
      this.gameFeedback = this.wordToStars(); 
      this.attemptsLeft = 10; 
      this.gameStatus = "in progress"; 
   }


   guess(letter) { 

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

   wordToStars() {

      let gameFeedback = (this.originalSentence).split("")

      gameFeedback.forEach((x, i) => {
         gameFeedback[i] === " " ? gameFeedback[i] = " " : gameFeedback[i] = "*"
      });

      return gameFeedback.join("")
   }
}
