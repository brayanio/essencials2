import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('profile', 
`
    <h1 class="header v-center">${i0.nugget('logo')} Profile</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
        <a href="#feedback" class="nav-link">Feedback</a>
    </div>
    <div>
        <button class="nav-link" i0="logout">Logout</button>
    </div>
`,
ui => {

    if(!data.loaded())
        return location.hash = '#home'

    if(data.account()){
        let a = data.account()
        let name = a.nickname.substr(0, 1).toUpperCase() + a.nickname.substr(1)
        document.title = `${name} | Essencials`
    }

    ui.logout.onclick = () => {
        localStorage.clear()
        location.reload()
    }
    
})

export default {}