class Sentence {
   
   constructor(sentence) {

      this.sentence = this.isArrayOrString(sentence)

      this.lowerCase = this.sentence.toLowerCase()
      this.noWhitespace = this.lowerCase.replace(/\s/g, '')
      this.noSpecialChracters = this.removeSpecialCharacters(this.noWhitespace)

      this.separatedIntoWords = this.sentence.split(" ")
      

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

   removeSpecialCharacters(sentence) {

      const specialCharacters = ["á","é","í","ó","ú","ü","Á","É","Í","Ó","Ú","Ü"];
      const regularCharacters = ["a","e","i","o","u","u","A","E","I","O","U","U"];

      const originalSentence = sentence;
      const sentenceArray = originalSentence.split("");

      for (let i = 0; i < sentenceArray.length; i++) {
         for (let j = 0; j < specialCharacters.length; j++) {
            if (sentenceArray[i] === specialCharacters[j]) {
               sentenceArray[i] = regularCharacters[j]
            }
         }
   
      }
   
      return sentenceArray.join("")
   }
}


const pruebaArray = [
   ["Abc def ghi"],
   ["Jkl mno pqr"],
   ["Stu vwx yz"]
]

const pruebaString = "hola Qué tal"


const test = new Sentence(pruebaArray)
// console.log(test.sentence)
// console.log(test.lowerCase)
// console.log(test.separatedIntoWords)
console.log(test.noWhitespace)
console.log(test.noSpecialChracters)


const test1 = new Sentence(pruebaString)
// console.log(test1.sentence)
// console.log(test1.lowerCase)
// console.log(test1.separatedIntoWords)
console.log(test1.noWhitespace)
console.log(test1.noSpecialChracters)






