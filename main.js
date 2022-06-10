const encanto = [
   "La familia Madrigal",
   "No se habla de Bruno",
   "Pepa",
   "Antonio",
   "Félix",
   "Abuela Alma",
   "Casita",
   "Las arepas son de Venezuela",
   "Viva Colombia",
   "Encanto",
   "Mirabel Madrigal"
]

class Sentence {

   spanishSpecialCharacters = ["á","é","í","ó","ú","ü","Á","É","Í","Ó","Ú","Ü"];
   regularCharacters = ["a","e","i","o","u","u","A","E","I","O","U","U"];
   
   constructor(sentence) {
      this.originalSentence = this.isArrayOrString(sentence) //Can get a random sentence from an array (strings or array) or the user's input
      
      this.numberOfWords = this.separatedIntoWords(this.originalSentence).length // Create <div>
      this.totalCharacters = this.noWhitespaces(this.originalSentence).length // Create <p>

      this.numberIndividualChracters = this.noDuplicatedCharacters(this.noWhitespaces(this.originalSentence)).length // Clue
      this.areThereSpecialCharacters = this.checkForSpecialCharacters(this.originalSentence) // Clue
   }

   isArrayOrString(sentence) { 
      if (!Array.isArray(sentence) && typeof(sentence) === "string") {
         return sentence;
      }
      if (Array.isArray(sentence)) {
         const oneSentence = sentence[Math.floor(Math.random() * sentence.length)];
         return oneSentence.toString()
      }
   }

   toLowerCase() { //Lower case sentence:  otra más
      return this.originalSentence.toLowerCase()
   }

   noWhitespaces() { //Sentence without spaces:  Holaquétal
      return this.originalSentence.replace(/\s/g, '')
   }

   checkForSpecialCharacters() { //Any special characters?:  false
      for (let i = 0; i < this.spanishSpecialCharacters.length; i++) {
         if (this.originalSentence.includes(this.spanishSpecialCharacters[i])) {
            return true
         }
      }
      return false
   }

   noSpecialCharacters() { //No special characters:  Hola que tal
      const sentenceArray = this.originalSentence.split("");

      for (let i = 0; i < sentenceArray.length; i++) {
         for (let j = 0; j < this.spanishSpecialCharacters.length; j++) {
            if (sentenceArray[i] === this.spanishSpecialCharacters[j]) {
               sentenceArray[i] = this.regularCharacters[j]
            }
         }
      }
      return sentenceArray.join("")
   }

   noDuplicatedCharacters() { //No duplicated characters:  Hola quét
      let removedCharacters = [...new Set(this.originalSentence)];
      return removedCharacters.join("")
   }

   separatedIntoWords() { // Separated into words:  (3) ['Hola', 'qué', 'tal']
      return this.originalSentence.split(" ")
   }
}

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

const currentSentence = [];
const currentGame = [];
let gameModeCounter = 0;
let gameModeoptions = ["inputOwnSentence", encanto]

function nextGameMode(){

   if (gameModeCounter === (gameModeoptions.length - 1)) {

      document.getElementById(`gameMode${gameModeCounter}`).style.display = "none";
      gameModeCounter = 0;
      document.getElementById(`gameMode${gameModeCounter}`).style.display = "flex";

   } else {

      document.getElementById(`gameMode${gameModeCounter}`).style.display = "none";
      gameModeCounter++
      document.getElementById(`gameMode${gameModeCounter}`).style.display = "flex";
   }
}

function previousGameMode(){

   if (gameModeCounter === 0) {

      document.getElementById(`gameMode${gameModeCounter}`).style.display = "none";
      gameModeCounter = gameModeoptions.length - 1;
      document.getElementById(`gameMode${gameModeCounter}`).style.display = "flex";

   } else {

      document.getElementById(`gameMode${gameModeCounter}`).style.display = "none";
      gameModeCounter--
      document.getElementById(`gameMode${gameModeCounter}`).style.display = "flex";
   }
}




function getSentence(){

   if (gameModeCounter === 0) {

      const userSentence = document.getElementById("user-sentence").value;

      if (userSentence.length <= 0 || userSentence.length > 30) {
         alert("Necesito entre 3 y 30 letras")
         return

      } else {

         const newSentence = new Sentence(userSentence)
         currentSentence.push(newSentence)

         const newGame = new Game(newSentence.originalSentence)
         currentGame.push(newGame) 
      }

   } else {

      const newSentence = new Sentence(gameModeoptions[gameModeCounter])
      currentSentence.push(newSentence)

      const newGame = new Game(newSentence.originalSentence)
      currentGame.push(newGame) 
   } 
}