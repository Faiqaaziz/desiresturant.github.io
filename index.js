document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      const username = form.elements['username'].value;
      const password = form.elements['password'].value;
  
      // Here, you can perform authentication checks with the username and password
      // For simplicity, let's just display an alert
      alert(`Username: ${username}\nPassword: ${password}`);
    });
  });

let trends = document.querySelectorAll(".trends");
let button = document.querySelectorAll(".cart");
let cards = document.querySelectorAll(".card");

let count = 0;

trends.forEach((curElem, index)=>{
    curElem.style.left=`${index * 150}%`;
})

const myFood = ( ) => {
    trends.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 150}%)`
    })
}

setInterval(()=>{
    count++;
    if(count == trends.length){
        count=0
    }
    myFood()
},350)

  
function bookTable() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;

    var confirmationMessage = "Thank you, " + name + "! Your table has been booked for " + guests + " guests on " + date + " at " + time + ".";
    
    document.getElementById('confirmation').innerText = confirmationMessage;
}
button.forEach((curBtn)=>{
    curBtn.addEventListener("click", function(){
        alert("Added To Cart")
    })
})

cards.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);
        
        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>Fresh Foods</h1>
        <p>Lorem ipsum dolar, slt amet consectetur adipisicing elit.
        Recusandae odio velit mollitia nulla inventore aspertore fuga.Quassi,eius
        nemo. Blanditiis,consequator sunt.

        `
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})