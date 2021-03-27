import i0 from '../i0.js'

i0.obj('freetrial', 
`
    <div class="modal-bg hidden" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header">Free Trial</b>
                <button i0="close" class="nav-link">X</button>
            </div>
            <p class="center billboard">
                <b class="p-header v-center">
                    Are you ready to raise your vibration?
                </b>
                Every new account is granted a 30 day free trial. Use this tool to program your subconscious with high vibration to manifest anything your heart desires. <button class="nav-link" i0="start">Start Now!</button>
            </p>
        </section>
    </div>
`,
async (ui, props) => {

    i0.onbroadcast('freetrial-modal', () => {
        ui.modal.classList.remove('hidden')
    })

    ui.close.onclick = () => ui.modal.classList.add('hidden')

    ui.start.onclick = async () => {
        let res = await i0.fetch('freetrial', {email: localStorage.email, sessionId: localStorage.sessionId})
        if(!res || res.error) return console.error(res)
        ui.close.click()
        i0.broadcast('signin', res)
    }

})

export default {}