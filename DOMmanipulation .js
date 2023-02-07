console.log('hello')
let titleDiv = document.getElementById('changeDiv')
console.log('before: ', titleDiv.innerText)
let message = 'I love 😍 Money 💵 '
titleDiv.innerText = message;
console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.color = 'green'
titleDiv.style.backgroundColor = 'lightpink'



let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green")

// redDiv.onclick = () => console.log('You click Red')
// yellowDiv.onclick = () => console.log('You click yellow')
// greenDiv.onclick = () => console.log('You click Green')

// redDiv.onclick = () => console.log('You click Red')
// yellowDiv.onclick = () => console.log('You click yellow')
// greenDiv.onclick = () => console.log('You click Green')


const squares = document.querySelectorAll('.colorSquare')
console.log(squares)
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

//  foreach

// squares.forEach(square => console.log(square.value))
const timesClicked = { 'red':0 , 'yellow':0 , 'green':0}
squares.forEach(square => {
     square.onclick = () => {
        timesClicked[square.value] += 1;
        square.innerText = timesClicked[square.value]}
        // console.log(square.value) }// line 23 - 24
})