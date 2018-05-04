document.addEventListener('DOMContentLoaded', function() {
  const imageId = 3 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let json = fetch(imageURL).then(resp => resp.json).then(json => console.log(json));
  
  let imageURLAddress = json.url
  let imageName = json.name
  let numberOfLikes = json.like_count
  let commentsUL = json.comments
  //add image to DOM 
  	let img = new Image();
	let div = document.getElementById('image-card');
	img.onload = function() {
	  div.appendChild(img);
	};

	img.src = imageURL;

	let imageNameHeader = document.createElement("h4")
	imageNameHeader.innerHTML = imageName;
	div.appendChild(imageNameHeader);

	let likesSpan = document.createElement("span")
	likesSpan.innerHTML = "Likes:"
	div.appendChild(likesSpan);

	let numberOfLikesInSpan = document.getElementById("likes")
	numberOfLikesSpan.innerHTML(numberOfLikes)

	//Step 2. 
	//
	//select like button and add eventlistener for click
	let likeBtn = document.getElementById('like_button')

	numberofLikesSpan.addEventListener('click', function(){
		++numberOfLikes;
	})
	//Step 3. 
	//

	fetch("https://randopic.herokuapp.com/likes", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    image_id: 3
  })
})
.then( (response) => { 
   response.json
}).then(json => console.log(json));


	//Step 4. 
	for(comment in commentsUL){
		// make an LI
		let li = document.createElement("LI")
		li.innerHTML(comment.content)
		// get ul
		let ul = document.getElementById("comments")
		// add comment inside ul
		document.ul.appendChild(li)
	}

//Step 5. 
//
fetch("https://randopic.herokuapp.com/comments", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    image_id: 3
    content: `${commentsUL.content}` // comment from form
  })
})
.then( (response) => { 
   response.json
}.then(json => console.log(json));

//clear our comment field?

})

