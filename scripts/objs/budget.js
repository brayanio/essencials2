import i0 from '../i0.js'
import budgets from '../services/budgets.js'

i0.obj('budget', 
`
    <h1 class="header">Affirmations</h1>
    <form class="form">
        <input i0="input" placeholder="Affirm Intention">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container"></div>
`,
ui => {

    
    ui.create.onclick = e => {
        e.preventDefault()
        if(ui.input.value){
            affirmations.push(ui.input.value)
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    i0.onbroadcast('update', (index) => {
        ui.container.innerHTML = ''
        affirmations.get().forEach((item, i) => ui.container.appendChild(i0.load('list-item', {item, service: affirmations, open: i === index})))
    })

})

export default {}