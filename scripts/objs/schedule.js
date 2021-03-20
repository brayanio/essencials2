import i0 from '../i0.js'
import schedule from '../services/schedule.js'

i0.obj('schedule', 
`
<section class="section">
    <h1 class="header">Schedule</h1>
    <form class="form" i0="form">
        <input i0="input" placeholder="Task">
        <hr class="m">
        <input i0="time" type="time">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container" class="container"></div>
</section>
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
    i0.onbroadcast('editmode', () => ui.form.classList.remove('hidden'))
    i0.onbroadcast('viewmode', () => ui.form.classList.add('hidden'))

})

export default {}