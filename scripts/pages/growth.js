import i0 from '../i0.js'
import logs from '../services/logs.js'

i0.obj('growth', 
`
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <h1 class="header center">Growth</h1>
    <div>
        <a href="#tarot" class="nav-link">Tarot</a>
    </div>
`,
ui => {

    if(!localStorage.sessionId || !localStorage.email)
        location.hash = '#home'

})

export default {}