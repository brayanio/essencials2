import i0 from '../i0.js'
import data from '../services/data.js'
import promptList from '../objs/prompt-ar.js'
import promptService from '../services/prompt.js'

i0.obj('prompt-page', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Write</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <div i0="container"></div>
    <div i0="history"></div>
`,
ui => {

    document.title = 'Write | Essencials'

    if(!data.loaded())
        return location.hash = '#home'
        
    ui.container.appendChild(i0.load('prompt'))

    const promptAr = promptList()
    const loadHistory = () => {
        let prompts = promptService.get()
        ui.history.innerHTML = ''
        if(prompts.length > 1){
            let p1,p2,p3
            p1 = prompts[prompts.length-1]
            p2 = prompts[prompts.length-2]
            p3 = prompts[prompts.length-3]
            if(p1 && p1.value) ui.history.appendChild(i0.element(`<div><p>${promptAr[p1.promptIndex]}</p><p>${p1.value}</p></div>`))
            if(p2 && p2.value) ui.history.appendChild(i0.element(`<div><p>${promptAr[p2.promptIndex]}</p><p>${p2.value}</p></div>`))
            if(p3 && p3.value) ui.history.appendChild(i0.element(`<div><p>${promptAr[p3.promptIndex]}</p><p>${p3.value}</p></div>`))
        }
    }
    loadHistory()
    i0.onbroadcast('update-prompt', loadHistory)

})

export default {}