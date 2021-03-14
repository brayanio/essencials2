import i0 from '../i0.js'
import budgets from '../services/budgets.js'

i0.obj('budget', 
`
    <h1 class="header">Budget</h1>
    <form class="form">
        <input i0="input" placeholder="Budget Name">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container"></div>
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

})

export default {}