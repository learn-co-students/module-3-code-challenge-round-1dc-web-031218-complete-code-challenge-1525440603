class Comment {
  constructor(content, image) {
    this.id = ++commentId;
    this.content = content;
    if(image) {
      this.imageId = image.id;
    }
    store.comments.push(this);
  }
}
