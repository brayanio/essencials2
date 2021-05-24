import i0 from '../i0.js'

i0.obj('freetrial', 
`
    <div class="modal-bg hidden" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header v-center">${i0.nugget('logo')}Free Trial</b>
                <button i0="close" class="nav-link">X</button>
            </div>
            <div class="center">
                <img src="./assets/freetrial_flyer_1.PNG" class="landing-flyer" i0="flyer">
            </div>
            <p class="center billboard">
                Every new account is granted a 7 day free trial. Use this tool to program your subconscious with high vibration to manifest anything your heart desires.
            </p>
            <div class="right">
                <button class="nav-link" i0="start">Start Now!</button>
            </div> 
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
    ui.flyer.onclick = ui.start.onclick

})

export default {}