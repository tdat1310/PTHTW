

const lists_menu=document.querySelectorAll(".menu .menu-items")

lists_menu.forEach(items=>{
    items.addEventListener("click",e=>{
        lists_menu.forEach(value =>{
            value.classList.remove("active")
        })
        items.classList.add("active");
    })
})