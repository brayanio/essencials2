import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('profile', 
`
    <h1 class="header v-center">${i0.nugget('logo')} Profile</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>

    <section i0="namechange" class="section hidden">
        <form class="form" i0="nameform">
            <input placeholder="Nickname" i0form="name">
            <button type="submit" i0form="submit"><i class="material-icons">send</i></button>
        </form>
        <br>
        <button class="nav-link" i0="cancelname">Cancel</button>
    </section>

    <p class="billboard" i0="namep">
        <button class="nav-link" i0="namebtn">Change Nickname</button>
    </p>
    <p class="billboard">
        <a href="#feedback" class="nav-link">Feedback</a>
    </p>
    <p class="billboard">
        <a class="nav-link" href="#recoverpassword">Change Password</a>
    </p>
    <p class="billboard">
        <button class="nav-link" i0="logout">Logout</button>
    </p>
`,
ui => {

    if(!data.loaded())
        return location.hash = '#home'

    if(data.account()){
        let a = data.account()
        let name = a.nickname.substr(0, 1).toUpperCase() + a.nickname.substr(1)
        document.title = `${name} | Essencials`
    }

    ui.namebtn.onclick = () => {
        ui.namep.classList.add('hidden')
        ui.namechange.classList.remove('hidden')
    }
    ui.cancelname.onclick = () => {
        ui.namechange.classList.add('hidden')
        ui.namep.classList.remove('hidden')
    }

    let nameform = i0.form(ui.nameform)
    nameform.submit.el.onclick = async e => {
        e.preventDefault()
        nameform = i0.form(ui.nameform)
        if(nameform.name.value){
            let res = await i0.fetch('nickname', {email: localStorage.email, sessionId: localStorage.sessionId, name: nameform.name.value})
            if(res.error) return console.error(res)
            location.reload()
        }
    }

    ui.logout.onclick = () => {
        localStorage.clear()
        location.reload()
    }
    
})

export default {}