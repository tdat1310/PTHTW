

const icon_show=document.querySelector(".show-menu");
const body_menu_left=document.querySelector(".body-left-meu")
const icon_close=document.querySelector(".body-left-meu .list-right")

icon_show.addEventListener("click",e=>{
    body_menu_left.classList.toggle("active");
})

icon_close.addEventListener("click",e=>{
    body_menu_left.classList.toggle("active");
})

const body_chilrent_menu=document.querySelectorAll(".body-left-meu .list-menu-left .items-menu-left")
const name_items=document.querySelectorAll(".body-left-meu .list-menu-left .items-menu-left span")
const icon_items=document.querySelectorAll(".body-left-meu .list-menu-left .items-menu-left ion-icon")
const items_chilrent_menu=document.querySelectorAll(".body-left-meu .list-menu-left .items-menu-left .list-menu-chilrent")
const icon_chilrent_menu=document.querySelectorAll(".body-left-meu .list-menu-left .items-menu-left ion-icon")

let keys_click=false;

function keys_click_f(list,value){
    list.forEach(items=>{
        items.addEventListener("click",e=>{
            keys_click=value;
        })
    })  
}

keys_click_f(name_items,true)
keys_click_f(icon_items,true)
keys_click_f(items_chilrent_menu,false)

body_chilrent_menu.forEach((items,index)=>{
    items.addEventListener("click",e=>{
        if(keys_click){
            items_chilrent_menu[index].classList.toggle("active"); 
            icon_chilrent_menu[index].classList.toggle("active"); 
        }
    })
})


