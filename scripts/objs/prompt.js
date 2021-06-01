import i0 from '../i0.js'
import promptAr from './prompt-ar.js'
import promptService from '../services/prompt.js'

const sameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear() 
    && d1.getMonth() === d2.getMonth() 
    && d1.getDate() === d2.getDate()

i0.obj('prompt', 
`
    <section class="section">
        <p i0="prompt" class="billboard text-center"></p>
        <form class="form w100">
            <textarea i0="input" class="w100" style="resize:none;min-height:100px;height:100px;"></textarea>
            <button i0="send" type="submit"><i class="material-icons">save</i></button>
        </form>
    </section>
`,
(ui, props) => {
    
    let prompts = promptAr()
    let save = promptService.get()[0]
    
    let cachePrompts = promptService.get().filter((item, index) => { if(item && !item.value && index !== 0) return true })
    cachePrompts.forEach(item => promptService.remove(item))

    if(!save || !sameDay(new Date(save.date), new Date()) || save.value){
        let promptIndex = Math.floor(Math.random() * prompts.length)
        if(save && !save.value) promptService.remove(save)
        promptService.push({
            date: new Date().toDateString(),
            promptIndex
        })
        save = promptService.get()[0]
    }
    ui.prompt.innerText = prompts[save.promptIndex]

    ui.send.onclick = e => {
        e.preventDefault()
        let same = promptService.get().find(item => (item.date === new Date().toDateString()) && item.value)
        if(same) promptService.remove(same)
        promptService.push({
            date: new Date().toDateString(),
            promptIndex: save.promptIndex,
            value: ui.input.value
        })
        ui.input.value = ''
        i0.broadcast('update-prompt')
    }

})

export default {}