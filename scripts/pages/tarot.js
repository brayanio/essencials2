import i0 from '../i0.js'
import tarot from '../objs/tarot.js'

i0.obj('tarot', 
`
    <div class="right">
        <a href="#home" class="nav-link">Home</a>
    </div>
    <h1 class="header center">Todd Lewis Tarot</h1>
    <div i0="container" class="center"></div>
`,
ui => {
    
    Object.values(tarot).forEach(tarotCard => {
        ui.container.appendChild(i0.load('tarot-card', tarotCard))
    })

})

export default {}