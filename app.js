const color = document.getElementById('color')
const btn = document.getElementById('btn')
const show = document.querySelector('.show')
const clr = document.querySelector('.clr')
const click = document.querySelector('.click')
const testID = document.getElementById("testID")
const checkBtn = document.getElementById("checkBtn")
let colorArr = ['red',
    'lime',
    'black',
    'purple',
    'blue',
    'orange',
    'aqua',
    'yellow',
    'beige',
    'brown',
    'teal',
    'gold'
]

let question = [{
        country: "Norway",
        capital: "Oslo"
    },
    {
        country: "Netherlands",
        capital: "Amsterdam"
    }, {
        country: "Belgium",
        capital: "Brussels"
    },
    {
        country: "Latvia",
        capital: "Riga"
    }, {
        country: "Estonia",
        capital: "Tallinn"
    }, {
        country: "Lithuanian",
        capital: "Vilnius"
    }, {
        country: " Denmark",
        capital: "Copenhagen"
    },
    {
        country: "Czechia",
        capital: "Prague"
    },
    {
        country: "Poland",
        capital: "Warsaw"
    },
    {
        country: "Finland",
        capital: "Helsinki"
    },
    {
        country: "Luxembourg",
        capital: "Luxembourg"
    },
    {
        country: "Montenegro",
        capital: "Podgorica"
    }, {
        country: "Denmark",
        capital: "Copenhagen"
    }
]

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
        console.log(x)
    } else if (x == -1) {
        click.style.display = "block"
        testID.style.display = "block"
        checkBtn.style.display = "block"
        color.disabled = true
        if (confirm("Bro Uduzdun Amma davam etmek isteyirsense seni nezere ala bilerem eger Isteyirsense Ok klikle") == true) {
            // x = 0
            click.textContent = `Which is ${ question[countryRandom].country} capital?`
            console.log(question[countryRandom].capital)
            checkBtn.addEventListener('click', () => {
                if (testID.value == question[countryRandom].capital && testID.value != '') {
                    check()
                    color.disabled = false
                    x = 0
                } else {
                    check()
                    color.style.display = "none"
                    btn.style.display = "none"
                    clr.style.display = "none"
                    alert("bro oyunu uduzdun yeniden basla")
                }
            })

        } else {
            alert("hey dostum oyunu uduzdun")
            color.disabled = true
        }
    } else {
        x--
        console.log(x)
    }
    clrRandom = Math.floor(Math.random() * colorArr.length)
    clr.style.backgroundColor = `${colorArr[clrRandom]}`

})