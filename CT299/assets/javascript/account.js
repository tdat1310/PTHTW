




const show_login=document.querySelectorAll(".switch")[1]
const show_signup=document.querySelectorAll(".switch")[0]
const form_peice=document.querySelector(".login")
const form_signup=document.querySelector(".signup")

const group_form=document.querySelectorAll(".form-group")

function get_items(value){
    const element=document.querySelectorAll(value)
    return element;
}
let list_input_signup=get_items(".signup .form-group input")
let list_input_login=get_items(".login .form-group input")

let user_name = list_input_signup[0]
let email = list_input_signup[1]
let phone_number = list_input_signup[2]
let password = list_input_signup[3]
let password_cofirm = list_input_signup[4]

let mail_login=list_input_login[0]
let password_login=list_input_login[1]

show_login.addEventListener("click",e=>{
    form_peice.classList.add("active")
    form_signup.classList.add("active")
})

show_signup.addEventListener("click",e=>{
    form_peice.classList.remove("active")
    form_signup.classList.remove("active")
})


let user_name_true=false
let email_true=false;
let phone_number_true=false;
let password_true=false;
let password_confirm_true=false;


group_form.forEach(items=>{
    const label=items.querySelector("label")
    const input=items.querySelector("input")
    input.addEventListener("focus",e=>{
        label.style.transform="translateY(10px)";
    })
    input.addEventListener("focusout",e=>{
        if(input.value==""){
            label.style.transform="translateY(40px)"
        }
    })
})


list_input_signup.forEach((items,index)=>{
    items.addEventListener("focusout",e=>{
        if(index ===0)check_fill(user_name)?(check_length(user_name,5,20)?user_name_true=true:user_name_true=false):check_fill(user_name)
        if(index ===1)check_fill(email)?check_mail(email):check_fill(email)
        if(index ===2)check_fill(phone_number)?check_phone_number(phone_number):check_fill(phone_number)
        if(index ===3)check_fill(password)?check_length(password,6,13):check_fill(password)
        if(index ===4)check_fill(password_cofirm)?check_password(password,password_cofirm):check_fill(password_cofirm)
    })
})




function show_error(input,text){
    const parent=input.parentElement
    const error=parent.querySelector(".error")
    error.innerHTML=text
}
function show_success(input){
    const parent=input.parentElement
    const error=parent.querySelector(".error")
    error.innerHTML=""
}

function check_mail(input){
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailReg.test(input.value)){
        show_error(input,"Sai định dạng mail !")
        email_true=false
    }else{
        show_success(input)
        email_true=true
    }
}

function check_phone_number(input){
    const regex_phone=/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if(!regex_phone.test(input.value)){
        show_error(input,"Sai định dạng số điện thoại !")
        phone_number_true=false
    }
    else{
        show_success(input)
        phone_number_true=true
    }
}

function check_length(input, min, max){
    if(input.value.trim().length<min){
        show_error(input,`Mật khẩu hông được ít hơn ${min} ký tự !`)
        password_true=false
        return false;
    }
    else if(input.value.trim().length>max){
        show_error(input,`Mật khẩu hông được nhiều hơn ${max} ký tự !`)
        password_true=false
        return false
    }else{
        console.log(input.value.length)
        show_success(input)
        password_true=true
        return true;
    }
}
function check_password(pw_1,pw_2){
    if(pw_1.value.trim()!=pw_2.value.trim()){
        show_error(pw_2,"Mật khẩu không trùng khớp !")
        password_confirm_true=false
    }
    else{
        show_success(pw_2)
        password_confirm_true=true
    }
}

function check_fill(input){
    if(input.value===""){
        show_error(input,"Không được để trống !")
        return false;
    }else {
        show_success(input)
        return true
    }
}   
function reset_input(list_input){
    list_input.forEach(items=>{
        items.value=""
    })
}
const btn_signup =document.querySelector(".CTA .btn_signup")
btn_signup.addEventListener("click",e=>{
    e.defaultPrevented
    if(user_name_true&&email_true && password_true && phone_number_true && password_confirm_true){
        alert("Đăng ký thành công !")
        setTimeout(()=>{
            let email_login=email.value
            let password_login=password.value
            localStorage.setItem("account_GroupThree",JSON.stringify({email_login,password_login}))
            reset_input(list_input_signup)
            show_login.click();
        },200)
    }
})


const account=JSON.parse(localStorage.getItem("account_GroupThree"))

const btn_login=document.querySelector(".CTA .btn_login")

btn_login.addEventListener("click",e=>{
   if(account){
    const email=account.email_login
    const password=account.password_login
    if(mail_login.value.trim()===email){
        show_success(mail_login)
    }else{
        show_error(mail_login,"Tài khoản không tồn tại !")
        password_login.value=""
    }
    if(password_login.value===password){
        show_success(password_login)
        alert("Đăng nhập thành công")
        reset_input(list_input_login)
        document.querySelector(".brand a").click()
    }else{
        show_error(password_login,"Sai mật khẩu !")
    }
   }
   else{
    alert("Hãy đăng ký tài khoản trước!")
    show_signup.click();
   }
})