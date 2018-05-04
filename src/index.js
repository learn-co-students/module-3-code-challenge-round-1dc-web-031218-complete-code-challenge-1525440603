let store = {images: [], comments: []}

let imgId = 0;
let commentId = 0;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('image_card').style.backgroundColor = "lightgray"
  const imageId = 2 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let imageTag = document.getElementById('image')
  let imageName = document.getElementById('name')
  let likeNumber = document.getElementById('likes')
  let likeButton = document.getElementById('like_button')
  let commentBox = document.getElementById('comment_input')
  let commentForm = document.getElementById('comment_form')
  let commentList = document.getElementById('comments')

  let likeCount = 0;

  fetch(imageURL)
    .then(r => r.json())
    .then(json => {
      // console.log(json);
      let newImg = new Image(json.url, json.name, json.like_count, json.comments);
      imageTag.src = newImg.url
      imageName.innerText = json.name
      likeNumber.innerText = json.like_count
      likeCount = parseInt(likeNumber.innerText)
      json.comments.forEach(comment => {
        new Comment(comment.content, newImg)
        commentList.innerHTML += `<li>${comment.content}</li>`
      })
      // store.comments.forEach(comment => {
      //   commentList.innerHTML += `<li>${comment.content}</li>`
      // })
      // debugger
    })

  likeButton.addEventListener('click', e => {
    likeCount+=1
    likeNumber.innerText = likeCount
  })

  commentForm.addEventListener('submit', e => {
    commentList.innerHTML += `<li>${commentBox.value}</li>`
    e.preventDefault()
    // debugger
    new Comment(commentBox.value)
  })
})
