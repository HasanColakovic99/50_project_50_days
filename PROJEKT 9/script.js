const sounds = ['crowd', 'siii', 'siii2', 'siii3'];

sounds.forEach(sound => {
    // ZA SVAKI ELEMENT IZ POLJA sounds
    // DODAJ MU ELEMENT BUTTON
    const btn = document.createElement('button');
    // TOM ELEMENTU DODAJ KLASU "btn" KAKO BISMO IH MOGLI UREDITI U CSS
    btn.classList.add('btn');

    // TEKST UNUTAR BUTTON-A BIT ĆE ISTI ONAJ KAO U POLJU SOUND
    btn.innerText = sound;

    // DODALI SMO EVENT KADA KLIKNEMO NA NEKI BUTTON, DA SE POKRENE ZVUK
    btn.addEventListener('click', () => {
        // FUNKCIJA KOJA SLUŽI DA ZAUSTAVI ZVUK AKO DRUGI KLIKNEMO
        stopSongs();

        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}