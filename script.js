fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(apiData) {
    console.log(apiData)
  })


/*    let movies = apiData.Search;

    for (let i = 0; i < movies.length; i++); {

    })
console.log(apiData.Search);   */