const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`).join('')
})

// IMALI SMO TEKST "EMAIL"
// METODOM SPLIT SMO TEKST RASTAVILI NA SLOVA I SADA JE TO POLJE
// ONDA ZA SVAKO SLOVO KREIRAMO SPAN (<span>E</span> <span>m</span> <span>a</span> <span>i</span> <span>l</span>)
// I ONDA UZ POMOĆ join SVE TO VRAĆAMO U STRING