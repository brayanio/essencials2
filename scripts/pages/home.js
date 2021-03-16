import i0 from '../i0.js'

i0.obj('home', 
`
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

})

export default {}