

class Sentence {
   
   constructor(list) {
      this.list = list;
      this.sentence = this.getSentence(this.list)
      this.lowerCaseSentence = this.sentence.toLowerCase()
      this.numberOfletters = this.sentence.length;
      this.numberOfwords = (this.sentence.split(" ")).length
   }

   getSentence() {
      let sentence = this.list[Math.floor(Math.random() * this.list.length)];
      return sentence.toLowerCase();
   }
}

const sentence = new Sentence("hola")
const sentence1 = new Sentence(["hola","que","tal"])

console.log(sentence.sentence)
console.log(sentence.lowerCaseSentence)
console.log(sentence.numberOfwords)
console.log(sentence1.sentence)
console.log(sentence1.lowerCaseSentence)
console.log(sentence1.numberOfwords)