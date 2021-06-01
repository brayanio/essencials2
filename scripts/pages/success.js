import i0 from '../i0.js'

i0.obj('success', 
`
    <h1 class="header v-center">${i0.nugget('logo')}Success</h1>
    <div>
        <a href="#home" class="nav-link">Home</a>
    </div>
    <div class="center">
        <a href="#home">
            <img src="./assets/success_flyer_1.PNG" class="landing-flyer">
        </a>
    </div>
    <p class="text-center billboard">Thank you for joining and supporting Essencials!</p>
`,
ui => {
    console.log(location.search.split('?session_id=').join(''))

    document.title = 'Welcome to Essencials!'

    i0.broadcast('checkSubscription')

})

export default {}