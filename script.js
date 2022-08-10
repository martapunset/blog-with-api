/*Resources
  http://localhost:3000/posts
  http://localhost:3000/users
  http://localhost:3000/comments

  Home
  http://localhost:3000
  */

function getFetch() {
  for (let i = 0; i < 10; i++) {
    fetch("http://localhost:3000/posts/")
      .then(function (response) {
        return response.json();
      })
      .then(function (posts) {
        document.getElementById("h3").innerHTML = posts[i].title;



      });
  }
}

getFetch();
//method: "GET",
//console.log(fetch("http://localhost:3000/posts/1"))
console.log("hola");
