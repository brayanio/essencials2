import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('goals-page', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Goals</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <div i0="container"></div>
`,
ui => {

    document.title = 'Goals | Essencials'

    if(!data.loaded())
        return location.hash = '#home'
        
    ui.container.appendChild(i0.load('goal', {solo: true}))
    i0.env('mode', 'edit')
    i0.broadcast('editmode')
    i0.broadcast('update')

})

export default {}