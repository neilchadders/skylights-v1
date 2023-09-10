import './mainvideo.styles.css'


const Mainvideo = () => {
    return (
        <div id="iframe-container">
            <iframe id="main-vid" src="https://www.youtube.com/embed/bBCXVMEKLIw?si=-CaAEa5SyPWLusGy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Mainvideo