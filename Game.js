class Game {

   constructor(sentence) {
      this.originalSentence = sentence;
      this.gameFeedback = this.wordToStars(this.originalSentence); 
      this.attemptsLeft = 10; 
      this.gameStatus = "in progress"; 
   }

   wordToStars() {
      let gameFeedback = (this.originalSentence).split("")

      gameFeedback.forEach(function (x, i) {
            gameFeedback[i] === " " ? gameFeedback[i] = " " : gameFeedback[i] = "*";
         });
      return gameFeedback
   }

   guess(letter) {

      if (!this.originalSentence.includes(letter)) {
         this.attemptsLeft--

         if (this.attemptsLeft <= 0) {
            this.gameStatus = "lost"
            return this.gameStatus
         }
         return this.gameFeedback
      }

      if (this.originalSentence.includes(letter)) {

         for (let i = 0; i < this.originalSentence.length; i++) { 
            if (this.originalSentence[i] === letter) {
               this.gameFeedback[i] = letter
            }
         }

         if (!this.gameFeedback.includes("*")) {
            this.gameStatus = "won"
            return this.gameStatus
         }
      } 
      return this.gameFeedback
   }
}


