let search = document.querySelector("#search");
let input = document.querySelector(".input");
let details = document.querySelector(".details");
console.log();
let btn = document.querySelector(".btn");


btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let data = await fetch(`https://api.github.com/users/${input.value}`);
    main_data = await data.json();
    console.log(main_data);
    let div1 = document.createElement("div");
    div1.classList.add("details")
    div1.innerHTML = `<div class="name">
   <img src=${main_data.avatar_url} alt="image" class="image" />
   <div class="nameofstudent">
   <h3 class="nameofstudent">${main_data.name}</h3>
   <p class="nameofstudent">${main_data.login}</p>
   </div>
   <p class=doj>Joined: ${main_data.created_at.slice(0,9)}</p>
 </div>
 <div class="description">
 ${main_data.bio}
   
 </div>
 <div class="followers">

   <span class="repo">Repos <span class="repo">${main_data.public_repos}</span></span>
   <span class="repo">Followers <span class="repo">${main_data.followers}</span></span>
   <span class="repo">Following <span class="repo">${main_data.following}</span></span>
 </div>
 <div class="icons">
 
   <span class=icons_left
     ><span><i class="fa-solid fa-map-location"></i>${main_data.location}</span>
    <a href=${main_data.blog}> <span><i class="fa-solid fa-link"></i>${main_data.blog}</span></a>
   </span>
 


   <span class=icons_right
     ><span><i class="fa-brands fa-twitter"></i>${main_data.twitter_username}</span>
     <span><i class="fa-solid fa-building"></i>${main_data.company}</span>
   </span>
 
</div>

   `;
   document.querySelector(".user_name").replaceChildren(div1)
});
