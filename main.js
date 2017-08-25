var contactArray = [
  '<li><a href="https://github.com/Jufebrown">Github</a></li>',
  '<li><a href="https://www.linkedin.com/in/jufe-brown-tsai-3a2701126/">linkedIn</a></li>'
]

// var i = 0
//
//
// var appendStrings = function(arr, element) {
//   while (i < arr.length) {
//     $('#contact-list').append('<' + element + '>' + arr[i] + '</' + element + '>')
//     // (`<${element}>${arr[i]}</${element}`)
//     i++
//   }
// }

// var appendStrings = function(arr, element) {
//   for(var i = 0; i < arr.length; i++) {
//     $('#contact-list').append('<' + element + '>' + arr[i] + '</' + element + '>')
//   }
// }


// appendStrings(contactArray, 'li')


contactArray.forEach(function(item) {
  $('#contact-list').append(item)
})
