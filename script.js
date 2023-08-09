let audioturn = new Audio('1 Second Tone.mp3')
let turn = 'X'
let isgameover = false
// function to change the turn
const changeturn=()=>{
    return turn === "X"? "0" : "X"
}
// console.log(turn)
// funtion to check win

const checkwin = ()=>{
 let boxtext = document.getElementsByClassName('textbox');
 let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
win.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[0]].innerText !== '') ) {
        let info =document.querySelector('.info')
        info.innerText = boxtext[e[0]].innerText  + " Won";
        isgameover = true
        
    }
});
}
// game logic
let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(box => {
    let boxtext =box.querySelector('.textbox');
    box.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            audioturn.play();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = 'turn for ' + turn;
            }
        }

    })
});
//for reset button
let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxes= document.getElementsByClassName('box');
Array.from(boxes).forEach(box => {
    let boxtext =box.querySelector('.textbox');
    boxtext.innerText = '';
    turn = 'X';
    isgameover=false
    document.getElementsByClassName('info')[0].innerText = 'turn for ' + turn;
    
});}

);
