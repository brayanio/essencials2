import i0 from '../i0.js'
import affirmations from '../objs/affirmations.js'
import notify from '../services/notify.js'
import saveday from '../services/save-day.js'

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const today = () => `${months[new Date().getMonth()]} ${new Date().getDate()}`

const sameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear() 
    && d1.getMonth() === d2.getMonth() 
    && d1.getDate() === d2.getDate()

i0.obj('home', 
`
<div class="space-between v-center">
    <b class="header v-center">${i0.nugget('logo')}${today()}</b>
    <div>
        <button type="button" i0="download" class="fixed-btn d" title="Download todays data"><i class="material-icons">download</i></button>
        <button type="button" i0="view" class="fixed-btn" title="View Mode"><i class="material-icons">visibility</i></button>
        <button type="button" i0="edit" class="fixed-btn hidden" title="Edit Mode"><i class="material-icons">mode_edit</i></button>
    </div>
</div>
<div>
    <a href="#growth" class="nav-link">Exercise</a>
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
    ui.download.onclick = () => saveday.download()

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

    i0.onbroadcast('checkPayment', async () => {
        let res = await i0.fetch('payment', {checkSession: true, email: localStorage.email, sessionId: localStorage.sessionId})
        console.log('check payment', res)
    })

    window.i0 = {broadcast: val => i0.broadcast(val)}
})

export default {}