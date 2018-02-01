function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var post = document.getElementById("postText").value;


}
