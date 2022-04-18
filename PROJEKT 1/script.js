// dohvati sve one elemente sa klasom "panel"
const paneli = document.querySelectorAll('.panel')

// prolazimo kroz sve panele i dodajemo event kada se klikne na neki od elemenata sa klasom "panel"
// kada se klikne na taj element, njemu se doda klasa "active"
paneli.forEach((panel) => {
    panel.addEventListener('click', () => {
        // prije nego što dodamo na klik nekom elementu klasu "active" obrisat ćemo svima klasu "active" uz pomoć funkcije koju smo napravili
        brisanjeKlaseActive();
        panel.classList.add('active')
    })
})


// problem je što se drugim elementima onda ne briše ta klasa "active"
// stoga ćemo napraviti funkciju koja će svim elementima obrisati klasu "active"
function brisanjeKlaseActive() {
    paneli.forEach((panel) => {
        panel.classList.remove('active')
    })
}