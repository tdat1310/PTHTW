

const search_icon=document.querySelector(".search ion-icon")
const search_input=document.querySelector(".search input")
let show=true;
search_icon.addEventListener("click",e=>{
    search_input.classList.toggle("active")
    if(show===true){
        search_input.placeholder="Search .."
        show=false;
    }else{
        search_input.placeholder="";
        show=true;
    }
})

search_input.addEventListener("focusout",e=>{
    search_input.classList.remove("active")
    search_input.placeholder="";
    search_input.value="";
    show=true;
})

addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        search_input.classList.remove("active")
        search_input.placeholder="";
        search_input.value="";
        show=true;
    }
})