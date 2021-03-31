import data from './data.js'

const today = () => `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`

const download = () => {
    const d = data.read()
    console.log(d)

    let txt = 
`${today()}

`

    if(d.affirmations){
        txt += 
`Affirmations:
${d.affirmations.join(`
`)}

`
    }

    if(d.budgets){
        txt += 
`Budgets:
${d.budgets.map(b => `${b.name}: ${'$' + b.value}`).join(`
`)}

`
    }

    if(d.goals){
        txt += 
`Goals:
${d.goals.join(`
`)}

`
    }

    if(d.schedule){
        txt += 
`Schedule:
${d.schedule.map(s => `${s.time}: ${s.name}`).join(`
`)}

`
    }

    if(d.cards.length){
        txt += 
`Daily Tarot:
${d.cards[0].cards.map(c => `${c.name}${c.reversed == 'true' ? ' (reversed)' : ''}`).join(`
`)}

`
    }

    const element = document.createElement("a")
    const file = new Blob([txt], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = `${today()}-Essencials.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
}

export default {download}