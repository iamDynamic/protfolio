var info = document.getElementById("info")
var menu = document.getElementById("menu")
var menu2 = document.getElementById("menu2")

menu2.classList.add("hide")
menu.addEventListener("click",()=>{
    menu2.classList.add("show")
    menu2.classList.remove("hide")
    menu.addEventListener("click",()=>{
        menu2.classList.remove("show")
        menu2.classList.add("hide")
        menu.addEventListener('click',()=>{
            location.reload()
        })
    })
})