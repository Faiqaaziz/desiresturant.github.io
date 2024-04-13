let trends = document.querySelectorAll(".trends");
let button = document.querySelectorAll(".cart");
let cards = document.querySelectorAll(".card");

let count = 0;

trends.forEach((curElem, index)=>{
    curElem.style.left=`${index * 100}%`;
})

const myFood = ( ) => {
    trends.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(()=>{
    count++;
    if(count == trends.length){
        count=0
    }
    myFood()
},4000)
function bookTable() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;

    var confirmationMessage = "Thank you, " + name + "! Your table has been booked for " + guests + " guests on " + date + " at " + time + ".";
    
    document.getElementById('confirmation').innerText = confirmationMessage;
}
var tableNumber = findAvailableTable(parseInt(guests));
    if (tableNumber !== -1) {
        document.getElementById('status' + tableNumber).innerText = 'Booked';
    } else {
        alert('No available table for ' + guests + ' guests.');
    }

function findAvailableTable(guests) {
    var tableNumbers = [1, 2, 3]; // Assuming there are 3 tables
    for (var i = 0; i < tableNumbers.length; i++) {
        var status = document.getElementById('status' + tableNumbers[i]).innerText;
        if (status === 'Available') {
            var capacity = parseInt(document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[1].innerText);
            if (capacity >= guests) {
                return tableNumbers[i];
            }
        }
    }
    return -1; // No available table
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