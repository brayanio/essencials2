import i0 from '../i0.js'
import affirmations from '../services/affirmations.js'

i0.obj('affirmation', 
`
<section class="section">
    <b class="header">Affirmations</b>
    <form class="form" i0="form">
        <input i0="input" placeholder="Affirm Intention">
        <button i0="create" type="submit">+</button>
    </form>
    <div i0="container" class="container"></div>
</section>
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

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        affirmations.get().forEach((item) => ui.container.appendChild(i0.load('list-item', {item, service: affirmations, open: selected === item})))
    })

    i0.onbroadcast('editmode', () => ui.form.classList.remove('hidden'))
    i0.onbroadcast('viewmode', () => ui.form.classList.add('hidden'))

})

export default {}