// 此處為您的程式碼!
function reset() {
    let timeList = document.querySelectorAll(".P");

    timeList.forEach(P => {
        if (P.childElementCount <= 0) {
            P.appendChild(document.querySelector("#zone_temp").firstElementChild.cloneNode(true))
            P.appendChild(document.querySelector("#zone_temp").lastElementChild.cloneNode(true))
        }

        P.querySelector(".name").innerText = P.id

        let time_zone = P.getAttribute("time-zone")
        let localTime = getTime(time_zone)

        P.querySelector(".date").innerText = localTime.date
        P.querySelector(".time").innerText = localTime.time
    })
}

setInterval(reset, 1000);

function getTime(timeZone) {
    let now = new Date(Date.now())
    let month = now.toLocaleDateString('en-US', { timeZone, month: 'long' }).substring(0, 3)
    let localDateString = now.toLocaleDateString('en-US', { timeZone })

    let date = new Date(localDateString).getDate()
    let year = new Date(localDateString).getFullYear()
    let customTimeString = date + " " + month + "," + year

    let time = now.toLocaleTimeString('en-US', { timeZone, hour12: false }).substring(0, 5)

    return {date:customTimeString,time}
}