import i0 from '../i0.js'
import budgets from '../services/budgets.js'

i0.obj('budget', 
`
<section class="section">
    <b class="header">Budget</b>
    <form class="form" i0="form">
        <input i0="input" placeholder="Budget Name">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container" class="container"></div>
</section>
`,
ui => {

    
    ui.create.onclick = e => {
        e.preventDefault()
        if(ui.input.value){
            budgets.push({name: ui.input.value, value: 0})
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        budgets.get().forEach(item => ui.container.appendChild(i0.load('budget-item', {item, service: budgets, open: selected === item})))
    })

    i0.onbroadcast('editmode', () => ui.form.classList.remove('hidden'))
    i0.onbroadcast('viewmode', () => ui.form.classList.add('hidden'))

})

export default {}