const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");
const c6 = document.querySelector(".c6");
const c7 = document.querySelector(".c7");
const c8 = document.querySelector(".c8");
const c9 = document.querySelector(".c9");
const cell = document.querySelectorAll(".cell")
const out = document.getElementById("out");
const x = document.getElementById("x");
const o = document.getElementById("o")

let turn = 0;

const checkWin = (t) => {
    let result = "";
    if ((c1.textContent == c2.textContent && c2.textContent == c3.textContent && c1.textContent==="X") ||
                c4.textContent == c5.textContent && c5.textContent == c6.textContent && c4.textContent==="X" ||
                c7.textContent == c8.textContent && c8.textContent == c9.textContent && c7.textContent==="X" ||
                c1.textContent == c4.textContent && c4.textContent == c7.textContent && c1.textContent==="X" ||
                c2.textContent == c5.textContent && c5.textContent == c8.textContent && c2.textContent==="X" ||
                c3.textContent == c6.textContent && c6.textContent == c9.textContent && c3.textContent==="X" ||
                c1.textContent == c5.textContent && c5.textContent == c9.textContent && c1.textContent==="X" ||
                c3.textContent == c5.textContent && c5.textContent == c7.textContent && c3.textContent==="X")  {result ="X"}

                else if ( (c1.textContent == c2.textContent && c2.textContent == c3.textContent && c1.textContent==="O") ||
                c4.textContent == c5.textContent && c5.textContent == c6.textContent && c4.textContent==="O" ||
                c7.textContent == c8.textContent && c8.textContent == c9.textContent && c7.textContent==="O" ||
                c1.textContent == c4.textContent && c4.textContent == c7.textContent && c1.textContent==="O" ||
                c2.textContent == c5.textContent && c5.textContent == c8.textContent && c2.textContent==="O" ||
                c3.textContent == c6.textContent && c6.textContent == c9.textContent && c3.textContent==="O" ||
                c1.textContent == c5.textContent && c5.textContent == c9.textContent && c1.textContent==="O" ||
                c3.textContent == c5.textContent && c5.textContent == c7.textContent) {result="O"}
                
    return result    
}

const endgame = (res) => {
    
    
    if (res === "X") {
        x.style.visibility= 'visible'
    } else {
       o.style.visibility = 'visible'
    }

    btn.style.visibility = 'visible'
    turn = 9
   
    
}


    cell.forEach(cell => {
        cell.addEventListener("click", ()=> {
            if (cell.innerText == "") {
                if (turn < 9) {
                    if (turn % 2 === 0) {
                        cell.innerText = "X"
                    } else {
                        cell.textContent = "O"
                    }
                    if (turn >= 4) {
                    if (checkWin(turn) === "X") {
                        endgame("X")
                        
                    } else if (checkWin(turn)==="O") {
                        endgame("O")
                    } 
                    }    
                    turn++
                    
                }

                if (turn==9 && checkWin(turn) == "") {
                    out.textContent="DRAW"
                }
            }
            
        })
    })

const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    cell.forEach(cellElement => {
        cellElement.textContent = '';
    });
    x.style.visibility = 'hidden';
    o.style.visibility = 'hidden';
    btn.style.visibility = 'hidden';
    turn=0
    console.log("end")
})
