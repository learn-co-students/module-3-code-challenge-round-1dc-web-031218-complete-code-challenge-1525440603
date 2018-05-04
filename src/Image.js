class Image {
  constructor(url, name, like_count, comments) {
    this.id = ++imgId;
    this.url = url;
    this.name = name;
    this.like_count = like_count;
    this.comments = comments;
    store.images.push(this);
  }
}
