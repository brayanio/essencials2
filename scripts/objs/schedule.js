import i0 from '../i0.js'
import schedule from '../services/schedule.js'

i0.obj('schedule', 
`
    <h1 class="header">Schedule</h1>
    <form class="form">
        <input i0="input" placeholder="Task">
        <input i0="time" type="time">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container"></div>
`,
ui => {

    
    ui.create.onclick = e => {
        e.preventDefault()
        if(ui.input.value && ui.time.value){
            schedule.push({name: ui.input.value, time: ui.time.value})
            ui.input.value = ''
            ui.time.value = ''
            i0.broadcast('update')
        }
    }

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        schedule.get().forEach(item => ui.container.appendChild(i0.load('schedule-item', {item, service: schedule, open: selected === item})))
    })

})

export default {}