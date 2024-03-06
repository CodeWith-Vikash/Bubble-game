
let hit=document.querySelector("#hit span")
let time=document.querySelector('#time span')
let score=document.querySelector('#score span')
let bubbleContainer=document.querySelector(".bubble-container")
let count=20
let randomhit=0

const updateBubbles=()=>{
    let  clutter=""
    for(let i=0;i<45;i++){
        let randombubble=Math.floor(Math.random()*15)+1
        clutter+=`<div class='bubble'>${randombubble}</div>`
    }
    bubbleContainer.innerHTML=clutter
}
updateBubbles()

const updateHit=()=>{
    randomhit=Math.floor(Math.random()*15)+1
    hit.textContent=randomhit
}
updateHit()

const updateTime=()=>{
    time.textContent=setInterval(()=>{
        if(count>0){
            count--
            time.textContent=count
        }
    },1000)
}
updateTime()

const updateScore=(e)=>{
     score.textContent=Number(score.textContent)+1     
}

    bubbleContainer.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.textContent==randomhit){
            updateScore()
            updateBubbles()
            updateHit()
        }
    })

