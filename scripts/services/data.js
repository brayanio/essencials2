let data = {}

const push = (key, item) => {data[key].push(item)}
const get = (key) => data[key]
const remove = (key, item) => {data[key] = data[key].filter(i => i != item)}
const moveUp = (key, item) => {
    let i = data[key].indexOf(item)
    if(i) {
        let target = data[key][i - 1]
        data[key][i - 1] = item
        data[key][i] = target
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
            return i+1
        }
    }
}

const init = key => {
    data[key] = []
    return {
        get: () => get(key),
        push: item => push(key, item),
        remove: item => remove(key, item),
        moveUp: item => moveUp(key, item),
        moveDown: item => moveDown(key, item)
    }
}

export default {init}