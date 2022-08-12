

let container1 = document.getElementById("container1")
let username = [], email = [];
let count = 0;


fetch("http://localhost:3000/users/")  //call to users database
  .then(function (response) {
    return response.json();

  })
  .then(users => {
    for (let j = 0; j < users.length; j++) {  //filling arrays with user data
      username.push(users[j].username)
      email.push(users[j].email)
    }
  });



function getFetch() {
  fetch("http://localhost:3000/posts/")
    .then(response => {
      return response.json();

    })                  //posts= all the entire posts list
    .then(posts => {

      for (let i = 0; i < posts.length; i++) {
        
        let article = document.createElement("article");  //create article for 10 times
        article.className = "col";
        container1.appendChild(article); //add to div claas container1 
        article.innerHTML = `<div class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
                  <h5 id="h5">${posts[i].title}</h5> </div>
                  <i onclick="" type="button" class="fa-solid fa-trash-can"></i>  
                  <i onclick="" type="button" class="fa-solid fa-pen-to-square"></i>
                  <hr>
                  
                  <article class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">${posts[i].title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          ${posts[i].body}
                          <div class="info-user">
                             <h6>User</h6>
                             <div>Username: ${getUsername(i)}</div>
                              <div>Email: ${getEmail(i)}</div><hr>
                              <h5>Comments</h5>
                          </div>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Modify</button>
                            <button type="button" class="btn btn-primary">delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </article>`
      }
    })
}         
window.onload = getFetch();

console.log("hola");

function getEmail(index) { //function to return posts email
  return email[index];

}

function getUsername(index) { //function to return posts username
  return username[index]
}




















































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