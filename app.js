const color = document.getElementById('color')
const btn = document.getElementById('btn')
const show = document.querySelector('.show')
const clr = document.querySelector('.clr')
const click = document.querySelector('.click')
const testID = document.getElementById("testID")
const checkBtn = document.getElementById("checkBtn")
const headerP = document.querySelector('header>p')


let clrRandom = Math.floor(Math.random() * colorArr.length)
clr.style.backgroundColor = ` ${ colorArr[clrRandom] }`

let countryRandom = Math.floor(Math.random() * question.length)
console.log(question[countryRandom].country)
let x = 0

function check() {
    click.style.display = "none"
    testID.style.display = "none"
    checkBtn.style.display = "none"

}
btn.addEventListener('click', () => {

    if (color.value == colorArr[clrRandom]) {
        x++

    } else if (x == -1) {
        countryRandom = Math.floor(Math.random() * question.length)
        console.log(question[countryRandom].country)
        click.style.display = "block"
        testID.style.display = "block"
        checkBtn.style.display = "block"
        color.disabled = true
        btn.disabled = true
        if (confirm("Bro Uduzdun Amma davam etmek isteyirsense seni nezere ala bilerem eger Isteyirsense Ok klikle") == true) {
            // x = 0
            click.textContent = `Which is ${ question[countryRandom].country} capital?`
            console.log(question[countryRandom].capital)
            checkBtn.addEventListener('click', () => {
                if (testID.value.toLocaleLowerCase() == question[countryRandom].capital.toLocaleLowerCase() && testID.value != '') {
                    check()
                    color.disabled = false
                    btn.disabled = false
                    x = 0
                    headerP.textContent = x

                } else {
                    check()
                    color.style.display = "none"
                    btn.style.display = "none"
                    clr.style.display = "none"
                    alert("bro oyunu uduzdun yeniden basla")
                    color.disabled = true
                }


            })

        }

    } else {
        x--
        console.log(x)
    }
    if (x == 5) {

        check()
        color.style.display = "none"
        btn.style.display = "none"
        clr.style.display = "none"
        headerP.style.display = "none"
        alert("winer winner chicken dinner")
    }
    headerP.textContent = x
    clrRandom = Math.floor(Math.random() * colorArr.length)
    clr.style.backgroundColor = `${colorArr[clrRandom]}`
        // countryRandom = Math.floor(Math.random() * question.length)


})