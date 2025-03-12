
async function userInfoDetail(userinfo){
    return  new Promise((resolve,rej)=>{
        setTimeout(resolve({
             id:userinfo,
            name:"udhaya"
            ,email:"abc@gmail.com"
        }),1000)
     })
}
async function  userPost (){
    return new Promise((resolve,rej )=>{
        setTimeout(resolve([
            {
               id: 1,
               title: 'Learning ReactJS from scratch',
               content: 'You can learn many things here, subscribe CyberDude',
             },
             {
               id: 2,
               title: 'TailwindCSS is great!',
               content: 'Checkout cyberdude for more information',
             },
             {
               id: 3,
               title: 'Typescript is great!',
               content: 'Checkout cyberdude for more information',
             },
   ]),3000)
    })
} 
const commentTemplate = (useId)=>{
    return new Promise((resolve, reject)=>{
    setTimeout(resolve(
      [
          {
            id: 1,
            content: 'Looking forward for your coding tutorials',
          },
          {
            id: 2,
            content: 'Thanks for your videos',
          },
        ]
      ,5000))
    })
}

async function asyncCallFunction(useId){
   const reslt= await Promise.all([userInfoDetail(useId),userPost(useId),commentTemplate(useId)])
    .then(([userInfo,userPost,comment])=>{
        document.querySelector("#user-name").textContent= userInfo.name
    document.querySelector("#user-email").textContent= userInfo.email
    userPost.map((post)=>{
        document.querySelector("#posts").innerHTML+=`<div class="border p-3 rounded mb-3">
        <h4 class="h6 fw-semibold">${post.title}</h4>
        <p class="text-muted mt-2">${post.content}</p>
        <small class="text-muted">Posted on December 20, 2024</small>
       </div> `
    })
    comment.map((comment)=>{
        document.querySelector("#comments").innerHTML +=`  <div class="border p-4 rounded-lg">
        <div class="flex items-center space-x-4">
            <img src="https://dummyimage.com/40" alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover">
        </div>
        <p class="mt-2 text-gray-600">${comment.content}</p>
    </div>`
    })
   
})}
asyncCallFunction(1)