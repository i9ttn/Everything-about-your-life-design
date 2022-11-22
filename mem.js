let skille = document.querySelector(".skills")
let skillProgress = document.querySelectorAll(".skills span")
let counts = Array.from(document.querySelectorAll(".stats span"))
let section = document.querySelector(".stats")
let start = false
let up = document.querySelector(".up")

window.onscroll = function () {
    if(window.scrollY >= 800) {
        up.classList.add("active")
        up.onclick = () =>{ 
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    } else {
        up.classList.remove("active")
    }
    if(window.scrollY >= skille.offsetTop) {
        skillProgress.forEach((s) => {
            s.style.width = s.dataset.progress
        })
    }
    if(window.scrollY >= section.offsetTop) {
        if(!start) {
            counts.forEach((e) => {
                let goal = e.dataset.goal
                let count = setInterval(() => {
                    e.textContent++
                    if(e.textContent == goal) {
                        clearInterval(count)
                    }
                }, 2000 / goal)
            })
        }
        start = true
    }
}

let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

function showTime() {
    let newDate = new Date();
    let day = newDate.getDay()
    let hour = newDate.getHours()
    let minute = newDate.getMinutes()
    let second = newDate.getSeconds()
    days.textContent = day
    hours.textContent = hour
    minutes.textContent = minute
    seconds.textContent = second
}

window.onload = () => {
    setInterval(showTime, 1000)
}