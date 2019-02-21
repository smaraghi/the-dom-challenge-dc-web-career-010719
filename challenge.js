
let counter = document.getElementById('counter')
let parseC = parseInt(document.getElementById('counter').innerHTML)

//Helper method to increment counter

function plusOne() {
    if(pause === false){
        counter.innerText = parseInt(counter.innerText) + 1
    }
}

//A user can see a timer increment every second
setInterval(plusOne, 1000)


//A user can increment the counter

document.getElementById('+').addEventListener('click', function(){
    plusOne()
})

//A user can decrement the counter

document.getElementById('-').addEventListener('click', function(){
    counter.innerText = parseInt(counter.innerText) - 1
})

//A user can like a number and see appropriate likes associated with number

let heart = document.getElementById('<3')
let likes = document.querySelector('.likes')
likeObj = {}

function numHelper(num){
    if(!likeObj[num]) {
        likeObj[num] = 1
    } else {
        likeObj[num]+= 1
    }
}

function likeCounter(){
    num = document.getElementById('counter').innerText
    numHelper(num)
    let li = document.createElement('li')
    li.innerText = `${counter.innerText} has been liked ${likeObj[num]} time[s]`
    document.querySelector('ul.likes').appendChild(li)
}
        heart.addEventListener('click', likeCounter)

//A user can pause the game disabling all buttons except for the 'pause' button

let pauseButton = document.getElementById('pause')
let pause = false


pauseButton.addEventListener('click', (time))

function time(){
    if (!pause) {
        pause = true
        pauseButton.innerText = 'resume'
        parseC.innerText = parseC.innerText
        document.querySelectorAll('button:not(#pause)').forEach(button => button.disabled = pause)
    } else {
        pause = false
        pauseButton.innerText = 'pause'
        document.querySelectorAll('button:not(#pause)').forEach(button => button.disabled = false)
    }
}

//A user can leave comments

const likesList = document.getElementsByClassName('likes')[0]
const form = document.getElementById('comment-form')
const comments = document.getElementById('list')

function postComment() {
    let input = form.elements[0].value
    form.elements[0].value = ""
    let newComment = `<p>${input}</p>`
    comments.innerHTML += newComment
  }
  
form.addEventListener('submit', function(event) {postComment();event.preventDefault()})
