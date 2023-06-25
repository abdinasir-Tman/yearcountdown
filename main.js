const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const loading = document.querySelector("#loading");
const newYear = document.querySelector("#newYear")
const currentyear = new Date().getFullYear()
newYear.innerHTML = currentyear + 1
function updateCountdown(){
        const currentTime = new Date() 
       const comingYear = new Date(`January 01 ${currentyear +1} 00:00:00`);
       let diff = comingYear - currentTime
      let d = Math.floor(diff / 1000 / 60 / 60 / 24)
      let h = Math.floor(diff / 1000 / 60 / 60) % 24
      let m = Math.floor(diff / 1000 / 60) % 60
      let s = Math.floor(diff / 1000) % 60
      days.innerHTML = d < 10 ? "0" + d : d
      hours.innerHTML = h < 10 ? "0"+h : h
      minutes.innerHTML = m <10 ? "0" + m : m;
      seconds.innerHTML = s < 10 ? "0" + s : s;
}

setTimeout( ()=>{
    loading.remove()
               countdown.style.display = "flex";
},1000)
setInterval( updateCountdown,1000)
