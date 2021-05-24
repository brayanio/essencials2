import i0 from '../i0.js'

let account
let data = {}
let loaded = false

const save = async key => {
    if(localStorage.email && localStorage.sessionId){
        console.log('save data', data[key])
        const res = i0.fetch('data', {email: localStorage.email, sessionId: localStorage.sessionId, key, data: data[key]})
        if(res.error) console.error(res.error)
    } else {
        console.error('Account not found.')
    }
}

const load = async () => {
    if(localStorage.email && localStorage.sessionId){
        let res = await i0.fetch('signin', {email: localStorage.email, sessionId: localStorage.sessionId})
        if(!res || res.error) {
            console.error(res)
            localStorage.clear()
            return null
        }
        i0.broadcast('signin', res)
        account = res
        res = await i0.fetch('data', {email: localStorage.email, sessionId: localStorage.sessionId, load: true})
        console.log('dataloaded', res)
        if(res.error) console.error(res.error)
        else {
            data = Object.assign(data, res)
            Object.keys(data).forEach(key => data[key] === null ? data[key] = [] : null)
            i0.broadcast('dataloaded', data)
            loaded = true
        }
    } else {
        console.error('Account not found.')
    }
}

const push = (key, item) => { data[key].push(item) ; save(key) }
const get = (key) => data[key]
const remove = (key, item) => { data[key] = data[key].filter(i => i != item) ; save(key) }
const moveUp = (key, item) => {
    let i = data[key].indexOf(item)
    if(i) {
        let target = data[key][i - 1]
        data[key][i - 1] = item
        data[key][i] = target
        save(key)
        return i-1
    }
}
const moveDown = (key, item) => {
    let i = data[key].indexOf(item)
    if(i !== -1 && i !== null) {
        let target = data[key][i + 1]
        if(target){
            data[key][i + 1] = item
            data[key][i] = target
            save(key)
            return i+1
        }
    }
}
const update = (key, item, changes) => {
    const updatedItem = Object.assign(item, changes)
    let i = data[key].indexOf(item)
    data[key][i] = updatedItem
    save(key)
}

const init = key => {
    data[key] = []
    return {
        get: () => get(key),
        push: item => push(key, item),
        remove: item => remove(key, item),
        moveUp: item => moveUp(key, item),
        moveDown: item => moveDown(key, item),
        update: (item, changes) => update(key, item, changes)
    }
}

window.printData = () => console.log(data)

export default {init, save, load, loaded: () => loaded, read: () => data, account: () => account}