const imageId = 5; //Enter your assigned imageId here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;
const likeURL = `https://randopic.herokuapp.com/likes/`;
const commentsURL = `https://randopic.herokuapp.com/comments/`;

document.addEventListener("DOMContentLoaded", function() {
  //image has many comments and likes, comments belong to an image, likes belong to an image,
  let store = { images: [], comments: [], likes: [] };
  let likes = store.likes.length;

  fetch(imageURL)
    .then(response => response.json())
    .then(responseJson => {
      let imagevariable = document.getElementById("image");
      imagevariable.src = responseJson.url;
      responseJson.comments.forEach(comment => {
        let commentItem = document.createElement("li");
        document.getElementById("comments").appendChild(commentItem);
        commentItem.innerHTML = comment.content;
      });
    });

  const commentForm = document.getElementById("comment_form");

  commentForm.addEventListener("submit", event => {
    event.preventDefault();
    debugger;
    const commentInput = document.getElementById("comment_input");
    const userComment = document.createElement("li");
    newComment = new Comment(event.target[0].value);
    document.getElementById("comments").appendChild(userComment);
    userComment.innerHTML = commentInput.value;
    newComment.save();
  });

  const likey = document.getElementById("like_button");

  likey.addEventListener("click", event => {
    ++likes;
    const totallikes = document.getElementById("likes");
    totallikes.innerHTML = likes;
  });
});
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
