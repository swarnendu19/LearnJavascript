  
  // Game Const and variable 
  let direction = {
    x : 0, y:0
  }

let foodSound = new Audio('music/food.mp3')
let gameOverSound = new Audio('music/gameover.mp3')
let moveSound= new Audio("music/move.mp3")
let musicSound =  new Audio('music/music.mp3')
let speed=2;
let lstPaintTime=0;
let snakeArr = [{
    x: 13 , y:15
}]

//Game Function
function main(ctime){
    window.requestAnimationFrame(main)  
    if((ctime - lstPaintTime)/1000 < 1/speed)
    {
        return;
    }
    lstPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    // Part 1 : Updating the snake variable
    
    
    //Part 2 : Render the snake and food
  BeforeUnloadEvent.innerHTML = ""
  snakeArr.forEach((e,index)=>{
   
    snakeElement = document.createElement('div')
    snakeElement.style.gridRow


  })

}











// Main logic starts here
window.requestAnimationFrame(main)
 
