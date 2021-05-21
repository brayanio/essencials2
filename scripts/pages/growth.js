import i0 from '../i0.js'
import linkcardAr from '../objs/link-card-ar.js'
import data from '../services/data.js'
import videos from '../services/videos.js'

const sameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear() 
    && d1.getMonth() === d2.getMonth() 
    && d1.getDate() === d2.getDate()

i0.obj('growth', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Wellness Exercises</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <div class="right">
        <button i0="refresh" class="nav-link">Refresh</button>
    </div>
    <div i0="container"></div>
`,
ui => {

    if(!data.loaded())
        return location.hash = '#home'

    const removeRandom = (array) => {
        const random = Math.floor(Math.random() * array.length)
        const card = array.splice(random, 1)[0]
        let i
        linkcardAr().find((o, index) => {
            if(o.title === card.title){
                i = index
                return true
            }
        })
        return {i, card}
    }

    const linkcards = linkcardAr()

    let cards = [
        removeRandom(linkcards),
        removeRandom(linkcards),
        removeRandom(linkcards)
    ]

    console.log('cards', cards)

    const loadCards = () => {
        let save = Object.assign({}, videos.get()[0])
        save.cards = save.cards.map(i => linkcardAr()[i])
        cards = save.cards
    }

    if(!videos.get().length){
        videos.push({
            date: new Date().toDateString(),
            cards: cards.map(o => o.i)
        })
        loadCards()
    } else {
        let save = videos.get()[0]
        let savedDate = new Date(save.date)
        let today = new Date()
        if(!sameDay(savedDate, today)){
            videos.remove(save)
            videos.push({
                date: new Date().toDateString(),
                cards: cards.map(o => o.i)
            })
            loadCards()
        } else {
            loadCards()
        }
    }

    cards.forEach(card => ui.container.appendChild(i0.load('link-card', card)))
    
    if(!localStorage.refreshes) localStorage.refreshes = 3
    ui.refresh.innerText = `Refresh (${localStorage.refreshes})`
    ui.refresh.onclick = () => {
        if(localStorage.refreshes > 0){
            localStorage.refreshes--
            ui.refresh.innerText = `Refresh (${localStorage.refreshes})`
            const linkcards = linkcardAr()

            let cards = [
                removeRandom(linkcards),
                removeRandom(linkcards),
                removeRandom(linkcards)
            ]

            videos.remove(videos.get()[0])
            videos.push({
                date: new Date().toDateString(),
                cards: cards.map(o => o.i)
            })
            
            loadCards()

            console.log('updated cards', cards)

            ui.container.innerHTML = ''
            cards.forEach(card => ui.container.appendChild(i0.load('link-card', card)))
        }
    }
})

export default {}