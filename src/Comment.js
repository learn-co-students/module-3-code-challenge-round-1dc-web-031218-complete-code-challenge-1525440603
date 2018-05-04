
let commentsId = 0

//beongs to image
class Comment {
  constructor(content){
    this.id = ++commentsId
    this.content = content
    store.comments.push(this)
  }
}
