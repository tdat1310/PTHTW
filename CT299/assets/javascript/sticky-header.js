
let header=document.querySelector(".headline")
let sticky=header.offsetTop;
let banner=document.querySelector(".header")
addEventListener("scroll",e=>{
    if(window.pageYOffset >sticky){
        header.classList.add("sticky")
        banner.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
        banner.classList.remove("sticky")
    }
})