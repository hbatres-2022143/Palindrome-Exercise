function Palindrome() {
  const phrase = 'anita lava la tina'
  let formatted = ''
  let upside = ''

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== ' ') {
      formatted += phrase[i]
    }
  }

  for (let i = formatted.length - 1; i >= 0; i--) {
    upside += formatted[i]
  }

  if (formatted === upside) {
    console.log(`"${phrase}" it is a palindrome.`)
  } else {
    console.log(`"${phrase}" it is not a palindrome.`)
  }
}

Palindrome()
