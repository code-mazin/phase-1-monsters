function fetchMonsters() {
    return fetch("http://localhost:3000/monsters/?_limit=50")
        .then(resp => resp.json())
        .then(json => renderMonsters(json))
}

function renderMonsters(monsters) {
    const div = document.getElementById('monster-container')
    monsters.forEach(monster => {
        const h2 = document.createElement('h2')
        h2.innerHTML = monster.name
        div.appendChild(h2)
        const h4 = document.createElement('h4')
        h4.innerHTML = `Age: ${monster.age}`
        div.appendChild(h4)
        const p = document.createElement('p')
        p.innerHTML = `Bio: ${monster.description}`
        div.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    fetchMonsters()
})