import i0 from '../i0.js'

i0.obj('home', 
`
    <hr i0="affirmations">
    <hr i0="budgets">
`,
ui => {
    
    i0.load('panel', i0.load('affirmation'), ui.affirmations)
    i0.load('panel', i0.load('budget'), ui.budgets)

})

export default {}