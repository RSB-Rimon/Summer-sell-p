
const nameList = document.getElementById('nameList')
const total = document.getElementById("total")
const discounttotal = document.getElementById("discounttotal")

let totalPrice = 0;
const hendleClick = (data)=>{
    const name = data.childNodes[5].innerText;
    
    const priceWithTk =data.childNodes[7].innerText;
    const price = priceWithTk.split( " " )[0];
    const amountNumber = parseInt(price)

    totalPrice = totalPrice + amountNumber ;
    total.innerText = totalPrice;
    discounttotal.innerText= totalPrice;

    const li = document.createElement("li");
    li.innerText = name 
    nameList.appendChild(li);
       
};
