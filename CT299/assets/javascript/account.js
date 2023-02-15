// /*global $, document, window, setTimeout, navigator, console, location*/
// $(document).ready(function () {

//     'use strict';
  
//     var usernameError = true,
//         emailError    = true,
//         passwordError = true,
//         passConfirm   = true;
  
//     // Detect browser for css purpose
//     if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
//         $('.form form label').addClass('fontSwitch');
//     }
  
//     // Label effect
//     $('input').focus(function () {
  
//         $(this).siblings('label').addClass('active');
//     });
  
//     // Form validation
//     $('input').blur(function () {
  
//         // User Name
//         if ($(this).hasClass('name')) {
//             if ($(this).val().length === 0) {
//                 $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
//                 usernameError = true;
//             } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
//                 $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
//                 usernameError = true;
//             } else {
//                 $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
//                 usernameError = false;
//             }
//         }
//         // Email
//         if ($(this).hasClass('email')) {
//             if ($(this).val().length == '') {
//                 $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
//                 emailError = true;
//             } else {
//                 $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
//                 emailError = false;
//             }
//         }
  
//         // PassWord
//         if ($(this).hasClass('pass')) {
//             if ($(this).val().length < 8) {
//                 $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
//                 passwordError = true;
//             } else {
//                 $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
//                 passwordError = false;
//             }
//         }
  
//         // PassWord confirmation
//         if ($('.pass').val() !== $('.passConfirm').val()) {
//             $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
//             passConfirm = false;
//         } else {
//             $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
//             passConfirm = false;
//         }
  
//         // label effect
//         if ($(this).val().length > 0) {
//             $(this).siblings('label').addClass('active');
//         } else {
//             $(this).siblings('label').removeClass('active');
//         }
//     });
  
  
//     // form switch
//     $('a.switch').click(function (e) {
//             $(this).toggleClass('active');
//             e.preventDefault();
    
//             if ($('a.switch').hasClass('active')) {
//                 $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
//             } else {
//                 $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
//             }
//         });
    
    
//         // Form submit
//         $('form.signup-form').submit(function (event) {
//             event.preventDefault();
    
//             if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
//                 $('.name, .email, .pass, .passConfirm').blur();
//             } else {
//             $('.signup, .login').addClass('switched');
  
//             setTimeout(function () { $('.signup, .login').hide(); }, 700);
//             setTimeout(function () { $('.brand').addClass('active'); }, 300);
//             setTimeout(function () { $('.heading').addClass('active'); }, 600);
//             setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
//             setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
//             setTimeout(function () { $('.form').hide(); }, 700);
//         }
//     });
  
//     // Reload page
//     $('a.profile').on('click', function () {
//         location.reload(true);
//     });
  
  
//   });
  
const show_login=document.querySelectorAll(".switch")[1]
const show_signup=document.querySelectorAll(".switch")[0]
const form_peice=document.querySelector(".login")
const form_signup=document.querySelector(".signup")
const group_form=document.querySelectorAll(".form-group")

show_login.addEventListener("click",e=>{
    form_peice.classList.add("active")
    form_signup.classList.add("active")
})

show_signup.addEventListener("click",e=>{
    form_peice.classList.remove("active")
    form_signup.classList.remove("active")
})


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
