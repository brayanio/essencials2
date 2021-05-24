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
        <button i0="refresh" class="fixed-btn"><i class="material-icons">refresh</i><sup i0="refreshCount" class="fixed-notification"></sup></button>
    </div>
    <div i0="container"></div>
`,
ui => {

    document.title = 'Exercise | Essencials'

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


    const loadCards = () => {
        let save = Object.assign({}, videos.get()[0])
        save.cards = save.cards.map(i => linkcardAr()[i])
        cards = save.cards
        console.log('loadcards', cards)
        return cards
    }

    const saveCards = (refreshVal) => {
        const linkcards = linkcardAr()
        cards = [
            removeRandom(linkcards),
            removeRandom(linkcards),
            removeRandom(linkcards)
        ]
        videos.push({
            date: new Date().toDateString(),
            cards: cards.map(o => o.i),
            refreshes: refreshVal
        })
    }

    let cards
    if(!videos.get().length){
        console.log('No data found', videos.get())
        saveCards(3)
        cards = loadCards()
        ui.refreshCount.innerText = save.refreshes
    } else {
        let save = videos.get()[0]
        let savedDate = new Date(save.date)
        let today = new Date()
        if(!sameDay(savedDate, today)){
            console.log('Its a different Day')
            videos.remove(save)
            saveCards(3)
            cards = loadCards()
        } else {
            cards = loadCards()
        }
        ui.refreshCount.innerText = save.refreshes
    }
    cards.forEach(card => ui.container.appendChild(i0.load('link-card', card)))
    
    ui.refresh.onclick = () => {
        let save = videos.get()[0]
        if(save.refreshes > 0){            

            videos.remove(videos.get()[0])
            saveCards(save.refreshes - 1)
            cards = loadCards()
            save = videos.get()[0]
            ui.refreshCount.innerText = save.refreshes

            console.log('updated videos', videos.get()[0])

            ui.container.innerHTML = ''
            cards.forEach(card => ui.container.appendChild(i0.load('link-card', card)))
        }
    }
})

export default {}