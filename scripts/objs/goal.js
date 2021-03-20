import i0 from '../i0.js'
import goals from '../services/goals.js'

i0.obj('goal', 
`
<section class="section">
    <b class="header">Goals</b>
    <form class="form" i0="form">
        <input i0="input" placeholder="Set your goal!">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container" class="container"></div>
</section>
`,
ui => {

    ui.create.onclick = e => {
        e.preventDefault()
        if(ui.input.value){
            goals.push(ui.input.value)
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    i0.onbroadcast('update', selected => {
        ui.container.innerHTML = ''
        goals.get().forEach((item) => ui.container.appendChild(i0.load('goal-item', {item, service: goals, open: selected === item})))
    })
    i0.onbroadcast('editmode', () => ui.form.classList.remove('hidden'))
    i0.onbroadcast('viewmode', () => ui.form.classList.add('hidden'))

})

export default {}