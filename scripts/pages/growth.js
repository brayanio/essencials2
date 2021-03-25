import i0 from '../i0.js'
import logs from '../services/logs.js'
import linkcardAr from '../objs/link-card-ar.js'
import data from '../services/data.js'

i0.obj('growth', 
`
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <h1 class="header center">Growth</h1>
    <div>
        <a href="#tarot" class="nav-link">Tarot</a>
    </div>
    <div i0="container"></div>
`,
ui => {

    if(!data.loaded())
        return location.hash = '#home'

    const removeRandom = (array) => {
        const random = Math.floor(Math.random() * array.length)
        return array.splice(random, 1)[0]
    }

    const linkcards = Object.values(linkcardAr())

    let cards = [
        removeRandom(linkcards),
        removeRandom(linkcards),
        removeRandom(linkcards)
    ]

    cards.forEach(card => ui.container.appendChild(i0.load('link-card', card)))
        
})

export default {}