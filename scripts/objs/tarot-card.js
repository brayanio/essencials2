import i0 from '../i0.js'

i0.obj('tarot-card', 
`
    <div class="tarot-container text-center" i0="card">
        <p i0="title">
            <b i0="name" class="p-header"></b>
            <span i0="suit" class="cap"></span>
        </p>
        <b i0="descB"><p i0="desc" class="tarot-desc"></p></b>
        <img i0="img" class="tarot-img">
        <b i0="adviceB" class="hidden"><p i0="advice" class="tarot-advice"></p></b>
    </div>
    <img i0="view" class="tarot-img view hidden">
`,
(ui, props) => {
    ui.name.innerText = `${props.name}`
    ui.suit.innerText = `${props.suit} #${props.i}`
    ui.img.src = `./assets/${props.suit}/${props.i}) ${props.name}.PNG`
    ui.img.title = props.name
    ui.view.title = props.name
    if(props.reading){
        ui.view.parentNode.removeChild(ui.view)
        ui.descB.classList.add('hidden')
        ui.adviceB.classList.remove('hidden')
        if(props.reversed){
            ui.advice.innerText = props.reverseAdvice
            ui.img.classList.add('reversed')
            ui.name.innerText = `${props.name} (Reversed)`
            ui.img.title = `${props.name} (Reversed)`
        } else {
            ui.advice.innerText = props.advice
        }
    } else if(props.view) {
        ui.card.parentNode.removeChild(ui.card)
        ui.view.classList.remove('hidden')
        ui.view.src = `./assets/${props.suit}/${props.i}) ${props.name}.PNG`
        if(props.reversed){
            ui.view.classList.add('reversed')
            ui.view.title = `${props.name} (Reversed)`
        }
    } else {
        ui.desc.innerText = props.desc
    }

    ui.view.onclick = () => i0.broadcast('view-tarot', props)
})

export default {}