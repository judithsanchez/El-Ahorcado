const disneyMovies = [
   "Blanca Nieves y los siete enanos",
   "Pinocho",
   "Fantasía",
   "Dumbo",
   "Bambi",
   "Los tres caballeros",
   "La Cenicienta",
   "Alicia en el país de las maravillas",
   "Peter Pan",
   "La dama y el vagabundo",
   "La bella durmiente",
   "La espada en la piedra",
   "El libro de la selva",
   "Los Aristogatos",
   "Robin Hood",
   "Bernardo y Bianca",
   "El zorro y el sabueso",
   "El caldero mágico",
   "Oliver y su pandilla",
   "La sirenita",
   "La bella y la bestia",
   "Aladdin",
   "El rey león",
   "Pocahontas",
   "El jorobado de Notre Dame",
   "Hércules",
   "Mulán",
]


class Sentence {

   spanishSpecialCharacters = ["á","é","í","ó","ú","ü","Á","É","Í","Ó","Ú","Ü"];
   regularCharacters = ["a","e","i","o","u","u","A","E","I","O","U","U"];
   
   constructor(sentence) {
      this.originalSentence = this.isArrayOrString(sentence) //Can get a random sentence or the user's input
      
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

   toLowerCase(sentence) {
      return sentence.toLowerCase()
   }

   noWhitespaces(sentence) {
      return sentence.replace(/\s/g, '')
   }

   noSpecialCharacters(sentence) {
      const originalSentence = sentence;
      const sentenceArray = originalSentence.split("");

      for (let i = 0; i < sentenceArray.length; i++) {
         for (let j = 0; j < this.spanishSpecialCharacters.length; j++) {
            if (sentenceArray[i] === this.spanishSpecialCharacters[j]) {
               sentenceArray[i] = this.regularCharacters[j]
            }
         }
      }
      return sentenceArray.join("")
   }

   checkForSpecialCharacters(sentence) {
      for (let i = 0; i < this.spanishSpecialCharacters.length; i++) {
   
         if (sentence.includes(this.spanishSpecialCharacters[i])) {
            return true
         }
      }
      return false
   }

   noDuplicatedCharacters(sentence) {
      let originalSentence = sentence;
      let removedCharacters = [...new Set(originalSentence)];
      return removedCharacters.join("")
   }

   separatedIntoWords(sentence) {
      return sentence.split(" ")
   }
}

const randomSentence = new Sentence(disneyMovies)
console.log(randomSentence.originalSentence)
console.log(typeof(randomSentence.originalSentence))
const givenSentenceSingleWord = new Sentence("casa")
console.log(givenSentenceSingleWord.originalSentence)
console.log(typeof(givenSentenceSingleWord.originalSentence))
const givenSentenceMultipleWord = new Sentence("mi casa")
console.log(typeof(givenSentenceMultipleWord.originalSentence))
