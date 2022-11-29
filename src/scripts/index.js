const postList = document.querySelector(".posts-list")

const sugesFollow = document.querySelector(".follow-sugestions-list")

const newPost = document.querySelector(".btn-postar")

const nameNewPost = document.querySelector(".name")
// console.log(nameNewPost.innerText)
const ocupationNewPost = document.querySelector(".ocupation")

const imgNewPost = document.querySelector(".picture")

const titleNewPost = document.querySelector(".input-all")

const textNewPost = document.querySelector(".input-post")

function createFollowList(array){

    sugesFollow.innerHTML = ""

    array.forEach((element) => {

        if(sugestUsers.includes(element.id)){
        
        const cardFollowList = document.createElement("li")
        const headerFollowList = document.createElement("div")
        headerFollowList.classList.add("follow-sugestion")
        const imageUserFollowList = document.createElement("img")
        const divNameOcuppationFollowList = document.createElement("div")
        const nameFollowList = document.createElement("h3")
        const ocuppationFollowList = document.createElement("p")
        const btnFollowList = document.createElement("button")
        btnFollowList.classList.add("btnFollow")
        
        btnFollowList.setAttribute("id", `${array.indexOf(element)}f`)
        btnFollowList.addEventListener("click", ()=>{
          btnFollowList.getAttribute("id")
          document.getElementById(`${array.indexOf(element)}f`).classList.toggle("following")

          if(btnFollowList.classList.value.includes("following")){
            btnFollowList.innerText = "Seguindo"
          }else{
            btnFollowList.innerText = "Seguir"
          }

          })
          
        btnFollowList.innerText = "Seguir"
        imageUserFollowList.src = element.img
        nameFollowList.innerText = element.user
        ocuppationFollowList.innerText = element.stack

        sugesFollow.appendChild(cardFollowList)
        cardFollowList.appendChild(headerFollowList)
        headerFollowList.appendChild(imageUserFollowList)
        headerFollowList.appendChild(divNameOcuppationFollowList)
        divNameOcuppationFollowList.appendChild(nameFollowList)
        divNameOcuppationFollowList.appendChild(ocuppationFollowList)
        cardFollowList.appendChild(btnFollowList)
        }
    });
}

createFollowList(users)

function createPostList(user, post){

    postList.innerHTML = ""

    for(let i = 0; i < user.length; i++){
        for(let y = 0; y < post.length; y++){
         if (user[i].id == post[y].user){

    const cardPostList = document.createElement("li")
    const divPostList = document.createElement("div")
    divPostList.classList.add("post")
    const imagePostList = document.createElement("img")
    const divNameOcuppationPostList = document.createElement("div")
    const namePostList = document.createElement("h3")
    const ocupationPostList = document.createElement("p")
    const divBtnOpenPost = document.createElement("div")
    divBtnOpenPost.classList.add("btn-curtir")
    const btnOpenPost = document.createElement("button")
    btnOpenPost.setAttribute("data-control-modal","modal-post")
    btnOpenPost.classList.add("btn-abrir-post")
    btnOpenPost.addEventListener("click", ()=>{

        const openPost = document.querySelector("#modal-post")
        openPost.innerHTML=`<div class="modal">
        <div class="modal-header">
          <img src="${user[i].img}" alt="imagem do usuário">
          <div>
            <h3>${user[i].user}</h3>
            <p>${user[i].stack}</p>
          </div>
          <button class="btn-fechar-post"><strong>X</strong></button>
        </div>
        <h3>${post[y].title}</h3>
        <p>${post[y].text}</p>
      </div>`

        btnOpenPost.getAttribute("data-control-modal")
        document.getElementById("modal-post").classList.toggle("show-modal")

        const closeModal = document.querySelector(".btn-fechar-post")

        closeModal.addEventListener("click", ()=>{
        closeModal.getAttribute("data-control-modal")
        document.getElementById("modal-post").classList.toggle("show-modal")
        })
    })

    const btnLikepost = document.createElement("button")
    btnLikepost.classList.add("btn-curtir-post")
    btnLikepost.setAttribute("id", `${user.indexOf(user[i])}l`)
    btnLikepost.addEventListener("click", ()=>{
      btnLikepost.getAttribute("id")
      document.getElementById(`${user.indexOf(user[i])}l`).classList.toggle("like")
      spanImgLikePost.innerText = +1
      if(btnLikepost.classList.value.includes("like")){
        
        imageBtnLikePost.src = "./src/assets/img/Vector.png"
        
      }else{
        imageBtnLikePost.src = "./src/assets/img/Vector1.png"
        spanImgLikePost.innerText = ""
      }

      })

    const imageBtnLikePost = document.createElement("img")
    const spanImgLikePost = document.createElement("span")
    const titlePostList = document.createElement("h3")
    const descriptionPostList =  document.createElement("p")
    descriptionPostList.classList.add("ellipisis")
    
    imagePostList.src = user[i].img
    namePostList.innerText = user[i].user
    ocupationPostList.innerText = user[i].stack
    btnOpenPost.id = user[i].id
    btnOpenPost.innerText = "Abrir Post"
    imageBtnLikePost.src = "./src/assets/img/Vector1.png"
    // spanImgLikePost.innerText = 0
    titlePostList.innerText = post[y].title
    descriptionPostList.innerText = post[y].text

    postList.appendChild(cardPostList)
    cardPostList.appendChild(divPostList)
    divPostList.appendChild(imagePostList)
    divPostList.appendChild(divNameOcuppationPostList)
    divNameOcuppationPostList.appendChild(namePostList)
    divNameOcuppationPostList.appendChild(ocupationPostList)
    cardPostList.appendChild(titlePostList)
    cardPostList.appendChild(descriptionPostList)
    cardPostList.appendChild(divBtnOpenPost)
    divBtnOpenPost.appendChild(btnOpenPost)
    divBtnOpenPost.appendChild(btnLikepost)
    btnLikepost.appendChild(imageBtnLikePost)
    btnLikepost.appendChild(spanImgLikePost)}
    }

}
}

createPostList(users, posts)

function createPost (){
  newPost.addEventListener("click", (evnt)=>{
    evnt.preventDefault()
    
    const user = {
      id: users.length +1,
      user:nameNewPost.innerText,
      stack: ocupationNewPost.innerText,
      img: imgNewPost.src
    }
    users.push(user)

    const post = {
      id_post: posts.length +1 ,
      user: user.id,
      title: titleNewPost.value,
      text: textNewPost.value
    }
    posts.push(post)

    createPostList(users, posts)

  })
  
}

createPost()
