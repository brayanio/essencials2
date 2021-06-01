import i0 from '../i0.js'

i0.obj('link-card', 
`
    <div class="link-card">
        <div class="video">
            <iframe width="420" height="216" i0="video" src="" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="text">
            <div class="space-between">
                <b class="p-header" i0="title"></b>
            </div>
            <div class="right">
                <small i0="category"></small>
            </div>
            <p i0="desc"></p>
        </div>
    </div>    
`,
(ui, props) => {

    ui.video.src = props.src
    ui.title.innerText = props.title
    ui.desc.innerText = props.desc
    ui.category.innerText = props.category

    if(document.body.getBoundingClientRect().width < 800){
        ui.video.width = '201px'
        ui.video.height = '201px'
        ui.video.margin = 'auto'
    }

})

export default {}