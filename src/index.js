document.addEventListener('DOMContentLoaded', function() {
  const imageId = 7 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL) //GET request to render image and image info
  	.then(response => response.json()) //get response, convert to json
  	.then(json => {
  		//instantiate image from POJO, assign to variable imageObj
  		let imageObj = new Image(json.id, json.url, json.name, json.like_count, json.comments);
  		return imageObj;
  	})
  	.then((imageObj)=>{ //Put initial image stuff on the DOM
  		//Retrieve relevant DOM nodes
  		let imageNode = document.getElementById('image'); //display
  		let imageTitle = document.getElementById('name'); //title

  		//put imageObj and imageObj name on page
  		imageNode.src = imageObj.url;
  		imageTitle.innerHTML = imageObj.name;
  		updateLikes(imageObj); //displays up to date # of likes

  		displayComments(imageObj.comments); //display current comments
  		return imageObj;
  	})
  	.then((imageObj)=>{ //Implement 'like' feature, front and back end
  		let likeButton = document.getElementById('like_button');

  		//event listener to handle clicking like button
  		likeButton.addEventListener('click', (e)=> {
  			imageObj.likeCount ++;
  			updateLikes(imageObj); //displays up to date # of likes
  			persistLikes(imageObj); //persist the like count
  		})
  		return imageObj;
  	})
  	.then((imageObj)=>{ //Implement comment feature, front and back end
  		//relevant DOM nodes
  		let commentForm = document.getElementById('comment_form');
  		let submitCommentButton = commentForm.children[1];

  		//event handler to handle clicking comment submit
  		submitCommentButton.addEventListener('click', (e)=>{
  			e.preventDefault(); //prevent re-direct
  			let commentInput = document.getElementById('comment_input');
  			if(commentInput.value != ""){ //Must have something in field
  				let commentObj = {
  					content: `${commentInput.value}`
  				}
  				addComment(commentObj); //update the DOM
  				persistComment(commentObj); //Persist the comment
  				commentInput.value = ""; //refresh the input field 
  			}else{ //if there is nothing in the comment field
  				window.alert("No empty comments allowed");
  			}
  		})
  	})

})

//Does POST request with a commentObj to persist comment
function persistComment(commentObj){
	const imageId = 7; //Enter your assigned imageId here
	const commentsURL = `https://randopic.herokuapp.com/comments/`;
	let body = {
	  	image_id: imageId,
	  	content: `${commentObj.content}`
	}
	//POST request
	fetch(commentsURL, {
		body: JSON.stringify(body),
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
}

//Displays most recently added comment on DOM
function addComment(commentObj){
	let commentList = document.getElementById('comments'); //comments
	let listItem = `<li>${commentObj.content}     <button type="button">Delete</button></li>`; 
	commentList.innerHTML += listItem;
}

//Does POST request with imageObj
function persistLikes(imageObj){
  const imageId = 7 //Enter your assigned imageId here
  const likeURL = `https://randopic.herokuapp.com/likes/`

  let body = {
  	image_id: imageId,
  	like_count: `${imageObj.likeCount}`
  }
  //POST request
  fetch(likeURL, {
  	body: JSON.stringify(body),
  	headers:{ 
  		'Accept': 'application/json',
  		'Content-Type': 'application/json'
  	},
  	method: 'POST'
  })
}

//Updates DOM to display right # of likes
function updateLikes(imageObj){
	let likeSpan = document.getElementById('likes'); //like #
	likeSpan.innerHTML = imageObj.likeCount;
}

//Initial function to display all comments received from API
function displayComments(commentArr){	
	let commentList = document.getElementById('comments'); //comments
	commentArr.forEach(comment => {
		let listItem = `<li>${comment.content}     <button type="button">Delete</button></li>`;
		commentList.innerHTML += listItem;
	})
}
