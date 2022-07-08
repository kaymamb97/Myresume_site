
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//set opacity to the 1st img
imgs[0].style.opacity = opacity;

// imgs.forEach(img => img.addEventListene('click', imgClick));
console.log(imgs);

imgs.forEach(img => {
    img.addEventListener('click', imgClick);
})

function imgClick(e) {
    //reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change src
    current.src = e.target.src;

    //addd fadein clss
    current.classList.add('fade-in');

    //remove the fade to also work on others
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //change opacity
    e.target.style.opacity = opacity;
}