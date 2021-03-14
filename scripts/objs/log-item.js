import i0 from '../i0.js'

i0.obj('log-item', 
`
    <div class="panel list-item">
        <b i0="title"></b><br>
        <ul i0="ul"></ul>
        <div class="actions">
            <div i0="options">
                <input placeholder="Bullet" i0="bullet" class="bullet-input"/>
                <button i0="add">+</button>
                <button i0="collapse">collapse</button>
                <button i0="open">O</button>
            </div>
            <div class="hidden" i0="actions">
                <button i0="moveUp">^</button>
                <button i0="moveDown">v</button>
                <button i0="remove">-</button>
                <button i0="close">x</button>
            </div>
        </div>
    </div>    
`,
(ui, props) => {

    if(props.item) ui.title.innerText = props.item.title

    if(props.item.ar) props.item.ar.forEach(bullet => ui.ul.appendChild(i0.element(`<li>${bullet}</li>`)))

    let cd = 0, interval

    ui.add.onclick = () => {
        if(ui.bullet.value){
            const ar = [].concat(props.item.ar)
            ar.push(ui.bullet.value)
            props.service.update(props.item, {ar})
            ui.bullet.value = ''
            i0.broadcast('update')
        }
    }

    ui.collapse.onclick = () => {
        
    }

    const checkCD = () => {
        interval = setTimeout(() => {
            cd--
            if(cd > 0) checkCD()
            else ui.close.click()
        }, 1000)
    }

    ui.open.onclick = () => {
        ui.options.classList.add('hidden')
        ui.actions.classList.remove('hidden')
        cd = 3
        checkCD()
    }

    ui.close.onclick = () => {
        ui.actions.classList.add('hidden')
        ui.options.classList.remove('hidden')
        cd = 0
        clearTimeout(interval)
    }

    ui.moveUp.onclick = () => {
        props.service.moveUp(props.item)
        i0.broadcast('update', props.item)
    }
    ui.moveDown.onclick = () => {
        props.service.moveDown(props.item)
        i0.broadcast('update', props.item)
    }
    ui.remove.onclick = () => {
        props.service.remove(props.item)
        i0.broadcast('update')
    }
    ui.actions.onclick = () => cd += 2

    if(props.open) ui.open.click()

})

export default {}