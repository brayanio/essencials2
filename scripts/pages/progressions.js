import i0 from '../i0.js'
import logs from '../services/logs.js'

i0.obj('progressions', 
`
    <div class="right">
        <a href="#home" class="nav-link">Home</a>
    </div>
    <h1 class="header">Progressions</h1>
    <section class="section long">
        <form class="form" i0="form">
            <input i0="input" placeholder="Name">
            <button i0="create" type="submit">+</button>
        </form>
        <div i0="container" class="container"></div>
    </section>
`,
ui => {

    if(!localStorage.sessionId || !localStorage.email)
        location.hash = '#home'

})

export default {}