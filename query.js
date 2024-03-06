
let count=5
let randomhit=0
$("#time span").css('color','white')

const updateBubbles=()=>{
    let  clutter=""
    for(let i=0;i<49;i++){
        let randombubble=Math.floor(Math.random()*15)+1
        clutter+=`<div class='bubble'>${randombubble}</div>`
    }
    $(".bubble-container").html(clutter)
}
updateBubbles()

const updateHit=()=>{
    randomhit=Math.floor(Math.random()*15)+1
    $("#hit span").text(randomhit)
}
updateHit()

const updateTime=()=>{
    let interval=setInterval(()=>{
        if(count>0){
            count--
            $("#time span").text(count)
        }else{
            clearInterval(interval)
            $('.bubble-container').slideUp()
            $("#time span").css('color','black')
        }
    },1000)
}
updateTime()

const updateScore=(e)=>{
    $('#score span').text(Number($('#score span').text())+1)
}

    $('.bubble-container').click((e)=>{
        if(e.target.textContent==randomhit){
            updateScore()
            updateBubbles()
            updateHit()
            count=5
        }
    })

// reset
$('button').click(()=>{
    window.location.reload()
})

