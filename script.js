

  let container1 = document.getElementById("container1")
  let username=[], email=[];




  


/*
const modalBueno=`<div class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
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
        <div>Username: ${users[i].username}</div>
        
        <div>Email: ${users[i].email}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Modify</button>
          <button type="button" class="btn btn-primary">delete</button>
        </div>
      </div>
    </div>
  </div>
</article>`;

*/



function getFetch() {


    fetch("http://localhost:3000/posts/")
      .then(function (response) {
        return response.json();

      })                                              //posts= all the entire posts list
      .then(function (posts) {
        let postsLength=posts.length;

        fetch("http://localhost:3000/users/")  //call to users database
           .then(function (response) {
              return response.json();

          })                                              //posts= all the entire posts list
              .then(function (users) {
                console.log(postsLength)

                 for (let i = 0, j=0; i<postsLength; i++, j++) {
                

                  console.log(i+" "+j)
                 let article = document.createElement("article");  //create article for 10 times
                  article.className = "col";
                  container1.appendChild(article); //add to div claas container1 

                  


                  article.innerHTML= `<div class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
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
                          <div>Username: ${users[j].username}</div>
                          
                          <div>Email: ${users[j].email}</div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Modify</button>
                            <button type="button" class="btn btn-primary">delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>`
          
                //console.log(username[0]);
                  //console.log(posts[i].title)
              }
              
      }
    
  )})
}


    


getFetch();
//method: "GET",
//console.log(fetch("http://localhost:3000/posts/1"))
console.log("hola");




















































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