import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('feedback', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Feedback</h1>
    <div>
        <a href="#profile" class="nav-link">Profile</a>
    </div>
    <section class="section">
        <form class="form" i0="form" style="width:100%;">
            <textarea i0="input" placeholder="Feedback or Issue Report" style="width:100%;resize:none;"></textarea>
            <button i0="send" type="submit"><i class="material-icons">send</i></button>
        </form>
    </section>
`,
ui => {

    document.title = 'Feedback | Essencials'

    if(!data.loaded())
        return location.hash = '#home'
        
    ui.send.onclick = async () => {
        const text = ui.input.value + ''
        ui.input.value = ''
        if(text){
            let res = await i0.fetch('feedback', {email: localStorage.email, sessionId: localStorage.sessionId, feedback: text})
            console.log(res)
            if(!res.error) alert('Feedback sent and recorded')
        }
    }
        
})

export default {}