document.addEventListener('DOMContentLoaded', function() {
  const imageId = 6 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  // ************ api
  let requestResponse = fetch(imageURL);

  requestResponse.then(response => response.json()).then(responseJson => {
    console.log("response json", responseJson);
    let imageTag = document.getElementById("image");
    let imageName = document.getElementById("name");
    let likesSpan = document.getElementById("likes");
    let commentList = document.getElementById("comments");

    imageTag.src = responseJson.url;
    imageName.innerHTML = responseJson.name;
    likesSpan.innerHTML = responseJson.like_count;

    responseJson.comments.forEach(comment => {
      let commentLi = document.createElement("li");
      let commentString = `<p>[Comment ID: ${comment.id}, Posted: ${comment.created_at}]</p><p style="color: red;">${comment.content}</p>`
      commentLi.innerHTML = commentString;
      commentList.appendChild(commentLi);
    })
  }); // <-- end of then-chain




  // ************ dom manipulation

// like button event listener
  let likeButton = document.getElementById("like_button");
  let likesSpan = document.getElementById("likes");

  likeButton.addEventListener("click", event => {
    // prevet default & stop propagation
    event.preventDefault();
    event.stopPropagation();

    // **** optimistic rendering here:
    let currentLikesCounter = parseInt(likesSpan.innerHTML);
      //increase counter by one
      currentLikesCounter++;
      // re-render
      likesSpan.innerHTML = currentLikesCounter;

    // **** database updates here
    fetch('https://randopic.herokuapp.com/likes', {
      method: "POST",
      body: {image_id: imageId},
      Headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }); // <-- end of fetch

  }); // <-- end of likeButton.addEventListener

// submit button event listener
  let commentButton = document.getElementById("comment_button");

  commentButton.addEventListener("click", event => {
    // prevent default and stop propagation
    event.preventDefault();
    event.stopPropagation();

    // **** optimistic rendering here:
    //append each comment from seachBox.value to div below form as li
    let commentInput = document.getElementById("comment_input");
    let commentList = document.getElementById("comments");
    let commentLi = document.createElement("li");
    commentLi.innerHTML = commentInput.value;

    commentList.appendChild(commentLi);

    // clear the comment input field of inputted value
    commentInput.value = "";
    commentInput.placeholder = "Add Comment";

    // **** database updates here
    let commentForDatabase = commentList.children[commentList.children.length - 1].innerHTML;
    debugger;
    fetch("https://randopic.herokuapp.com/comments", {
      method: "POST",
      body: {
        image_id: imageId,
        content: commentForDatabase,
      },
      Headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    }); // <-- end of fetch

  }); // <-- end of commentButton.addEventListener
}); // <-- end of document.addEventListener
