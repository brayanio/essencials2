import i0 from '../i0.js'

i0.obj('subscribe', 
`
    <div class="modal-bg hidden" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header">Join Us</b>
                <button i0="close" class="nav-link">X</button>
            </div>
            <p class="center billboard">
                <b class="p-header v-center">
                    Essencials Monthy Subscription - $5 / month
                </b>
                Join Essencials and start the journey of self improvement today! By showing Essencials support, we will be able to add new features and more custom content just for you.
            </p>
            <div class="center">
                <iframe src="./subscribe.html" title="Subscribe to Essencials" style="width: 100%; height: 275px; border: none;"></iframe>
            </div> 
        </section>
    </div>
`,
async (ui, props) => {

    i0.onbroadcast('sub-modal', () => {
        ui.modal.classList.remove('hidden')
    })

    ui.close.onclick = () => ui.modal.classList.add('hidden')

})

export default {}