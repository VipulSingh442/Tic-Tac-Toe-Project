// accessing html tags
let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-gamebtn");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let count = 0;

// storing winning conditions
const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turnO = true;


// handling clicking events
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        count++;
        
        if(turnO)
        {
            box.innerText = "O";
            box.style.color="red";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color="blue";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
});

// Reset game
const restGame = () =>{
    turnO = true
    boxenabled();
    msgcontainer.classList.add("hide");
    count = 0;

};

const boxdisabled = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const boxenabled = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";

    }
};


const showWinner = (winner) =>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxdisabled();
};


// checking condition for winning
const checkwinner= () => {
    for(let pattern of winning)
    {
      let posi1val  =  boxes[pattern[0]].innerText;
      let posi2val  =  boxes[pattern[1]].innerText;
      let posi3val  =  boxes[pattern[2]].innerText;
    
      if(posi1val != "" && posi2val != "" && posi3val != "")
        {
      if(posi1val == posi2val && posi2val == posi3val)
      {
        showWinner(posi1val);
        return;
      }
      
    }
    
    // checking draw conditions
    if(count == 9)
      {
        msg.innerText=`Game is Draw`;
        msgcontainer.classList.remove("hide");
        boxdisabled();
      }

} 
    
};

reset_btn.addEventListener("click",restGame);
newgamebtn.addEventListener("click",restGame);

