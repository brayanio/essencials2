import i0 from '../i0.js'
import logs from '../services/logs.js'

i0.obj('log', 
`
<section class="section long">
    <h1 class="header">Logs</h1>
    <form class="form">
        <input i0="input" placeholder="Name">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container" class="container"></div>
</section>
`,
ui => {

    ui.create.onclick = e => {
        e.preventDefault()
        if(ui.input.value){
            logs.push({title: ui.input.value, ar: []})
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        logs.get().forEach((item) => ui.container.appendChild(i0.load('log-item', {item, service: logs, open: selected === item})))
    })

})

export default {}