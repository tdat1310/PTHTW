
const btn_next=document.querySelector(".btn-next");
const btn_prev=document.getElementById('prev');

btn_next.onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
btn_prev.onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length-1]);
}

setInterval(()=>{
  btn_next.click();
},7000)
