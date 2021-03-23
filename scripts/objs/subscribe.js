import i0 from '../i0.js'

i0.obj('subscribe', 
`
    <div class="modal-bg hidden" i0="modal">
        <section class="modal section">
            <div class="space-between">
                <b class="header">Subscribe</b>
                <button i0="close" class="nav-link">X</button>
            </div>
            <iframe src="./subscribe.html" title="Subscribe to Essencials" style="width: 100%; height: 275px; border: none;"></iframe> 
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