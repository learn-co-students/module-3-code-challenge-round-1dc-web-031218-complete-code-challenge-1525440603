let imagesId = 0;

class Image {
  constructor(id, url, like_count, comments) {
    this.id = ++imagesId;
    this.url = url;
    this.like_count = like_count;
    this.comments = [];
    store.images.push(this);
  }
}
