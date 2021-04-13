const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    const response = capitalizedTokens.join(' ');
    return response;
  });
}

// const titleCased = (sentences) => {
//   const result =sentences.map(sentence => {
//     const words = sentence.split(" ")
//     const capitalized = words.map(word => {
//       const firstCharCapitalized = word[0].toUpperCase()
//       const theRest = word.slice(1)
//       return firstCharCapitalized + theRest
//     })
//     return capitalized.join(" ")
//   })
//   return result;
// }