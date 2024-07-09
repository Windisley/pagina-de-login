const password = document.querySelector("#passwordreg")
const $p = document.querySelector(".emoji")
const boxemoji = document.querySelector(".boxemoji")

password.addEventListener("input", () => {
  if (password.value === "") {
    boxemoji.style = "display:none;"

  } else if (password.value.length == 1 || password.value.length <= 4) {
    $p.innerHTML = "&#x1F62D"
    boxemoji.style = "display:grid;"
  } else if (password.value.length <= 6) {
    $p.innerHTML = "&#x1F614"

  } else if (password.value.length <= 12) {
    $p.innerHTML = "&#x1F601"

  }


})


 const boxreg = document.querySelector("#boxreg a")
 const boxlogin = document.querySelector("#boxlogin a")
 const $form = document.querySelector(".form")
 const formtow = document.querySelector(".formtow") 

 boxreg.addEventListener("click", ()=>{
   formtow.style = "opacity: 1; display: block; transition: .6s ease-in-out;"   
   $form.style = " display: none; opacity:0; transition: .6s ease-in-out"
}) 

boxlogin.addEventListener("click", ()=>{
  formtow.style = "opacity: 0; display: none; transition: .6s ease-in-out;"   
   $form.style = " display: block; opacity:1; transition: .6s ease-in-out"

})


