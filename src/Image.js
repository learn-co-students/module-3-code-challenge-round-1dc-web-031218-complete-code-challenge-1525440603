class Image {
  constructor(id, url, name, likeCount = 0, comments = []){
  	this.id = id;		
	this.url = url;
	this.name = name;
	this.likeCount = likeCount;
	this.comments = comments;
  }
}
