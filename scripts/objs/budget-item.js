import i0 from '../i0.js'

i0.obj('budget-item', 
`
    <div class="panel list-item budget-item">
        <div i0="panel"></div>
        <div class="actions">
            <div i0="options" class="v-center">
                <input placeholder="$" type="number" i0="value" pattern="[0-9]*"/>
                <button i0="add" title="Add"><i class="material-icons">add</i></button>
                <button i0="sub" title="Subtract"><i class="material-icons">remove</i></button>
                <button i0="open" title="Options"><i class="material-icons">more_horiz</i></button>
            </div>
            <div class="hidden" i0="actions" class="v-center">
                <button i0="moveUp" title="Move up"><i class="material-icons">arrow_upward</i></button>
                <button i0="moveDown" title="Move down"><i class="material-icons">arrow_downward</i></button>
                <button i0="remove" title="Remove"><i class="material-icons">remove_circle</i></button>
                <button i0="close" title="Close"><i class="material-icons">cancel</i></button>
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
            props.service.update(props.item, {value: parseFloat(props.item.value) + num})
            i0.broadcast('update')
        }
    }

    ui.sub.onclick = () => {
        let num = parseFloat(ui.value.value)
        if(num){
            ui.value.value = ''
            props.service.update(props.item, {value: parseFloat(props.item.value) - num})
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
    
    i0.onbroadcast('editmode', () => ui.open.classList.remove('hidden'))
    i0.onbroadcast('viewmode', () => ui.open.classList.add('hidden'))
    if(i0.env('mode') === 'view') ui.open.classList.add('hidden')

})

export default {}