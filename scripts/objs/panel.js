import i0 from '../i0.js'

i0.obj('panel', 
`
    <div i0="panel" class="panel"></div>
`,
(ui, props) => {
    if(props) ui.panel.appendChild(props)
})

export default {}