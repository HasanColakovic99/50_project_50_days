const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // TRIGER ZA SKROLANJE
    const triggerBottom = window.innerHeight / 5 * 4;


    // ZA SVAKI TAJ BOX
    boxes.forEach(box => {

        // UZMI VRH TOG BOX-A (kao pravougaonik)
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}
