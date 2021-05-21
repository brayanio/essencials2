import i0 from '../i0.js'

i0.obj('verify', 
`
    <div class="modal-bg hidden" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header">Complete Signup</b>
                <button i0="close" class="nav-link">X</button>
            </div>
            <p class="center billboard">
                Complete your signup by entering the verification code sent to your email.
            </p>
            <p class="center">
                <i class="v-center">Don't see the email? Check your spam folder. If it's not there, then you can try to <button class="nav-link" i0="resend">Resend Email</button></i>
            </p>
            <form class="form" i0="form">
                <input i0="input" placeholder="Verification Code">
                <button i0="verify" type="submit" title="submit verification code"><i class="material-icons">email</i></button>
            </form>
        </section>
    </div>
`,
async (ui, props) => {

    i0.onbroadcast('verify-modal', () => {
        ui.modal.classList.remove('hidden')
    })

    ui.close.onclick = () => ui.modal.classList.add('hidden')

    ui.resend.onclick = async () => {
        let res = await i0.fetch('verify', {email: localStorage.email, sessionId: localStorage.sessionId, resend: true})
        if(!res || res.error) return console.error(res)
        ui.resend.parentNode.removeChild(ui.resend)
    }

    ui.verify.onclick = async () => {
        const code = ui.input.value
        let res = await i0.fetch('verify', {email: localStorage.email, sessionId: localStorage.sessionId, code})
        if(!res || res.error) return console.error(res)
        ui.close.click()
        i0.broadcast('signin', res)
    }

})

export default {}