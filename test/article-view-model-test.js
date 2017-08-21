test.describe("ArticleListView", function() {


contents = {
  id: "culture/2017/jul/02/arts-funding-still-favours-the-established-players"
  type: "article"
  sectionId: "culture"
  sectionName: "Culture"
  webPublicationDate: "2017-07-02T19:05:12Z"
  webTitle: "Arts funding still favours the established players | Letters"
  webUrl: https: "www.theguardian.com/culture/2017/jul/02/arts-funding-still-favours-the-established-players"
  apiUrl: https: "content.guardianapis.com/culture/2017/jul/02/arts-funding-still-favours-the-established-players"
  }



var articles = new Article(contents);
var Viewarticle = new ViewArticle(articles);

 test.it("has a article", function() {
   assert.isEqual(ViewArticle._articles, articles);
 });

 test.it("converts each story to html", function() {
   var expectedOutput = "<section><img src=https://i.guim.co.uk/img/media/555d2bcb9fa8ae5235bf486afa89207f137fa41a/0_243_6370_3822/master/6370.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=4d68e7ea9b0c22bcca8486a6c51e32a7><br><a href=http://www.theguardian.com/culture/2017/jul/02/arts-funding-still-favours-the-established-players></a>"Arts funding still favours the established players"<br></section>"
   console.log(storyView.toHtml());
   assert.isEqual(storyView.toHtml(), expectedOutput);
 });

});
