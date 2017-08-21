(function(exports){
  var id = 0
   function ArticleModel(contents) {
     this._headline = contents.webTitle;
     this._imageUrl = contents.imageUrl;
     this._webUrl = contents.webUrl;
     this._body = contents.body;
     this._ArticleModelUrl = contents.ArticleModelUrl;
     this._id = contents.id ++;
   };

   ArticleModel.prototype.headline = function(){
     return this._headline;
   };

   ArticleModel.prototype.imageUrl = function(){
     return this._imageUrl;
   };

   ArticleModel.prototype.webUrl = function(){
     return this._webUrl;
   };

   ArticleModel.prototype.body = function (){
     return this._body;
   };

   ArticleModel.prototype.articleUrl = function(){
     return this._articleUrl;
   };

   ArticleModel.prototype.toHtml = function (){
     var content = "<div>";
     console.log(this.imageUrl());
     content += "<img src='" + this.imageUrl() + "'>";
     content += "<h2>" + this.headline() + "</h2>";
     content += "<a href ='#summary" + this.id() + "'>News Summary</a> | ";
     content += "<a href ='" + this.articleUrl() + "'>Read full article</a>";
     content += this.body();
     content += "<div>";
     content += "<hr /><br>";
     return content;
   };

   exports.ArticleModel = ArticleModel;
})(this);
