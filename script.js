const selectMenu = document.querySelectorAll('select')
let timeBox = document.querySelector('.time')
let content = document.querySelector('.content')
let alarmTime ;
const rington = new Audio('./audio/ringtone.mp3');


for(let i=23 ; i>=0 ; i--){
    i = i<10 ? '0'+i : i ;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].innerHTML+=option
}
for(let i=59 ; i>=0 ; i--){
    i = i<10 ? '0'+i : i ;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].innerHTML+=option
}


setInterval(()=>{
    let date = new Date()
    let h = date.getHours() 
    let m = date.getMinutes() 
    let s = date.getSeconds()
    
    h = h<10? "0" + h : h 
    m = m<10? "0" + m : m 
    s = s<10? "0" + s : s 
    timeBox.innerHTML = `${h} : ${m} : ${s}`;

    if(alarmTime == `${h} : ${m}`){
        rington.play()
        rington.loop = true
    }
},1000)

let alarmState = "noset"

const alarmBtn = document.querySelector('.alarmBtn')

alarmBtn.addEventListener('click' , ()=>{
    alarmTime = `${selectMenu[0].value} : ${selectMenu[1].value}`

    if(alarmTime.includes('hour') || alarmTime.includes('minit')){
        return alert('زمان هشدار را به درستی مشخص کنید')
    }
    checkState(alarmState)
})

function checkState(state){
    if(state == "noset"){
        content.classList.add('disabled')
        alarmBtn.innerText = "clear alarm"
        alarmState = "set"
    }
    else{
        content.classList.remove('disabled')
        alarmBtn.innerText = "set alarm"
        alarmState = "noset"
        alarmTime = ""
        rington.pause()

    }
}