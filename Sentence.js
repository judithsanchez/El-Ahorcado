class Sentence {
   
   constructor(sentence) {

      this.sentence = this.isArrayOrString(sentence)
      this.lowerCase = this.sentence.toLowerCase()
      // this.noSpecialChracters = 
      this.separatedIntoWords = this.sentence.split(" ")
      this.noSpaces = this.sentence

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
}


const pruebaArray = [
   ["abc"],
   ["def"],
   ["ghi"]
]

const pruebaString = "hola"


const test = new Sentence(pruebaArray)
console.log(test.sentence)

const test1 = new Sentence(pruebaString)
console.log(test1.sentence)








