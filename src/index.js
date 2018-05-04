
document.addEventListener('DOMContentLoaded', function() {
  const imageId = 8 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


  //sets image
  let imageLocation = document.getElementById('image')
  imageLocation.setAttribute('src', `${imageObj.url}`);

  let likeStart = document.getElementById('likes')
  likeStart.innerHTML = imageObj.like_count



  //loads comments
  let allComments = [];
  imageObj.comments.forEach(comment => {
    allComments.push(`<li>${comment.content}</li>`)
  })
  let commentList = document.getElementById('comments')
  commentList.innerHTML = allComments.join('')

//adds comments
  let commentForm = document.getElementById('comment_form')
  commentForm.addEventListener('submit', e=> {
    e.preventDefault()
    allComments.push(`<li>${e.srcElement[0].value}</li>`)


    let commentList = document.getElementById('comments')
    if(e.srcElement[0].value !== ''){ //prevents empty comments
      commentList.innerHTML += `<li>${e.srcElement[0].value}</li>`
    }
    // debugger;
    //this would need to persist to database too
  })


//increases Likes (not persisting to database)
  let likeButton = document.getElementById('like_button')
  // debugger;
  likeButton.addEventListener('click', e => {
    let likeCount = document.getElementById('likes')
    let counter = Number.parseInt(likeCount.innerText)
    counter += 1
    likeCount.innerHTML = counter
    //add like count to obj
    //
    imageObj.like_count = counter
    e.preventDefault()

  })




//my fetch wasnt populating the image before my JS was tring
//to access it so i decided to just manually add it for testing
// could use the imageURL outside of the eventlistener becuase of
//url variables scope
//

  // fetch(imageURL)
  // .then(response => response.json())
  // .then(json =>
  //   new myImage(json.url, json.name, json.like_count, json.comments)
    // let currImage = myImage.all[0]


})

//if i go to the console without a debugger I can see
// the image, but when i tried running the code in the
// DOMContentLoaded above it would say undefined so
// i added the imageObj for testing and to get the
//  like and comment functionality working
fetch(`https://randopic.herokuapp.com/images/8`)
.then(response => response.json())
.then(json =>
  new myImage(json.url, json.name, json.like_count, json.comments))

  let imageObj = {"id":8,"url":"http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg","name":"Science Fair","like_count":2,"comments":[{"id":5710,"content":"first comment!","image_id":8,"created_at":"2018-05-04T12:08:22.558Z","updated_at":"2018-05-04T12:08:22.558Z"}]}


//added my class here becuase it was saying undefined
//not sure if this was also becuase of my fetch issue
//and the page trying to run before fetching the data
//and actually making the myImage
class myImage {
  constructor(url, name, likes, comments) {
    this.url = url
    this.name = name
    this.likes = likes
    this.comments = comments

    myImage.all.push(this)
  }
}
myImage.all = [];
