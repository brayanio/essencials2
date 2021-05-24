import i0 from '../i0.js'

i0.obj('subscribe', 
`
    <div class="modal-bg hidden" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header v-center">
                    ${i0.nugget('logo')}
                    Membership
                </b>
                <button i0="close" class="nav-link">X</button>
            </div>
            <div class="center">
                <img src="./assets/membership_flyer_1.PNG" class="landing-flyer" i0="flyer">
            </div>
            <p class="text-center billboard">
                Join Essencials and start the journey of self improvement today! By showing Essencials support, we will be able to add new features and more custom content.
            </p>
            <div class="right">
                <button i0="checkout" class="nav-link">Join Membership</button>
            </div> 
        </section>
    </div>
`,
async (ui, props) => {

    i0.onbroadcast('sub-modal', () => {
        ui.modal.classList.remove('hidden')
    })

    ui.close.onclick = () => ui.modal.classList.add('hidden')

    ui.checkout.onclick = async () => {
        let res = await i0.fetch('payment', {email: localStorage.email, sessionId: localStorage.sessionId})
        if(!res || res.error) return console.error(res)
        console.log('sub sessionId', res)
        
        res = await Stripe('pk_test_51IjshxFXArBepcYKGnQGuSyvd0eRhTryCUmEH1H2N8o7WxZw2GQdxqW5Mx6vceaVCcRHxkEUm9s0pzAzI4dv5LEx000KGlFBlM').redirectToCheckout({ sessionId: res.paymentSessionId })
        console.log('sub worked', res)
    }

    ui.flyer.onclick = ui.checkout.onclick

})

export default {}