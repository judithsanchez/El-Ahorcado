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
