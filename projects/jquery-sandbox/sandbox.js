var changeAll = function() {
  $('h1').css('color', 'blue')
  $('body').css('background-color', 'red')
  $("#everything").css("font-size", "120%")
  $(".holder").css("border", "2px solid black")
  $("li").css("font-weight", "bold")
  $("h1+p").css("color", "green")
}


$('#change-button').click(function() {
  changeAll()
})
