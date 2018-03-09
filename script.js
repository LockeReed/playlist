fetch("https://omdb-api.now.sh/?apikey=702b3bb5&s=freaks");
.then(function(responce) {
    return responce.json();
  })
  .then(function(mydata) {
    cosolelog(mydata);
  })