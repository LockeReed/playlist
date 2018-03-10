fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(apiData) {
    console.log(apiData)
  })

//document.getElementById("track").style.zIndex = "0";
document.getElementsByClassName('album_container').style.zIndex = "1";
document.getElementById("track").style.right = "-100px";





/*    let movies = apiData.Search;

    for (let i = 0; i < movies.length; i++); {

    })
console.log(apiData.Search);   */