

  let container1 = document.getElementById("container1")

>>>>>>> develop
function getFetch() {
  for (let i = 0; i < 10; i++) {

    let article = document.createElement("article");  //create article for 10 times
    article.className = "col";
    container1.appendChild(article); //add to div claas container1 


    fetch("http://localhost:3000/posts/")
      .then(function (response) {
        return response.json();

      })                                              //posts= all the entire posts list
      .then(function (posts) {
        article.innerHTML=`<div class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <h5 id="h5">${posts[i].title}</h5> </div>
           
           <i onclick="" type="button" class="fa-solid fa-trash-can"></i>  
           <i onclick="" type="button" class="fa-solid fa-pen-to-square"></i>
           
 <hr>`
        console.log(posts[i].title)

      });
  }
}

getFetch();
//method: "GET",
//console.log(fetch("http://localhost:3000/posts/1"))



































































/*Resources
  http://localhost:3000/posts
  http://localhost:3000/users
  http://localhost:3000/comments

  Home
  http://localhost:3000
  */



const modal = `<!-- Button trigger modal -->
  <div class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <h3 id="h3">TITLE POST</h3>  <!-- InnerHTML loop -->
</div>
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</div><hr>`