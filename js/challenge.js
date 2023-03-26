//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
const myForm = document.querySelector("form");
const myCounter = document.querySelector('#counter');
const myList = document.getElementById("list");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const restartBtn = document.querySelector("#restart");
const pauseBtn = document.querySelector("#pause");
const likeBtn = document.querySelector("#heart");
const myInterval = setInterval(myCounter, 1000);

let i = 0
setInterval(function(){
    myCounter.textContent = i ++
}, 1000)

minusBtn.addEventListener('click', () => {
    if (i > 0) 
    myCounter.textContent = i --
})

plusBtn.addEventListener('click', () => {
    if (i > 0)
    myCounter.textContent = i ++
})

restartBtn.addEventListener('click', () => {
    i = 0
})

pauseBtn.addEventListener('click', () => {
    clearInterval(myInterval);
    minusBtn.disabled = true
    plusBtn.disabled = true
    likeBtn.disabled = true
    pauseBtn.textContent = "resume"
    pauseBtn.addEventListener('click', resumeClick = () => {
        pauseBtn.onclick = resumeClick();

    })
})



myForm.addEventListener('submit', event =>{
    event.preventDefault();
    const inputComment = document.createElement("p"); 
    inputComment.textContent = event.target.children[0].value;
    myList.appendChild(inputComment);
    myForm.reset();
})