var stringPrinter = function(starterString) {
  $('#output').append(starterString)
}

var funnySentence = function(noun, adjective, verb, adverb) {
  var sentence = `<p>The ${adjective} ${noun} ${verb} ${adverb}.</p>`
  stringPrinter(sentence)
}

// random word generator
// remove inputs

var randNumBetween0and4 = function() {
  var randomNum = Math.floor(Math.random() * 4)
  return randomNum
}

var randomWordGenerator = function() {
  var nouns = ['car', 'cat', 'table', 'tv', 'eclipse']
  var adjectives = ['quiet', 'loud', 'brass', 'tiny', 'cloudy']
  var verbs = ['kicked', 'barked', 'blew', 'grew', 'smashed']
  var adverbs = ['loudly', 'quietly', 'quickly', 'slowly', 'shamefully']
  var randomWordObject = {
    randomNoun : nouns[randNumBetween0and4()],
    randomAdjective : adjectives[randNumBetween0and4()],
    randomVerb : verbs[randNumBetween0and4()],
    randomAdverb : adverbs[randNumBetween0and4()],
  }
  return randomWordObject
}

var autoFunnySentence = function() {
  var randomWordObject = randomWordGenerator()
  funnySentence(randomWordObject.randomNoun, randomWordObject.randomAdjective, randomWordObject.randomVerb, randomWordObject.randomAdverb)
}

autoFunnySentence()
