import i0 from '../i0.js'

i0.obj('success', 
`
    <h1>Works</h1>
`,
ui => {
    console.log(location.search.split('?session_id=').join(''))
})

export default {}