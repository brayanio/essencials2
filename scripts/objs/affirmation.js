import i0 from '../i0.js'
import affirmations from '../services/affirmations.js'

i0.obj('affirmation', 
`
<section class="section" i0="section">
    <b class="header" i0="title"><a class="header-link" href="#affirmations">Affirmations</a></b>
    <form class="form" i0="form">
        <input i0="input" placeholder="Affirm Intention">
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
            affirmations.push(ui.input.value)
            ui.input.value = ''
            i0.broadcast('update')
        }
    }

    const checkTitle = val => ui.section.classList.contains('editmode') ? null : ui.section.classList[val?'remove':'add']('hidden')

    i0.onbroadcast('update', (selected) => {
        ui.container.innerHTML = ''
        affirmations.get().forEach((item) => ui.container.appendChild(i0.load('list-item', {item, service: affirmations, open: selected === item})))
        checkTitle(affirmations.get().length)
    })

    i0.onbroadcast('editmode', () => {
        ui.form.classList.remove('hidden')
        checkTitle(true)
        ui.section.classList.add('editmode')
    })
    i0.onbroadcast('viewmode', () => {
        ui.form.classList.add('hidden')
        ui.section.classList.remove('editmode')
        checkTitle(affirmations.get().length)
    })

})

export default {}