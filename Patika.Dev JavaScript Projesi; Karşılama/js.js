function onLoad() {
    let name = prompt("İsminiz")

    name = name.toUpperCase();
    document.title = `Hoşgeldiniz ${name}`

    let titleValue = document.querySelector("#title")
    titleValue.innerHTML = titleValue.innerHTML.toUpperCase()

    let nameDOM = document.querySelector("#name")
    nameDOM.innerHTML = `Merhaba ${name} Hoşgeldin.`

    let dateDOM = document.querySelector("#date");

    let time = new Date()
    let timeDay = time.getDay()
    let day
    switch (timeDay) {
        case 0:
            day = "pazartesi"
            break
        case 1:
            day = "Salı"
            break
        case 2:
            day = "Çarşamba"
            break
        case 3:
            day = "Perşembe"
            break
        case 4:
            day = "Cuma"
            break
        case 5:
            day = "Cumartesi"
            break
        case 6:
            day = "Pazar"
            break
    }
    console.log(day)

    dateDOM.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${day}`
} 
