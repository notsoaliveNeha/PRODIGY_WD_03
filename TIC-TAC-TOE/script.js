let box = document.querySelectorAll(".box");
let reset = document.getElementsByTagName("button")[0];
let winSound=new Audio('winSound.mp3');

// console.log(box);
// box.forEach(element => {
//     element.addEventListener("click", () => {
//         if (c % 2 == 0)
//         {
//             element.innerHTML = "O";
//             element.disabled = true;
//         }
//         else
//         {
//             element.innerHTML = "X";
//             element.disabled = true;
//         }
//         c++;

//     })
// });
let c = 1;
let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

box[0].addEventListener("click", () => {
    if (arr[0] == 1) {
        if (c % 2 == 0) {
            box[0].innerHTML = "O";
            arr[0] = 0;
        }
        else {
            box[0].innerHTML = "X";
            arr[0] = 0;
        }
        c++;
        winner();
    }
})

box[1].addEventListener("click", () => {
    if (arr[1] == 1) {
        if (c % 2 == 0) {
            box[1].innerHTML = "O";
            arr[1] = 0;
        }
        else {
            box[1].innerHTML = "X";
            arr[1] = 0;
        }
        c++;
        winner();
    }
})

box[2].addEventListener("click", () => {
    if (arr[2] == 1) {
        if (c % 2 == 0) {
            box[2].innerHTML = "O";
            arr[2] = 0;
        }
        else {
            box[2].innerHTML = "X";
            arr[2] = 0;
        }
        c++;
        winner();
    }
})

box[3].addEventListener("click", () => {
    if (arr[3] == 1) {
        if (c % 2 == 0) {
            box[3].innerHTML = "O";
            arr[3] = 0;
        }
        else {
            box[3].innerHTML = "X";
            arr[3] = 0;
        }
        c++;
        winner();
    }
})

box[4].addEventListener("click", () => {
    if (arr[4] == 1) {
        if (c % 2 == 0) {
            box[4].innerHTML = "O";
            arr[4] = 0;
        }
        else {
            box[4].innerHTML = "X";
            arr[4] = 0;
        }
        c++;
        winner();
    }
})

box[5].addEventListener("click", () => {
    if (arr[5] == 1) {
        if (c % 2 == 0) {
            box[5].innerHTML = "O";
            arr[5] = 0;
        }
        else {
            box[5].innerHTML = "X";
            arr[5] = 0;
        }
        c++;
        winner();
    }
})

box[6].addEventListener("click", () => {
    if (arr[6] == 1) {
        if (c % 2 == 0) {
            box[6].innerHTML = "O";
            arr[6] = 0;
        }
        else {
            box[6].innerHTML = "X";
            arr[6] = 0;
        }
        c++;
        winner();
    }
})

box[7].addEventListener("click", () => {
    if (arr[7] == 1) {
        if (c % 2 == 0) {
            box[7].innerHTML = "O";
            arr[7] = 0;
        }
        else {
            box[7].innerHTML = "X";
            arr[7] = 0;
        }
        c++;
        winner();
    }
})

box[8].addEventListener("click", () => {
    if (arr[8] == 1) {
        if (c % 2 == 0) {
            box[8].innerHTML = "O";
            arr[8] = 0;
        }
        else {
            box[8].innerHTML = "X";
            arr[8] = 0;
        }
        c++;
        winner();
    }
})


let winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function winner() {
    winPattern.forEach((i) => {
        ele1 = box[i[0]].innerHTML;
        ele2 = box[i[1]].innerHTML;
        ele3 = box[i[2]].innerHTML;
        if (ele1 != "" && ele2 != "" && ele3 != "") {
            if (ele1 == ele2 && ele2 == ele3 && ele3 == ele1) {
                document.getElementsByTagName("p")[0].innerHTML=`${ele1} is winner`;
                winSound.play();
                disableGame();
            }
        }
    })
}

 function disableGame()
 {
    for(let p=0;p<=8;p++)
    {
        arr[p]=0;
    }
 }

 reset.addEventListener("click",()=>{
    for(let p=0;p<=8;p++)
    {
        box[p].innerHTML="";
        arr[p]=1;
    }
    document.getElementsByTagName("p")[0].innerHTML="";
 })
