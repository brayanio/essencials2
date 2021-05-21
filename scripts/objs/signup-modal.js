import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('signup-modal', 
`
    <div class="modal-bg" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header v-center">
                    ${i0.nugget('logo')}
                    <span i0="title"></span>
                </b>
                <a href="#" class="nav-link">X</a>
            </div>
            <form class="form" i0="signinForm">
                <input i0form="email" type="email" placeholder="Email"><br><br>
                <input i0form="password" type="password" placeholder="Password"><br><br>
                <button i0form="submit" type="submit"><i class="material-icons">chevron_right</i></button>
            </form>
            <form class="form hidden" i0="signupForm">
                <input i0form="first" placeholder="First Name" value="test"><br><br>
                <input i0form="last" placeholder="Last Name" value="test"><br><br>
                <input i0form="nickname" placeholder="Nick Name" title="We will call you by this name" value="test"><br><br>
                <input i0form="email" type="email" placeholder="Email" value="brayanbyrdsong@gmail.com"><br><br>
                <input i0form="password" type="password" placeholder="Password" value="test"><br><br>
                <input i0form="confirm" type="password" placeholder="Confirm Password" value="test"><br><br>
                <button i0form="submit" type="submit"><i class="material-icons">chevron_right</i></button>
            </form>
            <br><br>
            <div class="right">
                <button class="nav-link" i0="switch">New Account</button>
            </div>
        </section>
    </div>
`,
async (ui, props) => {
    let signinMode = false

    ui.switch.onclick = () => {
        signinMode = !signinMode
        ui.signupForm.classList[signinMode ? 'add' : 'remove']('hidden')
        ui.signinForm.classList[!signinMode ? 'add' : 'remove']('hidden')
        ui.switch.innerText = signinMode
            ? 'New Member'
            : 'Existing Member'
        ui.title.innerText = signinMode
            ? 'Member Signin'
            : 'New Member'
    }
    ui.switch.click()

    if(data.loaded()){
        ui.modal.classList.add('hidden')
        i0.broadcast('dataloaded')
        return null
    }

    if(!data.loaded() && localStorage.email && localStorage.sessionId){
        let res = await i0.fetch('signin', {email: localStorage.email, sessionId: localStorage.sessionId})
        if(!res.error){
            ui.modal.classList.add('hidden')
            data.load()
        } else console.error(res.error)
    }

    let signup = i0.form(ui.signupForm)
    let signin = i0.form(ui.signinForm)
    
    signin.submit.el.onclick = async e => {
        e.preventDefault()
        signin = i0.form(ui.signinForm)
        if(signin.email.value && signin.password.value){
            const email = signin.email.value
            const password = signin.password.value
            let res = await i0.fetch('signin', {signin:true, email, password})
            console.log(res)
            if(!res.error){
                ui.modal.classList.add('hidden')
                localStorage.email = res.email
                localStorage.sessionId = res.sessionId
                signin.clearForm()
                data.load()
            } else console.error(res.error)
        }
    }

    signup.submit.el.onclick = async e => {
        e.preventDefault()
        signup = i0.form(ui.signupForm)
        if(signup.email.value && signup.password.value && signup.confirm.value){
            if(signup.password.value !== signup.confirm.value){
                alert('Password and Confirm Password DO NOT MATCH. FIX THAT. FIX IT NOW. IM GOING TO GO AHEAD AND DELETE ALL THE CONTENTS OF THE PASSWORD AND THE CONFIRM SO JUST REDO ALL OF IT. DONT MESS UP THIS TIME. ♥')
                signup.password.el.value = ''
                signup.confirm.el.value = ''
                signup.password.el.focus()
            } else {
                const email = signup.email.value
                const password = signup.password.value
                const firstname = signup.first.value
                const lastname = signup.last.value
                const nickname = signup.nickname.value
                let res = await i0.fetch('signin', {signup:true, email, password, firstname, lastname, nickname})
                console.log(res)
                if(!res.error){
                    ui.modal.classList.add('hidden')
                    localStorage.email = res.email
                    localStorage.sessionId = res.sessionId
                    signup.clearForm()
                    data.load()
                } else console.error(res.error)
            }
        }
    }

})

export default {}