
const show_filer_price=document.querySelector(".body-2.body-2-product .filter-product .filter-price .input-filter")
const list_select_price=document.querySelectorAll(".body-2.body-2-product .filter-product .list-select")[0]

const list_select_material=document.querySelectorAll(".body-2.body-2-product .filter-product .list-select")[1]
const show_filer_material=document.querySelector(".body-2.body-2-product .filter-product .filter-material .input-filter")


function filter(input,list){
    input.addEventListener("click",e=>{
        list.classList.toggle("active");
        icon.classList.toggle("active")

    })
    let content=input.querySelector("p")
    let icon=input.querySelector("ion-icon")
    list.querySelectorAll(".select-items").forEach(items=>{
        items.addEventListener("click",e=>{
            list.classList.remove("active")
            content.innerHTML=items.innerHTML
        })
    })
}

filter(show_filer_price,list_select_price)
filter(show_filer_material,list_select_material)

