import i0 from '../i0.js'
import tarot from './tarot.js'

i0.obj('tarot-reading', 
`
<section class="section long">
    <b class="header">Tarot Reading</b>
    <div i0="container" class="container center"></div>
</section>
`,
ui => {

    const removeRandom = (array) => {
        const random = Math.floor(Math.random() * array.length)
        return array.splice(random, 1)[0]
     };

    const tarotAr = Object.values(tarot)

    let cards = [
        removeRandom(tarotAr),
        removeRandom(tarotAr),
        removeRandom(tarotAr)
    ]

    const sameDay = (d1, d2) => {
        return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
      }

    if(!localStorage.cards){
        localStorage.cards = JSON.stringify({
            date: new Date(),
            cards
        })
    } else {
        const save = JSON.parse(localStorage.cards)
        if(sameDay(new Date(save.date), new Date()))
            cards = save.cards
    }
    
    cards.forEach(card => {
        if((Math.random() * 100) <= 33.33)
            card.reversed = true
        card.reading = true
        ui.container.appendChild(i0.load('tarot-card', card))
    })

    

})

export default {}