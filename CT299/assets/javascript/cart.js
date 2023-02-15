
const show_body_cart=()=>{
const show_cart=document.querySelector(".headline .cart")
const body_cart=document.querySelector(".body-cart")
const close_cart=document.querySelector(".body-cart .space-left")
show_cart.addEventListener("click",e=>{
    body_cart.classList.toggle("active")
})
close_cart.addEventListener("click",e=>{
    body_cart.classList.remove("active");
})
}
show_body_cart();

function add_cart(){
    const data=JSON.parse(localStorage.getItem("list_cart"))
    let arr_product;
    data?arr_product=data:arr_product=[];
    const list_btn_add=document.querySelectorAll(".list-product .product-items .add-cart .left-add")
    list_btn_add.forEach(items=>{
        items.addEventListener("click",e=>{
            const parent=items.parentElement.parentElement.parentElement
            const img_product=parent.querySelector(".top-product img").src
            const name_product=parent.querySelector(".product-content .name-product").innerHTML
            const price_procut=parent.querySelector(".product-content .product-price p").innerHTML
            update(img_product,name_product,price_procut,1)
            add_cart_dt(img_product,name_product,price_procut)
            create_list_cart();
            sum_price();
            show_quantity_cart();
        })
    })
    function show_quantity_cart(){
        const quantity_cart=document.querySelector(".cart .quantity-items-cart")
        quantity_cart.innerHTML=arr_product.length;

        if(arr_product.length>0){
            quantity_cart.style.transform="scale(1)"
        }else {
            quantity_cart.style.transform="scale(0)"
        }
    }
    function update(img,name,price,quantity){
        const product_cart={
            img,
            name,
            price,
            quantity
        }
        arr_product.push(product_cart)
        localStorage.setItem("list_cart",JSON.stringify(arr_product))
    }

    function add_cart_dt(img,name,price){
        const body_cart=document.querySelector(".list-product-cart")
        const warp=document.createElement("li")
        warp.className="product-cart-items"
        let product_content=`
        <input type="checkbox" class="check-confirm">
            <div class="left-item">
                <img src="${img}" alt="">
            </div>
            <div class="center-item">
                <h3 class="product-name">${name}</h3>
                <div class="product-price"><span>$</span><span>${price}</span></div>
            </div>
            <div class="right-item">
                <div class="detele-product"><ion-icon name="trash-outline"></ion-icon></div>
                <div class="quantity"><input type="number" min="1" value="1"></div>
            </div>
        `
        warp.innerHTML=product_content
        body_cart.append(warp)
    }
    
    function detele_cart(){
    const list_cart=document.querySelectorAll(".list-product-cart .product-cart-items")
    list_cart.forEach((items,index)=>{
        items.querySelector(".detele-product").addEventListener("click",e=>{
            arr_product.splice(index,1)
            localStorage.setItem("list_cart",JSON.stringify(arr_product));
            items.remove()
            create_list_cart()
            show_quantity_cart();
        })
    })
    }

    const create_list_cart=()=>{
        let data=JSON.parse(localStorage.getItem("list_cart"))
        let list_cart
        data?list_cart=data:list_cart=[];
        const body_cart=document.querySelector(".list-product-cart")

        let list_cart_add=list_cart.map(items=>{
            return `
        <li class="product-cart-items">
            <input type="checkbox" class="check-confirm">
            <div class="left-item">
                <img src="${items.img}" alt="">
            </div>
            <div class="center-item">
                <h3 class="product-name">${items.name}</h3>
                <div class="product-price"><span>$</span><span>${items.price}</span></div>
            </div>
            <div class="right-item">
                <div class="detele-product"><ion-icon name="trash-outline"></ion-icon></div>
                <div class="quantity"><input type="number" min="1" value="${items.quantity}" ></div>
            </div>
        </li>
            `
        })
        body_cart.innerHTML=list_cart_add.join(" ")
        detele_cart();
    }

    function increase_quantity(){
        const data=JSON.parse(localStorage.getItem("list_cart")) 
        if(data){
            const list_cart=document.querySelectorAll(".list-product-cart .product-cart-items")
            list_cart.forEach((items,index)=>{
                const quantity=items.querySelector(".product-cart-items .quantity input")
                quantity.addEventListener("change",e=>{
                   data[index].quantity=quantity.value;
                   localStorage.setItem("list_cart",JSON.stringify(data))
                })
            }) 
        }
    }

    function sum_price(){
        const list_cart=document.querySelectorAll(".list-product-cart .product-cart-items")
        const title_price=document.querySelector(".body-cart .total-price span")
        const check_all=document.querySelector(".body-cart .check-all input")
        let total=0;
        list_cart.forEach((items)=>{
            const input =items.querySelector(".check-confirm")
            const price=items.querySelector(".product-price span:nth-child(2)").innerHTML   
            const quantity_items=items.querySelector(".product-cart-items .quantity input")
            
            let checked=false;

            check_all.addEventListener("click",e=>{
                if(check_all.checked){
                   if(!checked) input.click()
                }else{
                  if(checked) input.click()
                }
            })

            input.addEventListener("click",e=>{ 
                checked=!checked
                if(checked){
                    total+=Number(price * quantity_items.value)
                }else{
                     total-=Number(price * quantity_items.value)
                }
                title_price.innerHTML=total;
            })
        })
    }

    create_list_cart();
    detele_cart();
    increase_quantity()
    sum_price();
}
add_cart();




