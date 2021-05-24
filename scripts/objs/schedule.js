import i0 from '../i0.js'
import schedule from '../services/schedule.js'

i0.obj('schedule', 
`
<section class="section" i0="section">
    <b class="header" i0="title"><a class="header-link" href="#schedule">Schedule</a></b>
    <form class="form" i0="form">
        <input i0="input" placeholder="Task">
        <hr class="m">
        <input i0="time" type="time" placeholder="Time">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container" class="container"></div>
</section>
`,
(ui, props) => {

    if(props && props.solo)
        ui.title.classList.add('hidden')
    
    ui.create.onclick = e => {
        e.preventDefault()
        if(ui.input.value && ui.time.value){
            schedule.push({name: ui.input.value, time: ui.time.value})
            ui.input.value = ''
            ui.time.value = ''
            i0.broadcast('update')
        }
    }

    const checkTitle = val => ui.section.classList.contains('editmode') ? null : ui.section.classList[val?'remove':'add']('hidden')

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        schedule.get().forEach(item => ui.container.appendChild(i0.load('schedule-item', {item, service: schedule, open: selected === item})))
        checkTitle(schedule.get().length)
    })
    
    i0.onbroadcast('editmode', () => {
        ui.form.classList.remove('hidden')
        checkTitle(true)
        ui.section.classList.add('editmode')
    })
    i0.onbroadcast('viewmode', () => {
        ui.form.classList.add('hidden')
        ui.section.classList.remove('editmode')
        checkTitle(schedule.get().length)
    })

})

export default {}