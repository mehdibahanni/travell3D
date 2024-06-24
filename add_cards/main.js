/*
  get input item
*/
let image = document.querySelector('.image-upload-container input[type="file"]'),
  title = document.querySelector('.input.title input[type="text"]'),
  adrr = document.querySelector('.input.adrr input[type="text"]'),
  latidue = document.querySelector('.input.latitude input'),
  longitude = document.querySelector('.input.longitude input'),
  category = document.querySelector('.input.category'),
  evaluation = document.querySelector('.input.evaluation input[type="number"]'),
  submitBtn = document.querySelector('.buttons input[type="submit"]');

/*  get card output */
let cardImage = document.querySelector('.add-more img'),
  cardtitle = document.querySelector('.card .title'),
  cardAdrr = document.querySelector('.card .addr'),
  cardLatidue = document.querySelector('.card .latitude'),
  cardLongitude = document.querySelector('.card .longitude'),
  cardCategory = document.querySelector('.card .category'),
  cardEvaluation = document.querySelector('.card .evaluation');

adrr.addEventListener('keyup', () => cardAdrr.innerHTML = adrr.value);
title.addEventListener('keyup', () => cardtitle.innerHTML = title.value);
latidue.addEventListener('keyup', () => cardLatidue.innerHTML = latidue.value);
category.addEventListener('keyup', () => cardCategory.innerHTML = category.value);
longitude.addEventListener('keyup', () => cardLongitude.innerHTML = longitude.value);
evaluation.addEventListener('keyup', () => cardEvaluation.innerHTML = evaluation.value + "/5");

cardCount = 0;
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const adrrValue = adrr.value,
    titleValue = title.value,
    latidueValue = latidue.value,
    categoryValue = category.value,
    longitudeValue = longitude.value,
    evaluationValue = evaluation.value;

  /*###############################   CARDS Start Reviews Setions   #################################*/
  errorsNumber = 0;
  if (titleValue == '') {
    document.querySelector('.input .title-span').textContent = 'Cannot Let This Empt';
    title.style.border = '1px solid red';
    errorsNumber += 1;
  } else {
    document.querySelector('.input .title-span').textContent = '';
    title.style.border = 'none';
  }
  if (adrrValue == '') {
    document.querySelector('.input .addr-span').textContent = 'Cannot Let This Empt';
    adrr.style.border = '1px solid red';
    errorsNumber += 1;
  } else {
    document.querySelector('.input .addr-span').textContent = '';
    adrr.style.border = 'none';
  }
  if (latidueValue == '') {
    document.querySelector('.input .latitude-span').textContent = 'Cannot Let This Empt';
    latidue.style.border = '1px solid red';
    errorsNumber += 1;
  } else {
    document.querySelector('.input .latitude-span').textContent = '';
    latidue.style.border = 'none';
  }
  if (longitudeValue == '') {
    document.querySelector('.input .longitude-span').textContent = 'Cannot Let This Empt';
    longitude.style.border = '1px solid red';
    errorsNumber += 1;
  } else {
    document.querySelector('.input .longitude-span').textContent = '';
    longitude.style.border = 'none';
  }
  if (categoryValue == '') {
    document.querySelector('.input .category-span').textContent = 'Cannot Let This Empt';
    category.style.border = '1px solid red';
    errorsNumber += 1;
  } else {
    document.querySelector('.input .category-span').textContent = '';
    category.style.border = 'none';
  }
  if (evaluationValue == '') {
    document.querySelector('.input .evaluation-span').textContent = 'Cannot Let This Empt';
    evaluation.style.border = '1px solid red';
    errorsNumber += 1;
  } else {
    document.querySelector('.input .evaluation-span').textContent = '';
    evaluation.style.border = 'none';
  }

  /*#################################   SEND VALUES TO PHP FILE   #######################################*/
  if (errorsNumber == 0) {
    let form = document.querySelector('form');
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'check.php', true);
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
      } else {
        console.log('ops!! somthing wron with your connectio');
      }
    }
    const formData = new FormData(form);
    xhr.send(formData);
  } else {
    console.log("can't push this to DB");
  }
})

/*####################################  CARD STYLE  ###################################################*/
// handle Cards
// JavaScript code to show reviews
document.querySelectorAll('.show-reviews').forEach(function (link) {
  link.addEventListener('click', function () {
    link.textContent == "Show Reviews" ?
      link.textContent = "Show Less" :
      link.textContent = "Show Reviews";
    var card = this.closest('.card');
    var reviewsContainer = card.querySelector('.reviews');
    reviewsContainer.classList.toggle('show');
  });
});

// handle counter rewies
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {

  var reviewsElement = card.querySelector('.reviews');
  var reviewsCountSpan = card.querySelector('.reviews-count');
  reviewsCountSpan.textContent = reviewsCount;
  var reviewsCount = reviewsElement.querySelectorAll('.review').length;

  /*  Handle Comment  */
  let commentBtn = card.querySelector('.comment-btn');
  commentBtn.addEventListener('click', () => {
    let commentArea = card.querySelector('.fa-comment-medical');
    let closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => { commentArea.style.display = 'none'; });
    /*  Start Events */
    commentArea.style.display = "block";
  })
});
/* End Coment */

// Function to preview selected image
function previewImage(input) {
  if (input.files && input.files[0]) {

    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector('.image-preview').setAttribute('src', e.target.result);
      document.querySelector('.card img').setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
document.querySelector('.input-file').addEventListener('change', function () {
  previewImage(this);
});