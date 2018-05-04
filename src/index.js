let numLikes = 0
let image = {}
document.addEventListener('DOMContentLoaded', function() {
  const imageId = 10 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageName = document.getElementById("name")
  const findImage = document.getElementById("image")



  fetch(imageURL)
   .then(response => response.json())
   .then(function(json){
    findImage.src = json.url
    imageName.innerHTML = json.name
    image = new Image(imageId, imageURL, json.name, json.like_count, json.comments)
    setUpPage();
  })

   const commentBtn = document.getElementById("comment-button")
   const likeBtn = document.getElementById("like_button")
   const commentText = document.getElementById("comment_input")
   const placeToAddComments = document.getElementById("comments")
   const likesText = document.getElementById("likes")

   commentBtn.addEventListener('click', function(e){
    e.preventDefault();
    const prepComment = document.createElement('li')
    const createdComment = new Comment(commentText.value)
    image.comments.push(createdComment)
    prepComment.innerHTML = createdComment.content
    placeToAddComments.appendChild(prepComment)
    commentText.value = "";
  })

  likeBtn.addEventListener('click', function(e){
    likesText.innerHTML = ++image.likes;
  })

})


function setUpPage(){
  //setUp comments
  for(var el of image.comments){
    console.log(el.content)
    const prepComment = document.createElement('li')
    prepComment.innerHTML = el.content
    document.getElementById("comments").appendChild(prepComment)
  }
  //setUp likes
  document.getElementById("likes").innerHTML = image.likes
}
