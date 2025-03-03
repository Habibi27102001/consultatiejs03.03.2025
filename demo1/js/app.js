console.log ('reviews', reviews);
const img = document.getElementById ('person-img');
const author = document.getElementById ('author');
const job = document.getElementById ('job');
const info = document.getElementById ('info');

constprevBtn - document.querySelector ('.const prevBtn')
// console.log ('img' , img);
window.addEventListener ('DOMContentLoaded', function (){
    // this.alert (12345);
    const review = reviews [currentItem];
    console.log ('review', review);
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    // info.textContent = review.text;
    info.innerHTML = review.text;
});
randomBtn.addEventListener ('click', function (){
    alert ('salut');
})

