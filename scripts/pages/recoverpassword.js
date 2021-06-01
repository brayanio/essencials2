import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('recoverpassword', 
`
    <h1 class="header v-center">${i0.nugget('logo')} Change Password</h1>
    <div>
        <a href="#home" class="nav-link">Cancel</a>
    </div>
    
    <p class="billboard text-center">To change your password, send a recover code to your email and use that code to create a new password.</p>

    <div class="space-between">
        <section class="section">
            <b class="p-header">Send Recover Code</b>
            <form class="form" i0="send" autocomplete="off">
                <input placeholder="Email" i0form="email" type="email" readonly><br><br>
                <button i0form="submit" type="submit"><i class="material-icons">email</i></button>
            </form>
        </section>
        <section class="section">
            <b class="p-header">Change Password</b>
            <form class="form" i0="recover" autocomplete="off">
                <input placeholder="Email" i0form="email" type="email" readonly><br><br>
                <input placeholder="New Password" type="password" i0form="password" readonly><br><br>
                <input placeholder="Confirm New Password" type="password" i0form="confirm" readonly><br><br>
                <input placeholder="Recover Code" i0form="code" type="text" readonly><br><br>
                <button i0form="submit" type="submit"><i class="material-icons">chevron_right</i></button>
            </form>
        </section>
    </div>
    <p><small>If you can't find your email, wait a few minutes and check the spam folder.</small></p>
`,
ui => {
    document.title = `Change Password | Essencials`

    let sendForm = i0.form(ui.send)
    let recoverForm = i0.form(ui.recover)
    
    sendForm.submit.el.onclick = async e => {
        e.preventDefault()
        sendForm = i0.form(ui.send)
        let res = await i0.fetch('recover', {email: sendForm.email.value})
        if(res.error) return console.error(res)
        else 
            ui.send.parentElement.removeChild(ui.send)
    }

    recoverForm.submit.el.onclick = async e => {
        e.preventDefault()
        recoverForm = i0.form(ui.recover)
        if(recoverForm.password.value === recoverForm.confirm.value){
            let res = await i0.fetch('recover', {
                email: recoverForm.email.value,
                password: recoverForm.password.value,
                code: recoverForm.code.value
            })
            if(res.error) return console.error(res)
            else location.hash = 'home'
        } else{
            recoverForm.password.el.value = ''
            recoverForm.confirm.el.value = ''
            alert('Password and Confirm Password do not match.')
        }
    }

    setTimeout(() => {
        sendForm = i0.form(ui.send)
        recoverForm = i0.form(ui.recover)

        sendForm.clearForm()
        recoverForm.clearForm()

        sendForm.email.el.removeAttribute('readonly')
        recoverForm.email.el.removeAttribute('readonly')
        recoverForm.code.el.removeAttribute('readonly')
        recoverForm.password.el.removeAttribute('readonly')
        recoverForm.confirm.el.removeAttribute('readonly')
    }, 0)

})

export default {}