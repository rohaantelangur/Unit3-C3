// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var wallet_amount = JSON.parse(localStorage.getItem("amount")) || arr
let h = document.createElement("h1")
h.setAttribute("id","wallet")
h.innerText=wallet_amount
document.getElementById("navbar").append(h)

    var movie = JSON.parse(localStorage.getItem("movie"))||[]

       console.log(movie);
       movie.map(function(elemt){
           let div = document.createElement("div")
        
           let poster= document.createElement("img")
           poster.src=elemt.Poster
           poster.style.width="100%"
           poster.style.height="150px"
           
           let Titale= document.createElement("h2")
           Titale= `Name: ${elemt.Title}`

           div.append(Titale,poster)
           document.getElementById("movie").append(div)
       })

       
       document.getElementById("confirm").addEventListener("click",check)
       
       function check(){
    let seats = document.getElementById("number_of_seats").value
    console.log(typeof seats)

    if(wallet_amount[0]/100>=seats){
        alert("Booking successful!")
       wallet_amount[0]-=seats*100;
       localStorage.setItem("amount",JSON.stringify(wallet_amount)) 
    }else{
     alert("Insufficient Balance!")
    }
}
