


 export class Modal {
    constructor() {
        this.doc = document.body
        this.modal = document.createElement("div")
        this.modal.classList.add("modal")
        this.modal.innerHTML = `<h2> Top 10 score</h2>  <button class="modal__button">X</button>`

        this.outline = document.createElement("div")
        this.outline.classList.add("outline")
        // this.doc.appendChild(this.modal)
        // this.doc.appendChild(this.outline)

    }
    openModal(array) {
        this.doc.appendChild(this.modal)
        this.doc.appendChild(this.outline)
        this.outline.classList.add("shadow")

        this.generateModalItems(array)


        this.close = document.querySelector(".modal__button")
        this.close.addEventListener("click", () => {
            this.modal.remove()
            this.outline.remove()
        })
    }

    generateModalItems(array) {
        for (let i = 0; i < array.length; i++) {
            console.log("4444444444444444");
            const e = array[i];
            let modalItem = document.createElement("div")
            modalItem.classList.add("modal__item")

modalItem.innerHTML=  `<div class="modal__item">
<strong>Moves:${e.moves}</strong> <strong>Time:${e.time}</strong> &nbsp;<strong>Board-Size:${e.boardSize}</strong>

</div>`
            this.modal.appendChild(modalItem)
        }
    }

    closeModal() {

    }
}


