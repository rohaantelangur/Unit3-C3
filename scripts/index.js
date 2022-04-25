// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",wallet)

var wallet_amount = JSON.parse(localStorage.getItem("amount")) || arr
let h = document.createElement("h1")
h.innerText=wallet_amount
h.setAttribute("id","wallet")
document.getElementById("navbar").append(h)

function wallet(){
    var arr=[0]
    var wallet_amount = JSON.parse(localStorage.getItem("amount")) || arr
    var amt = document.getElementById("amount").value

    if(wallet_amount!==undefined){
        wallet_amount[0]=wallet_amount[0]+Number(amt);
    }
    
    localStorage.setItem("amount",JSON.stringify(wallet_amount))
    console.log(wallet_amount) 
    window.location.reload()
}


document.getElementById("book_movies").addEventListener("click", function(){
    window.location.href="movies.html"
})
