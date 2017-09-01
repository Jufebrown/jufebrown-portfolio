var getPosts = $.ajax('posts.json')

var handlePost = function(post) {
  var title = "<h3>" + post.title + "</h3>"
  var content = "<p>" + post.body + "</p>"
  var blurb = "<div class='post'>" + title + content + "</div>"

  $( ".blog-content" ).append( blurb )
}

getPosts.then(
    (data) => data.forEach(handlePost)
)
