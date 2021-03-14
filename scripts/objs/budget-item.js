import i0 from '../i0.js'

i0.obj('budget-item', 
`
    <div class="panel list-item">
        <div i0="panel"></div>
        <div class="actions">
            <div i0="options">
                <input placeholder="$" type="number" i0="value"/>
                <button i0="add">+</button>
                <button i0="sub">-</button>
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

    if(props.item) ui.panel.innerText = `${props.item.name} - $${props.item.value}`

    let cd = 0, interval

    ui.add.onclick = () => {
        let num = parseFloat(ui.value.value)
        if(num){
            ui.value.value = ''
            props.service.update(props.item, {value: props.item.value + num})
            i0.broadcast('update')
        }
    }

    ui.sub.onclick = () => {
        let num = parseFloat(ui.value.value)
        if(num){
            ui.value.value = ''
            props.service.update(props.item, {value: props.item.value - num})
            i0.broadcast('update')
        }
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