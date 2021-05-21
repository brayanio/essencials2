import i0 from '../i0.js'
import data from '../services/data.js'

i0.obj('feedback', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Feedback</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <form class="form" i0="form">
        <textarea i0="input" placeholder="Feedback or Issue Report"></textarea>
        <button i0="send" type="submit"><i class="material-icons">send</i></button>
    </form>
`,
ui => {

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