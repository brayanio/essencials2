import i0 from '../i0.js'

const today = () => `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`

i0.obj('home', 
`
<div class="space-between">
    <b class="header">${today()}</b>
    <button i0="view" class="fixed-btn">View Mode</button>
    <button i0="edit" class="fixed-btn hidden">Edit Mode</button>
</div>
<div>
    <button i0="sub" class="nav-link">Subscribe</button>
    <a href="#progressions" class="nav-link">Progressions</a>
    <a href="#tarot" class="nav-link">Tarot</a>
</div>
<hr class="m">
<div class="d-flex" i0="container"></div>
<hr i0="signup">
<hr i0="subscribe">
`,
ui => {

    ui.view.onclick = () => {
        i0.broadcast('viewmode')
        ui.view.classList.add('hidden')
        ui.edit.classList.remove('hidden')
    }
    ui.edit.onclick = () => {
        i0.broadcast('editmode')
        ui.edit.classList.add('hidden')
        ui.view.classList.remove('hidden')
    }

    i0.onbroadcast('dataloaded', () => {
        ui.container.appendChild(i0.load('affirmation'))
        ui.container.appendChild(i0.load('goal'))
        ui.container.appendChild(i0.load('schedule'))
        ui.container.appendChild(i0.load('budget'))
        ui.container.appendChild(i0.load('tarot-reading'))
        ui.view.click()
        i0.broadcast('update')
    })

    i0.load('signup-modal', {}, ui.signup)
    i0.load('subscribe', {}, ui.subscribe)
    ui.sub.onclick = () => i0.broadcast('sub-modal')
})

export default {}