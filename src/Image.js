
let imagesId = 0

class Image {
constructor(id, name, like_count, comments){
  this.id = ++imagesId
  this.name = name
  this.like_count = like_count
  this.comments = []
  store.images.push(this)
}


}
