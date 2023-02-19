
/* === burger menu === */
const menuButton = document.getElementById('menuButton');
const menuOp = document.getElementById('menuOp');

let menuOpen = false;

menuButton.addEventListener('click',()=>{
    if (!menuOpen) {
        menuButton.classList.add('open');
        menuOp.classList.remove('close');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOp.classList.add('close');
        menuOpen = false;
    }
})
/* === burger menu === */

/* ===  mode === */
const modeButton = document.getElementById('modeButton');
const dark = document.getElementById('dark');
const light = document.getElementById('light');

let mode = 'light';

modeButton.addEventListener('click',()=>{

    dark.classList.toggle('active');
    light.classList.toggle('active');
    changeColor();
})

const changeColor = ()=>{
    document.body.classList.toggle('bodyDrk');
}
/* ===  mode === */



let toSearch = "news"
let toLanguage = "en"

const languge = document.getElementById("languge");
const search = document.getElementById("searchE");
const searchFor = document.getElementById("searchFor");

languge.addEventListener('change',()=>{
    toLanguage = languge.value
    removeElements();
    getData();
})

searchFor.addEventListener('click',()=>{
    toSearch = search.value;
    toLanguage = languge.value;
    removeElements();
    getData();
})

const removeElements = () => {
    document.querySelectorAll('section').forEach(element => {element.remove()})
}
const getData = () => {

    fetch(`https://newsapi.org/v2/everything?q=${toSearch}&from=2023-01-19&sortBy=publishedAt&language=${toLanguage}&apiKey=9b0b544ace664abca95baeac5cd0c365`)
.then(response => response.json())
.then((data) => {
    const articles = data.articles;


    articles.forEach((article) => {

        const postImg = article.urlToImage;
        const postTitle = article.title;
        const postText = article.description;
        const postDate = article.publishedAt.slice(0, 10);
        const reeadMore = article.url;

        // HTML create Elements //

        //parentElement//
        const articleContainer = document.createElement('section');
        //parentElement//
        const newsCard = document.createElement('article');
        const newsImg = document.createElement('div');
        const newsTitle = document.createElement('div');
        const newsText = document.createElement('div');
        const newsDate = document.createElement('div');
        const newsReadMore = document.createElement('div');

        // Elemnts InnerHTML //
        newsImg.innerHTML = `<img src="${postImg}" alt="${postTitle}" />`;
        newsTitle.innerHTML = `<h2>${postTitle}</h2>`;
        newsText.innerHTML = `<p>${postText}</p>`;
        newsDate.innerHTML = `<p>${postDate}</p>`;
        newsReadMore.innerHTML = `<a href="${reeadMore}">Read More</a>`;
        // parentElement & chaild//
        document.body.appendChild(articleContainer);
        articleContainer.appendChild(newsImg);
        articleContainer.appendChild(newsCard);
        newsCard.appendChild(newsTitle);
        newsCard.appendChild(newsText);
        newsCard.appendChild(newsDate);
        newsCard.appendChild(newsReadMore);

    })

})

}
getData();


/* === mode button === */

