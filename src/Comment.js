let commentId = 0
class Comment {
  constructor(content){
    this.content = content
    this.id = ++commentId
  }
}
