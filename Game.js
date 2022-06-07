class Game {

   constructor(sentence) {

      this.sentence = sentence;
      this.gameFeedback = this.convertWordToStars(); // To know the current guess status of the game, and use it for the guess function. Also to knoe when you won.
      this.sentenceIntoWords = this.sentence.split(" "); // To create the boxes on the html
      this.numberOfWords = this.sentenceIntoWords.length; // Extra info
      this.attemptsLeft = 10; // To know when you lost.
      this.gameStatus = "in progress";
   }

   guess(letter) {

      if (!this.sentence.includes(letter)) {
         this.attemptsLeft--

         if (this.attemptsLeft <= 0) {
            this.gameStatus = "lost";
            return this.gameStatus
         }
      } 

      this.gameFeedback.forEach((e, i) => {

         if (this.sentence[i] === letter) {
            this.gameFeedback[i] = letter;
         }

         if (!this.gameFeedback.includes("*")){
            this.gameStatus = "won";
            return this.gameStatus;
         }
      })
      
      return this.gameFeedback;
   }

   convertWordToStars() {

      let gameFeedback = (this.sentence).split("")

      gameFeedback.forEach((x, i) => {
         gameFeedback[i] === " " ? gameFeedback[i] = " " : gameFeedback[i] = "*"
      });

      return gameFeedback
   }
}