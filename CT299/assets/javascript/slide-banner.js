
const banner_btn_prve=document.querySelector(".btn-control .btn_prve")
const banner_btn_next=document.querySelector(".btn-control .btn_next")

banner_btn_next.addEventListener("click",e=>{
    let lists = document.querySelectorAll('.banner');
    document.querySelector('.header .list-banner').appendChild(lists[0]);
})
banner_btn_prve.addEventListener("click",e=>{
    let list =document.querySelectorAll('.banner')
    let size=list.length-1;
    document.querySelector(".header .list-banner").prepend(list[size]); 
})

setInterval(()=>{
    banner_btn_prve.click();
},8000)

