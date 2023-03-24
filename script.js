const find = document.querySelector('.search')
const liItem = document.querySelectorAll('li')

const searchEngine = e => {
    const text = e.target.value.toLowerCase(); // zabezpieczanie przed malymi/duzymi literami
    console.log(text)                          //e.target - wskazuje na input, a e.target.value - tekst ktory wpisujemy

    liItem.forEach(el => {
        const task = el.textContent

        if(task.toLowerCase().indexOf(text) !== -1){  //indexOf - jezeli nie ma nic zadanego zwraca zawsze -1!!!
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })

}


//Listenery
find.addEventListener('keyup', searchEngine)
