// Start Login Area
    let homeLoginButton = document.getElementById('login-btn');
    let loginContianer = document.getElementById('main-login');
    let closeBtn = document.getElementById('close-btn');
homeLoginButton.addEventListener('click' ,()=>{loginContianer.classList.add('show')});
window.addEventListener('click',e =>{e.target === loginContianer ? loginContianer.classList.remove('show') : false;});
closeBtn.addEventListener('click', ()=>{loginContianer.classList.remove('show')});

    //  Get Variables
let loginButton = document.querySelector('.login-button');
let registerButton = document.querySelector('regist');
let email = document.querySelector('input[type="email"]');
let password = document.querySelector('input[type="password"]');

function process(){
let emailValue = email.value;
let passwordValue = password.value;

if(emailValue && passwordValue ){
//  Remove password
email.value = '';
password.value = '';
}else{

    //  Show The Error
}}
    // Show Password
let lockIcon = document.querySelector('.fas.fa-lock-open');
let passwordInput = document.querySelector('input[type="password"]');

lockIcon.addEventListener('click', function(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        lockIcon.style.color = 'white';
    }else{
        passwordInput.type = 'password';
            lockIcon.style.color = 'rgb(36, 35, 35)';
        }
    })
        // handle email
    let emailInput = document.querySelector('.username input[type="email"]');
    let emailIcon = document.querySelector('.far.fa-envelope');
    emailInput.onfocus = function() {
        emailIcon.style.color = 'rgb(36, 35, 35)'
    }
// End Login Area

    /*  Start Registe Area  */
    let rgButton = document.getElementById('rg-btn');
    let rgContianer = document.getElementById('registe-area');
rgButton.addEventListener('click' ,()=>{
     rgContianer.classList.add('show') 
    })
window.addEventListener('click',e =>{
    e.target === rgContianer ? rgContianer.classList.remove('show') : false;
})

// Select Others
let otherOption = document.querySelector('#select');
let otherInput = document.querySelector('.selete-area .other');
otherOption.addEventListener("change", function(){
let selectedOption = this.options[this.selectedIndex];
    if(selectedOption.value === "Other"){
        let input = document.createElement('input');
        input.setAttribute("placeholder","Enter your work");
        input.type = "text"
        otherInput.appendChild(input);
    }else{
        otherInput.innerHTML = '';
    }
});

    // Show Password And Hide It
function get_input(inpuId, iconId){
    let input = document.getElementById(inpuId);
    let icon = document.getElementById(iconId);
    icon.classList.toggle('show');
    if(input.type === "password"){
        input.type = 'text';
    }else{
        input.type = 'password';
}}

    /*  End Registe Area  */
    /*  Start Selecte Main */
let shwoOp = document.querySelector('.selecte-field .selecte-text');
let rotatArrow = document.getElementById('rotate-arrow');
let selecteCentent = document.querySelector('.selecte-field .options');
shwoOp.addEventListener('click',() =>{
    rotatArrow.classList.toggle('rotate');
    selecteCentent.classList.toggle('show');
})
    /*  End Selecte Main */
    /*  Start Main Content */

    /*  End Main Content */
    
    // handle Cards
        // JavaScript code to show reviews
document.querySelectorAll('.show-reviews').forEach(function(link) {
    link.addEventListener('click', function() {
        link.textContent == "Show Reviews" ? link.textContent = "Show Less" : link.textContent = "Show Reviews";
        var card = this.closest('.card');
        var reviewsContainer = card.querySelector('.reviews');
        reviewsContainer.classList.toggle('show');
    });
});

    // handle counter rewies
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    var reviewsElement = card.querySelector('.reviews');

    var reviewsCount = reviewsElement.querySelectorAll('.review').length;

    var reviewsCountSpan = card.querySelector('.reviews-count');
    reviewsCountSpan.textContent = reviewsCount;

    /*  Handle Comment  */
    let commentBtn = card.querySelector('.comment-btn');
    
    commentBtn.addEventListener('click', ()=>{

        let commentArea = card.querySelector('.fa-comment-medical');
        let closeBtn = card.querySelector('.close-btn');
        closeBtn.addEventListener('click',  ()=>{commentArea.style.display = 'none';}); 
        /*  Start Events */
        commentArea.style.display = "block"
        

        /*  Get Value And Put It INTO an Comment area*/

    })
});
    /* End Coment */
    /*  Add More Cards  */

/*  start parameter */
let parameterBtn = document.querySelector('.parameter-btn');
parameterBtn.addEventListener('click', ()=>{
    document.querySelector('.parameter-area-btn').classList.toggle('active');
    document.querySelector('.parameter-area').classList.toggle('active');
})
/*  end parameter */

// push data
let xhr = new XMLHttpRequest();

xhr.open('POST','../check_inputs/check_regester.php', true);
xhr.onload = ()=>{
    if(xhr.status === 200 && xhr.readyState === 4){
        const response = xhr.response
        console.log(response);
    }else{
        console.log('failed!: ');
    }
}
xhr.send();