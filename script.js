/*Resources
  http://localhost:3000/posts
  http://localhost:3000/users
  http://localhost:3000/comments

  Home
  http://localhost:3000
  */


  fetch("http://localhost:3000/posts/2", {
  method:"GET",
})

    .then(function(response){

       return response.json();


})
.then(function(json){
  console.log(json)
  document.getElementById("h3").innerHTML=json.title;
});


//console.log(fetch("http://localhost:3000/posts/1"))
//console.log("hola");