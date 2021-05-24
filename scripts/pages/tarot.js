import i0 from '../i0.js'
import tarot from '../objs/tarot.js'

i0.obj('tarot', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Todd Lewis Tarot</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <div i0="container" class="center"></div>
`,
ui => {
    
    Object.values(tarot()).forEach(tarotCard => {
        ui.container.appendChild(i0.load('tarot-card', tarotCard))
    })

    document.title = 'Tarot | Essencials'

})

export default {}