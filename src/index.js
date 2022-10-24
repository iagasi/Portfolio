// import { Modal } from "./modal"
var audio = new Audio('./m.wav');


let c = 0
let GAMEBODY
let moves = 0
let moveCounter
let amountOfElements = 4
let sizeOfboard = 4
let elementSize = 100
let ControllButtons
let TIMER
let seconds = 0
let minutes = 0
let gameElements = []
let t = false
const savedGame = getFromLocalStorage("game-save")
if (savedGame) {
    minutes = savedGame.minutes
    seconds = savedGame.seconds
    moves = savedGame.moves
    gameElements = savedGame.gamePos

    amountOfElements = Math.sqrt(gameElements.length)
    console.log(sizeOfboard);
}
else {
    gameElements = []
}
function generateControlButtons() {
    const mainWrapper = document.createElement("div")
    mainWrapper.classList.add("game-body")
    GAMEBODY = mainWrapper
    document.createElement("div")
    document.body.appendChild(mainWrapper)

    const control = document.createElement("div")
    control.classList.add("control")
    ControllButtons = control
    control.innerHTML = `
   <div class="control-top">
   <button>Shuffle and Start</button>
   <button id="start-btn"class="#">Start</button>
   <button>Save</button>
   <button>Results</button>

</div>


<div class="score">
   <span>Moves:${moves}</span> 	&nbsp <span>Time:${minutes + ":" + seconds}</span>
</div>
`
    mainWrapper.appendChild(control)
}
generateControlButtons()

function MAINFN() {
    t = false
    const game = document.querySelector(".game-main")
    moveCounter = document.querySelector(".score").firstElementChild
    TIMER = document.querySelector(".score").lastElementChild
    if (game) { game.remove() }
    createGameMainBody(amountOfElements)
    Move()

}

MAINFN()

function addDefaultPosition() {


    const ceils = document.querySelectorAll(".item__body")
    elementSize = ceils[0].clientWidth

    function countPosition() {


        for (let i = 0; i < ceils.length; i++) {
            const element = ceils[i];
            let col = (Math.ceil(i % amountOfElements) * elementSize);
            let row = (Math.floor(i / amountOfElements) * elementSize);

            element.style.left = col + "px"
            element.style.top = row + "px"

        }


    }
    countPosition()
}
function Move() {
    const game = document.querySelector(".game")



    let blankItem

    //Preventes unAllowed Moves
    function moveProhibiter(currElelementLeft, currElementTop, left, top,) {
        const item = document.querySelector(".item__body")
        let sizeOfElement = item.clientWidth


        //|| currElelementLeft < left - sizeOfElement || currElementTop > top + sizeOfElement || currElementTop < top - sizeOfElement
        if (currElelementLeft > left + sizeOfElement + 5 || currElelementLeft + sizeOfElement + 5 < left) {

            return false
        }

        if (currElementTop < top - sizeOfElement - 5 || currElementTop > top + sizeOfElement + 5) {

            return false
        }
        if (currElelementLeft > left && currElementTop !== top || currElelementLeft < left && currElementTop !== top) {

            return false
        }
        else {
            return true
        }
    }
    //Preventes unAllowed Moves

    function moveElement(e) {


        //Get BlankPosition
        blankItem = document.querySelector("#blank")

        let top = blankItem.offsetTop
        let left = blankItem.offsetLeft


        //Get BlankPosition

        //GetClickedElement Position
        let currentElement = e.target;
        if (currentElement.classList[0] == "item" || currentElement.classList[0] == "game") {
            return
        }

        let currElemtTop = currentElement.offsetTop
        let currElelementLeft = currentElement.offsetLeft
        //GetClickedElement Position

        if (!moveProhibiter(currElelementLeft, currElemtTop, left, top, 100)) {
            return
        }
        ///Changing elements position in array
        let clickedElementIndex = (gameElements.indexOf(parseInt(currentElement.innerHTML)));
        let clickedElementValue = gameElements[clickedElementIndex]
        let blankElementIndex = gameElements.indexOf(gameElements.length)
        let blankElementValue = gameElements[blankElementIndex]
        gameElements[blankElementIndex] = clickedElementValue
        gameElements[clickedElementIndex] = blankElementValue

        // checks if Game if finished
        let isSorted = false
        // c++
        // if (c >= 3) {
        //     gameElements.sort((a, b) => a - b)
        // }
        for (let i = 0; i < gameElements.length - 1; i++) {
            isSorted = true


            if (gameElements[i] > gameElements[i + 1]) {
                isSorted = false
                break
            }
        }


        if (isSorted) {
            timer.stop()
            const m = new Modal()
            m.openModal(null, `Hooray! You solved the puzzle in ${minutes}:${seconds} and ${moves} moves!`)
            topResult({ minutes, seconds, moves, boardSize: amountOfElements })
            return
        }
        ////////


        //Moving Elements
        //clicked amount

        audio.play();
        if (!t) {
            const sButton = document.querySelector("#start-btn")
            sButton.classList.add("btn-gray")
            sButton.innerHTML = "Stop"
            timer.stop()
            timer.start()
            t = true
        }

        moves++
        moveCounter.innerHTML = "Moves:" + moves
        currentElement.classList.add("move")
        currentElement.style.top = top + "px"
        currentElement.style.left = left + "px"
        //clicked

        //blank
        blankItem.style.top = currElemtTop + "px"
        blankItem.style.left = currElelementLeft + "px"
        //blank

        addEventListener('drag', (event) => { console.log("EEEEEEEEE"); });
        //Moving Elements
        console.log(currElemtTop);
        game.removeEventListener("click", moveElement)
    }

    game.addEventListener("click", moveElement)


    document.body.addEventListener('transitionend', () => {
        game.addEventListener("click", moveElement)
        generateNewElements(gameElements)
    })

}

///After move element generates new list of positioned elements:
function generateNewElements(array) {
    const game = document.querySelector(".game")
    game.innerHTML = ""
    for (let i = 0; i < gameElements.length; i++) {


        const itemBody = document.createElement("div")
        itemBody.classList.add("item__body")
        itemBody.innerHTML = gameElements[i]
        if (gameElements[i] == gameElements.length) {
            itemBody.setAttribute("id", "blank")
            itemBody.innerHTML = ""
        }
        // gameItem.appendChild(itemBody)
        game.appendChild(itemBody)


    }
    addDefaultPosition()
}
function createGameMainBody(coutOfElements) {

    let main = document.createElement("main")
    main.classList.add("game-main")
    GAMEBODY.appendChild(main)

    main.appendChild(generateGameWithElements(coutOfElements))
    main.appendChild(generateFrameSizes())


    addDefaultPosition()

}
/////////////////////////////////////////////////////////////////////////
function generateGameWithElements(boardSizes,) {

    const game = document.createElement("div")
    game.classList.add("game")

    if (boardSizes == 8) {
        game.classList.add("size8")
    }
    if (boardSizes == 7) {
        game.classList.add("size7")
    }
    if (boardSizes == 6) {
        game.classList.add("size6")
    }
    if (boardSizes == 5) {
        game.classList.add("size5")
    }
    if (boardSizes == 4) {
        game.classList.add("size4")
    }
    if (boardSizes == 3) {
        game.classList.add("size3")
    }




    if (!gameElements.length) {

        for (let i = 0; i < boardSizes * boardSizes; i++) {
            gameElements.push(i + 1)

        }
        gameElements.sort((a, b) => Math.random() - 0.5)
    }






    for (let i = 0; i < gameElements.length; i++) {


        const itemBody = document.createElement("div")
        itemBody.classList.add("item__body")
        itemBody.innerHTML = gameElements[i]
        if (gameElements[i] == gameElements.length) {
            itemBody.setAttribute("id", "blank")
            itemBody.innerHTML = ""
        }
        // gameItem.appendChild(itemBody)
        game.appendChild(itemBody)


    }
    return game
}
function generateFrameSizes() {
    const frameSizes = document.createElement("div")
    frameSizes.classList.add("frame-sizes")

    console.log(elementSize);
    const options = `
    <span>Frame size:${sizeOfboard + "x" + sizeOfboard}</span>
 <div></div>
 <span>Other sizes: </span><a href="#">3x3</a> <a href="#">4x4</a> <a href="#">5x5</a> <a href="#">6x6</a> <a href="#">7x7</a>  <a href="#">8x8</a>
    `

    frameSizes.innerHTML = options

    return frameSizes
}

function changeGameSizes() {

    const sizes = document.querySelector(".frame-sizes")
 clearAllvalues()

    sizes.addEventListener("click", (e) => {
        deleteGameSave()

        switch (e.target.innerHTML) {
            case "3x3":
                amountOfElements = 3
                MAINFN()
                break


            case "4x4":
                amountOfElements = 4
                MAINFN(4)
                break
            case "5x5":
                amountOfElements = 5
                MAINFN()
                break

            case "6x6":
                amountOfElements = 6
                MAINFN()
                break
            case "7x7":
                amountOfElements = 7
                MAINFN(7)
                break
            case "8x8":
                amountOfElements = 8

                MAINFN(8)
                break
            //   default :console.log("default");
        }
    })
}


document.body.addEventListener("click", (e) => {
    const sizes = document.querySelector(".frame-sizes")
    if (e.target.nodeName === "A") {
        sizes.firstElementChild.innerHTML = sizes.firstElementChild.innerHTML.split(":")[0] + ":" + e.target.innerHTML

        // console.log(sizes.firstElementChild);
        changeGameSizes()

    }

})



const resizeObserver = new ResizeObserver((entries) => {


    addDefaultPosition()


})
resizeObserver.observe(document.body)



ControllButtons.addEventListener("click", (e) => {
    let clickedButton = e.target.innerHTML
    if (clickedButton === "Shuffle and Start") {
        localStorage.removeItem("game-save")
        const movesX=document.querySelector(".score")
        movesX.firstElementChild.innerHTML="Moves:0"
        movesX.lastElementChild.innerHTML="Time:0:0"
        const sButton = document.querySelector("#start-btn")
        sButton.classList.add("btn-gray")
        sButton.innerHTML = "Stop"
        gameElements = []
        if (timer.interval) {
            timer.stop()
            clearTimer()
            timer.start()
            

        }
        else{
            timer.stop()
            clearTimer()
            timer.start()
        }

       
        MAINFN()

        moves = 0
    }
    if (clickedButton === "Start") {
        e.target.classList.toggle("btn-gray")
        e.target.innerHTML = "Stop"
        t = true
        if(!timer.interval){
             timer.start()  
        }
     

    }
    if (clickedButton === "Stop") {
        e.target.classList.toggle("btn-gray")
        e.target.innerHTML = "Start"
        t = false
        t.interval=null
        timer.stop()
        
    }
    if (clickedButton === "Save") {
        SaveInLocalStorage()
    }
    if (clickedButton === "Results") {
        const m = new Modal()
        const results = localStorage.getItem("gem-result")
        if (results) {
            let data = JSON.parse(results)
            console.log(data);

            m.openModal(data)
        }
        if (!results) {
            m.openModal(null, "<h2>Top 10 list </h2>  <br>List Is Empty")
        }
    }

})


const timer = {
    interval: null,
    start: () => {
        // seconds = 0
        // minutes = 0
        this.interval = setInterval(() => {
            seconds++
            if (seconds == 60) {
                minutes++
                seconds = 0

            }
            TIMER.innerHTML = "Time:" + minutes + " : " + seconds
        }, 1000);
    },


    stop: () => {
        clearInterval(this.interval)
    }


}
function clearTimer() {
    seconds = 0
    minutes = 0
}



////Save in local Storage

function topResult(results) {
    if (results) {

        let score = JSON.parse(localStorage.getItem("gem-result"))
        if (score) {

            score.push(results)
            score.sort((a, b) => a.moves - b.moves)
            if (score.length >= 10) {
                score.pop()
            }
            localStorage.setItem("gem-result", JSON.stringify(score))



        }
        if (!score) {
            localStorage.setItem("gem-result", JSON.stringify([results]))
        }

    }
}
function SaveInLocalStorage(results) {
    //   const values=  document.querySelectorAll(".item__body")


    // const arr=Array.from(values).map(e=>e.innerHTML)
    const values = document.getElementsByClassName("game")
    console.log(values);
    for (let i = 0; i < values.length; i++) {
        const e = values[i];
        console.log(e);
    }
    // const arr=Array.from(values).map(e=>e.innerHTML)
    // console.log(arr);
    let status = {
        moves,
        minutes,
        seconds,
        gamePos: gameElements,


    }
    timer.stop()
    console.log(status);
    localStorage.setItem("game-save", JSON.stringify(status))
}

function getFromLocalStorage(name) {
    const data = localStorage.getItem(name)
    if (data) {
        return JSON.parse(data)
    }

}

function deleteGameSave() {
    gameElements = []
    localStorage.removeItem("game-item")
}

function clearAllvalues (){
    const movesX=document.querySelector(".score")
        movesX.firstElementChild.innerHTML="Moves:0"
        movesX.lastElementChild.innerHTML="Time:0:0"
        const sButton = document.querySelector("#start-btn")
        sButton.classList.remove("btn-gray")
        sButton.innerHTML = "Start"
    timer.stop()
    clearTimer()
    moves=0
}