test.describe("Article", function() {


contents = {
id: "culture/2017/jul/02/arts-funding-still-favours-the-established-players"
type: "Article"
sectionId: "culture"
sectionName: "Culture"
webPublicationDate: "2017-07-02T19:05:12Z"
webTitle: "Arts funding still favours the established players | Letters"
webUrl: https: "www.theguardian.com/culture/2017/jul/02/arts-funding-still-favours-the-established-players"
apiUrl: https: "content.guardianapis.com/culture/2017/jul/02/arts-funding-still-favours-the-established-players"
}

var article = new Article(contents);

  test.it("is a article", function() {
    assert.isTrue(article instanceof article);
  });

  test.it("has a headline", function() {
    assert.isEqual(article.headline(), contents.webTitle);
  });

  test.it("has a link to the original news article", function() {
    assert.isEqual(article.webPublicationDate(), contents.webPublicationDate);
  });

  test.it("has a link to the original news article", function() {
    assert.isEqual(article.webUrl(), contents.webUrl);
  });

  test.it("has an api link"), function() {
    assert.isEqual(article.apiUrl(), contents.apiUrl);
  });

  test.it("has a section name", function() {
    assert.isEqual(article.sectionName(), contents.secitonName);
  });

});
