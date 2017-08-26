var contactArray = [
  '<li><a href="https://github.com/Jufebrown">Github</a></li>',
  '<li><a href="https://www.linkedin.com/in/jufe-brown-tsai-3a2701126/">linkedIn</a></li>'
]

var contactObj = {
    "name": {
        "firstName": "Professor",
        "lastName": "Chaos"
    },
    "email": "professor@professorchaos.com",
    "twitter": "@ProfChaos",
    "quote": "Prepare to meet thy doom"
}

contactObj['phone'] = '555-555-5555'
contactObj['facebook'] = 'myfacebook'

var quote = 'Carpe Diem'
contactObj['quote'] = quote

contactObj.quote = [
    "Prepare to meet thy doom",
    "Nobody expects Professor Chaos",
    "Bow before the power of the DARK SIDE"
]

// contactObj.getGithub = function() {
//   return contactObj.github
// }

console.log(contactObj)

var elementLister = function(contactElement) {
  debugger
  var listString = "<li>" + contactElement + "</li>"

  if (Array.isArray(contactElement)) {
    listString = "<ol>"

    contactElement.forEach(function(element) {
      listString += "<li>" + element + "</li>";
    })

    listString += '</ol>'

  } else if(typeof contactElement === "object"){
    listString = "<li>";

    for(var element in contactElement){
      debugger
      listString += contactElement[element] + " ";
    }

    listString += "</li>";
  }

  $("#contact-list").append(listString);
};

// for(var contactType in contactObj){
//   elementLister( contactObj[contactType] );
// }




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
