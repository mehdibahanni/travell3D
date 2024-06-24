/*  Start Selecte Main */
let shwoOp = document.querySelector('.selecte-field .selecte-text');
let rotatArrow = document.getElementById('rotate-arrow');
let selecteCentent = document.querySelector('.selecte-field .options');
shwoOp.addEventListener('click', () => {
    rotatArrow.classList.toggle('rotate');
    selecteCentent.classList.toggle('show');
})
/*  End Selecte Main */


// handle Cards
// JavaScript code to show reviews
document.querySelectorAll('.show-reviews').forEach(function (link) {
    link.addEventListener('click', function () {
        link.textContent == "Show Reviews" ? link.textContent = "Show Less" : link.textContent = "Show Reviews";
        var card = this.closest('.card');
        var reviewsContainer = card.querySelector('.reviews');
        reviewsContainer.classList.toggle('show');
    });
});

// handle counter rewies
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    var reviewsElement = card.querySelector('.reviews');

    var reviewsCount = reviewsElement.querySelectorAll('.review').length;

    var reviewsCountSpan = card.querySelector('.reviews-count');
    reviewsCountSpan.textContent = reviewsCount;

    /*  Handle Comment  */
    let commentBtn = card.querySelector('.comment-btn');

    commentBtn.addEventListener('click', () => {

        let commentArea = card.querySelector('.fa-comment-medical');
        let closeBtn = card.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => { commentArea.style.display = 'none'; });
        /*  Start Events */
        commentArea.style.display = "block"
        /*  Get Value And Put It INTO an Comment area*/

    })
});
/* End Comment */

// start filter area
let filterButton = document.querySelector('.search-area .search-contianer .filter-icon');
let filters = document.querySelectorAll('.search-area .filter-area span');

filters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    })
})
filterButton.addEventListener('click', () => {
    document.querySelector('.search-area .filter-area').classList.toggle('show');
});

/*  start parameter */
let parameterBtn = document.querySelector('.parameter-btn');
parameterBtn.addEventListener('click', () => {
    document.querySelector('.parameter-area-btn').classList.toggle('active');
    document.querySelector('.parameter-area').classList.toggle('active');
})
/*  end parameter */

// ############### log out responsive ##############

let lisBtn = document.querySelector('.list-btn');
lisBtn.addEventListener('click', () => {
    document.querySelector('.list-content').classList.toggle('show');
})

// ################ Welcome message ##################
const words = ['Casablanca', 'Raba', 'Tanger', 'Marrakech', 'Agdal'];
const container = document.getElementById('cities');
const typeSpeed = 200; // milliseconds per character
const eraseSpeed = 100; // milliseconds per character
const pauseBetweenWords = 1000; // milliseconds

let wordIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeWriter() {
    if (!isErasing) {
        if (charIndex < words[wordIndex].length) {
            container.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            setTimeout(() => {
                isErasing = true;
                setTimeout(typeWriter, eraseSpeed);
            }, pauseBetweenWords);
        }
    } else {
        if (charIndex > 0) {
            container.textContent = container.textContent.slice(0, -1);
            charIndex--;
            setTimeout(typeWriter, eraseSpeed);
        } else {
            isErasing = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWriter, pauseBetweenWords);
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});