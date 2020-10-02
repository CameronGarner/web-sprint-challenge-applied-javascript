// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cardcontainer = document.querySelector(".cards-container")

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(function(articledata){
    let articlearray = [articledata.data.articles.bootstrap,
                        articledata.data.articles.javascript,
                        articledata.data.articles.jquery,
                        articledata.data.articles.node,
                        articledata.data.articles.technology,
    ]
    articlearray.forEach(function(item){
        item.forEach(function(item){
           cardcontainer.appendChild(articles(item))
        })
    })
})



function articles(articleobj){
 let div = document.createElement("div")
 let div2 = document.createElement("div")
 let div3 = document.createElement("div")
 let div4 = document.createElement("div")
 let img = document.createElement("img")
 let span = document.createElement("span")
 div.classList.add("card")
 div2.classList.add("headline")
 div3.classList.add("author")
 div4.classList.add("img-container")
 div2.textContent = `${articleobj.headline}`
 img.src = articleobj.authorPhoto
 span.textContent = `By ${articleobj.authorName}`
 div.appendChild(div2)
 div.appendChild(div3)
 div3.appendChild(div4)
 div4.appendChild(img)
 div3.appendChild(span)
 div.addEventListener("click",function(event){
     console.log(articleobj.headline)
 })
 return div
}