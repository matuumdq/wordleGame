import words from '../words.json'

export default { 
    word: '',
    guesses: [],
    currentGuess: 0,
    get won() {
        return this.guesses[this.currentGuess - 1] === this.word
    },
    get lost () {
        return this.currentGuess===6
    },
    get allGuesses(){
        return this.guesses.slice(0, this.currentGuess).join('').split('')
    },
    get exactGuesses(){
        return (
            this.word
                .split('')
                // If any Guess include this letter
                .filter((letter, i) => {
                    return this.guesses
                        .slice(0, this.currentGuess)
                        .map((word) => word[i])
                        .includes(letter)
                })
        )
    },
    get inexactGuesses(){
        return this.word
            .split('')
            .filter((letter) => this.allGuesses.includes(letter))
    },
    init(){
        this.word = words[Math.trunc(Math.random()*words.length)]
        this.guesses.replace(new Array(6).fill(''))
        this.currentGuess = 0
    },
    submitGuess() {
        if (words.includes(this.guesses[this.currentGuess])) {
          this.currentGuess += 1
        } else {
            this.currentGuess += 1
        } 
      },
    handleKyeUp(e) {
        if (this.won || this.lost) {
            return
        }
        if(e.key === 'Enter'){
            this.submitGuess()
        }

        if (e.key === 'Backspace'){
            this.guesses[this.currentGuess] = this.guesses[this.currentGuess]
            .slice(
                0, 
                this.guesses[this.currentGuess].length - 1
            )
        }
        if (this.guesses[this.currentGuess].length < 5 && e.key.match(/^[A-z]$/)){
            this.guesses[this.currentGuess] =
                this.guesses[this.currentGuess] + e.key.toLowerCase()
        } 
    },


}