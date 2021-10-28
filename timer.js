import refs from './refs.js'
const { days, hours, mins, secs } = refs

class CountdownTimer{
    constructor(finishDate, markup) {
        this.markup = markup
        this.finishDate = finishDate
        this.intervalId = null
        this.deltaTime = 0
        
    }
    start() {
        // console.log(`timer started`);
        this.intervalId = setInterval(() => {
            let currentTime = Date.now() // берем текущее время каждую секунду
           
            // console.log('curentTime', currentTime);
            this.deltaTime = this.finishDate - currentTime // узнаем разницу
            // console.log('deltaTime:', this.deltaTime);
            // из разницы во времени берем: 
            // console.log(this.deltaTime.getHours());
            const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)) ) 
            
            const hours = this.pad(Math.floor(this.deltaTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) ) 
           
            const mins =this.pad(Math.floor(this.deltaTime % (1000 * 60 * 60) / (1000 * 60)))  
            
            console.log('mins:', mins);
            const secs = this.pad(Math.floor(this.deltaTime % (1000 * 60) / (1000))  )

            // console.log('days:', days);
            // console.log('hours:', hours);
            // console.log('mins:', mins);
            console.log('seconds:', secs);
            this.insertValues(days, hours, mins, secs)

        }, 1000)
    }
    stop() {
        console.log('intervalId:', this.intervalId);
        clearInterval(this.intervalId)
    }
    pad(value){
return String(value).padStart(2, '-')
    }
    insertValues(d, h, m, s) {
        const { days, hours, mins, secs } = this.markup
        days.textContent = d
        hours.textContent = h
        mins.textContent = m
        secs.textContent = s
    }
}
const myTimer = new CountdownTimer(new Date(`jan 1, 2022`), {
    days,
    hours,
    mins,
    secs
})
console.log(myTimer);
myTimer.start()
// myTimer.stop() // вызывать по клику на кнопку стоп
