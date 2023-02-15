

const lists_menu=document.querySelectorAll(".menu .menu-items")
const home=document.querySelector(".header")
const arrival=document.querySelector(".body-2")
const feature=document.querySelector(".body-4")
const blog=document.querySelector(".body-5")
const contact=document.querySelector(".body-7")
const items_home=lists_menu[0]
const items_arrival=lists_menu[1] 
const items_feature=lists_menu[2] 
const items_blog=lists_menu[3] 
const items_contact=lists_menu[4] 

let keys_current=true;

function current_menu_item(list,value,near_value,menu_items){
    if((window.pageYOffset>value.offsetTop-250 || window.pageYOffset > contact.offsetTop-200) && (window.pageYOffset <near_value.offsetTop || contact.offsetTop+2000) ){
        list.forEach(items=>{
            items.classList.remove("active")
        })
        menu_items.classList.add("active")
    }
}

addEventListener("scroll",e=>{
    current_menu_item(lists_menu,home,arrival,items_home)
    current_menu_item(lists_menu,arrival,feature,items_arrival)
    current_menu_item(lists_menu,feature,blog,items_feature)
    current_menu_item(lists_menu,blog,contact,items_blog)
    current_menu_item(lists_menu,contact,false,items_contact)
})


lists_menu.forEach(items=>{
    items.addEventListener("click",e=>{
        lists_menu.forEach(value=>{
            value.classList.remove("active")
        })
        items.classList.add("active")
    })
})