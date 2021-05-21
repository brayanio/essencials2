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
            <p class="center billboard">
                <b class="p-header v-center">
                    Essencials Membership $9.99 / month
                </b>
                Join Essencials and start the journey of self improvement today! By showing Essencials support, we will be able to add new features and more custom content just for you.
            </p>
            <div class="center">
                <!--<iframe src="./subscribe.html" title="Subscribe to Essencials" style="width: 100%; height: 275px; border: none;"></iframe>-->
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

})

export default {}