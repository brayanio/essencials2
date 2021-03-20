import i0 from '../i0.js'

i0.obj('home', 
`
<div class="right">
    <button i0="view" class="fixed-btn">View Mode</button>
    <button i0="edit" class="fixed-btn hidden">Edit Mode</button>
    <a href="#tarot" class="nav-link">Tarot</a>
</div>
<hr class="m">
<div class="d-flex">
    <hr i0="affirmations">
    <hr i0="goals">
    <hr i0="schedules">
    <hr i0="budgets">
    <hr i0="logs">
</div>
`,
ui => {
    i0.load('affirmation', {}, ui.affirmations)
    i0.load('budget', {}, ui.budgets)
    i0.load('schedule', {}, ui.schedules)
    i0.load('goal', {}, ui.goals)
    i0.load('log', {}, ui.logs)

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
})

export default {}