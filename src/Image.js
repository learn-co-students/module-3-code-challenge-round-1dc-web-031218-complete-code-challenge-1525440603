class Image {
  constructor(url, name, likes, comments) {
    this.url = url
    this.name = name
    this.likes = likes
    this.comments = comments

    myImage.all.push(this)
  }

}
myImage.all =[];
