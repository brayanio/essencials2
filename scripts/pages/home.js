import i0 from '../i0.js'
import affirmations from '../objs/affirmations.js'
import notify from '../services/notify.js'

const today = () => `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`

const sameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear() 
    && d1.getMonth() === d2.getMonth() 
    && d1.getDate() === d2.getDate()

i0.obj('home', 
`
<div class="space-between">
    <b class="header v-center"><img src="./assets/ico.png" width="64px">${today()}</b>
    <button i0="view" class="fixed-btn" title="View Mode"><i class="material-icons">visibility</i></button>
    <button i0="edit" class="fixed-btn hidden" title="Edit Mode"><i class="material-icons">mode_edit</i></button>
</div>
<div>
    <a href="#growth" class="nav-link">Growth</a>
    <a href="#feedback" class="nav-link">Feedback</a>
</div>
<hr class="m">
<div class="d-flex" i0="container"></div>
<hr i0="signup">
<hr i0="subscribe">
<hr i0="freetrial">
<hr i0="verify">
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

    i0.onbroadcast('signin', a => {
        console.log('sign in', a)
        if(a){
            if(!a.verified) return i0.broadcast('verify-modal')
            if(!a.freeTrial) return i0.broadcast('freetrial-modal')
            if(!a.subTime) return i0.broadcast('sub-modal')
        }
    })

    i0.onbroadcast('dataloaded', () => {
        ui.container.appendChild(i0.load('affirmation'))
        ui.container.appendChild(i0.load('goal'))
        ui.container.appendChild(i0.load('schedule'))
        ui.container.appendChild(i0.load('budget'))
        ui.container.appendChild(i0.load('tarot-reading'))
        ui.view.click()
        i0.broadcast('update')

        if(!localStorage.affirmDate || !sameDay(new Date(localStorage.affirmDate), new Date())){
            localStorage.affirmDate = new Date().toDateString()
            notify('Affirmation', affirmations()[(Math.random() * affirmations.length)])
        }
    })

    i0.load('signup-modal', {}, ui.signup)
    i0.load('subscribe', {}, ui.subscribe)
    i0.load('freetrial', {}, ui.freetrial)
    i0.load('verify', {}, ui.verify)
})

export default {}