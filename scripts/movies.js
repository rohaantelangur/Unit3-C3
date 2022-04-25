// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet_amount = JSON.parse(localStorage.getItem("amount")) || arr
let h = document.createElement("h1")
h.setAttribute("id","wallet")
h.innerText=wallet_amount
document.getElementById("navbar").append(h)


async function search(){
    let ser = document.getElementById("search").value
    console.log(ser);

    try {
       var res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5112ef64&s=${ser}`)
       const data=await res.json()
       let movie =data.Search
       console.log(movie);
       movie.map(function(elemt, index){
        let div = document.createElement("div")
        
           let poster= document.createElement("img")
           poster.src=elemt.Poster
           poster.style.width="100%"
           poster.style.height="150px"
           
           let Titale= document.createElement("h2")
           Titale= `Name: ${elemt.Title}`
           
           let div1 = document.createElement("div")
           
           let btn = document.createElement("button")
           btn.innerText="Book Now"
           btn.setAttribute("class","book_now")
           btn.addEventListener("click",function(){
               Book_Now(elemt, index)
           })
           div1.append(btn)

           div.append(poster, Titale,div1)
           document.getElementById("movies").append(div)
       })

       function Book_Now(elemt, index){
           console.log(elemt, index);
           let movie = JSON.parse(localStorage.getItem("movie"))||[]
           movie.push(elemt)
           localStorage.setItem("movie",JSON.stringify(movie))
       }






    } catch (error) {
        console.log(error);
    }
}
