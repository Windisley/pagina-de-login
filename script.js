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