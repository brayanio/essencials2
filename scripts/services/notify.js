const msg = (title, body) => new Notification(title, {
    body,
    icon: './assets/ico.png',
})

export default (title, body) => {
    if (!window.Notification) 
        console.log('Browser does not support notifications.')
    else {
        if (Notification.permission === 'granted')
            msg(title, body)
        else {
            Notification.requestPermission().then(p => {
                if (p === 'granted') msg(title, body)
                else console.log('User blocked notifications.')
            }).catch((err) => console.error(err))
        }
    }
}