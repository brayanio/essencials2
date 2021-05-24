import i0 from '../i0.js'
import budgets from '../services/budgets.js'

i0.obj('budget', 
`
<section class="section" i0="section">
    <b class="header" i0="title"><a class="header-link" href="#budget">Budget</a></b>
    <form class="form" i0="form">
        <input i0="input" placeholder="Budget Name">
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
            budgets.push({name: ui.input.value, value: 0})
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    const checkTitle = val => ui.section.classList.contains('editmode') ? null : ui.section.classList[val?'remove':'add']('hidden')

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        budgets.get().forEach(item => ui.container.appendChild(i0.load('budget-item', {item, service: budgets, open: selected === item})))
        checkTitle(budgets.get().length)
    })

    i0.onbroadcast('editmode', () => {
        ui.form.classList.remove('hidden')
        checkTitle(true)
        ui.section.classList.add('editmode')
    })
    i0.onbroadcast('viewmode', () => {
        ui.form.classList.add('hidden')
        ui.section.classList.remove('editmode')
        checkTitle(budgets.get().length)
    })

})

export default {}