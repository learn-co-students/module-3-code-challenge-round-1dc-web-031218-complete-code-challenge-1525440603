document.addEventListener('DOMContentLoaded', function () {
  const imageId = 9 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

})


let imageData = fetch("https://randopic.herokuapp.com/images/${imageId}")
let image = document.getElementById("image")
let imageName = document.getElementById("name")
let likes = document.getElementById("likes")

imageData.then(response => response.json()).then(json => {
  console.log(json)
image.appendChild(json.url)
//   // imageURL.innerHTML = json.url;
imageName.innerHTML = json.name;

likes.innerHTML = json.like_count;
});

let likeButton = document.getElementById("like_button")

likeButton.addEventListener("click", e => {
  likes += 1
  // debugger
})


