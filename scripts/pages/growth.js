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

    const linkcards = linkcardAr()

    const loadVideos = refreshVal => {
        let save = videos.get()[0]
        if(save){
            if(!sameDay(new Date(save.date), new Date())){
                videos.remove(save)
                refreshVal = 3
            }
        }
        save = videos.get()[0]
        ui.refreshCount.innerText = refreshVal
        
        let vids = []
        ui.container.innerHTML = ''
        Object.keys(linkcards).forEach((category, categoryIndex) => 
            ui.container.appendChild(
                i0.element(`
                    <input i0="video" placeholder="loading...">
                `,
                elUI => {
                    let videoIndex = Math.floor(Math.random() * linkcards[category].length)
                    if(save) videoIndex = save.cards[categoryIndex]
                    else vids.push(videoIndex)
                    i0.load('link-card', linkcards[category][videoIndex], elUI.video)
                })
            )
        )
        if(vids.length){
            videos.push({
                date: new Date().toDateString(),
                cards: vids,
                refreshes: refreshVal >= 0 ? refreshVal : 3
            })
        }
    }

    let save = videos.get()[0]
    loadVideos(save ? save.refreshes : 3)

    ui.refresh.onclick = () => {
        let save = videos.get()[0]
        if(save.refreshes > 0){   
            videos.remove(save)
            loadVideos(save.refreshes - 1)
        }
    }     

})

export default {}