const images = document.querySelectorAll('.slide')
const previousArrow = document.querySelector('#previous-arrow')
const nextArrow = document.querySelector('#next-arrow')


let currentImage = 0


nextArrow.addEventListener('click', () => {

    if (currentImage == images.length -1) {
        return
    }

    hiddenImage()
    currentImage++
    showImage()

    checkArrows()
})



previousArrow.addEventListener('click', () => {
    if (currentImage == 0) {
        return
    }

    hiddenImage()
    currentImage--
    showImage()

    checkArrows()
    
})





function hiddenImage() {
    document.querySelector('.show-image').classList.remove('show-image')
}

function showImage() {
    images[currentImage].classList.add('show-image')
}


function checkArrows() {
    const firstImage = currentImage !== 0
    const lastImage = currentImage !== 0 && currentImage == images.length -1

    if (firstImage) {
        previousArrow.classList.remove('opacity')
    } else {
        previousArrow.classList.add('opacity')
        console.log('opacidade adicionada com sucesso na primeira seta')
    }

    if (lastImage) {
        nextArrow.classList.add('opacity')
        console.log('opacidade adicionada com sucesso na ultima seta')
    } else {
        nextArrow.classList.remove('opacity')
    }


}

