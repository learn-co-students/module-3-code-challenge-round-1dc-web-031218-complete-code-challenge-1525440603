document.addEventListener('DOMContentLoaded', function() {
  const imageId = 5 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

})


//image has many comments and likes, comments belong to an image, likes belong to an image,
let store = {images: [],  comments: [], likes: []}
let likes = store.likes.length

      fetch(`https://randopic.herokuapp.com/images/5`)
        .then(response => response.json())
        .then(responseJson =>
          responseJson.forEach(
            pic =>
              new Image(pic.name, pic.like_count, pic.comments)
          )
        );

        fetch(`https://randopic.herokuapp.com/comments/`)
          .then(response => response.json())
          .then(response =>
            response.forEach(
              comment =>
                new Comment(comment.content)
            )
          );


      const commentForm = document.getElementById('comment_form')

      commentForm.addEventListener('submit', event => {
        event.preventDefault()
        const commentInput = document.getElementById('comment_input')
        const userComment= document.createElement('li')
        document.getElementById('comments').appendChild(userComment)
        userComment.innerHTML = commentInput.value
       });


const likey = document.getElementById('like_button')

likey.addEventListener('click', event  => {
++likes
const totallikes = document.getElementById('likes')
totallikes.innerHTML = likes


})



// const sampleData =
// {
//   "id": 1,
//   "url": "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg",
//   "name": "Science Fair",
//   "like_count": 0,
//   "comments": [
//     {
//       "id": 1,
//       "content": "first comment!",
//       "created_at": "2017-09-27T18:18:05.623Z",
//       "updated_at": "2017-09-27T18:18:05.623Z"
//     }
//   ]
// }
