import i0 from '../i0.js'
import goals from '../services/goals.js'

i0.obj('goal', 
`
<section class="section" i0="section">
    <b class="header" i0="title"><a class="header-link" href="#goals">Goals</a></b>
    <form class="form" i0="form">
        <input i0="input" placeholder="State Your Goal">
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
        if(ui.input.value){
            goals.push(ui.input.value)
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    const checkTitle = val => ui.section.classList.contains('editmode') ? null : ui.section.classList[val?'remove':'add']('hidden')

    i0.onbroadcast('update', selected => {
        ui.container.innerHTML = ''
        goals.get().forEach((item) => ui.container.appendChild(i0.load('goal-item', {item, service: goals, open: selected === item})))
        checkTitle(goals.get().length)
    })
    
    i0.onbroadcast('editmode', () => {
        ui.form.classList.remove('hidden')
        checkTitle(true)
        ui.section.classList.add('editmode')
    })
    i0.onbroadcast('viewmode', () => {
        ui.form.classList.add('hidden')
        ui.section.classList.remove('editmode')
        checkTitle(goals.get().length)
    })

})

export default {}