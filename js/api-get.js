(function(exports) {
  function getApi(apiRoute, callback){
    var request = new XMLHttpRequest();

    request.addEventListener('load', dataHandler);
    request.open('GET', apiRoute); //sends to the API you include
    request.send();

    function dataHandler(){
      //this passes "this.responseText" to your callback function
      callback(this.responseText);
    }
  }
  exports.getApi = getApi;
})(this);
