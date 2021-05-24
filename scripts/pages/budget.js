import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('budget-page', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Budget</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <div i0="container"></div>
`,
ui => {

    document.title = 'Budget | Essencials'

    if(!data.loaded())
        return location.hash = '#home'
        
    ui.container.appendChild(i0.load('budget', {solo: true}))
    i0.env('mode', 'edit')
    i0.broadcast('editmode')
    i0.broadcast('update')

})

export default {}