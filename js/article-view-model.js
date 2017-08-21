
(function(exports){
  function ViewArticle(element, articleModel) {
    this._element = element;
    this._articleModel = articleModel;
    this._newsItems = [];
    this._news = null;
    console.log(this._element );
    var self = this;
    exports.addEventListener('hashchange', function(event){
      self.displayItemById(self.findId());
      event.preventDefault();
      return false;
    });
    exports.addEventListener('submit', function(event){
      self.displayAll();
      event.preventDefault();
      return false;
    });
  }
  ViewArticle.prototype = {
    add: function(headline, body, imageUrl, articleUrl) {
      this._newsItems.push(new this._articleModel(headline, body, imageUrl, articleUrl));
    },
    all: function() {
      return this._newsItems;
    },
    alltoHtml: function() {
      return this._newsItems.map(function(item){
          return item.toHtml();
      }).join("<br>");
    },
    findId: function() {
      var id = exports.location.hash.split("/")[1];
      return id;
    },
    displayItemById: function(id) {
      this.render(this._newsItems[id].toHtml());
    },
    displayAll: function() {
      this.render(this.alltoHtml());
    },
    render: function(content) {
        this._element.innerHTML = content;
    },
    getGuardianData: function() {
      var self = this;
      this.getApi("http://content.guardianapis.com/search?to-date=2017-08-20&q=arts&api-key=7923f3f9-b451-49be-99f6-96cf99540f80&show-elements=true&show-fields=body,headline,shortUrl,thumbnail,standfirst",function(apiResponseText){
        self._news = JSON.parse(apiResponseText).response.results;
        console.log(self._news);
        var content = "";
        for(var i=0; i<10; i++) {
            item = self._news[i].fields;
            console.log(item.thumbnail);
            self.add(item.headline, item.body, item.thumbnail, item.shortUrl);
            content += "<div>";
            content += "<img src='" + item.thumbnail + "'>";
            content += "<h4>" + item.headline + "</h4>";
            content += "<a href='#summary/" + i + "'>Read summary</a> | ";
            content += "<a href ='" + item.shortUrl + "'>Read full article</a>";
            content += item.body;
            content += "<div>";
            content += "<hr /><br>";
        }
        self.render(content);
      });
    },
    getApi: function(apiRoute, callback){
      var request = new XMLHttpRequest();

      request.addEventListener('load', dataHandler);
      request.open('GET', apiRoute); //sends to the API you include
      request.send();

      function dataHandler(){
        //this passes "this.responseText" to your callback function
        callback(this.responseText);
      }
    }
  };
  exports.ViewArticle = ViewArticle;
})(this);
