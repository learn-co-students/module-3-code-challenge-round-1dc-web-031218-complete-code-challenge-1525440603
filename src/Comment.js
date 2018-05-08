let commentsId = 0;

//beongs to image
class Comment {
  constructor(content) {
    this.id = ++commentsId;
    this.content = content;
  }

  save() {
    fetch(commentsURL, {
      method: "POST",
      body: JSON.stringify({
        image_id: 5,
        content: this.content
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
}
