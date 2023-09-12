import './mainvideo.styles.css'



const Mainvideo = () => {
    return (
        <div id="iframe-container">
            <iframe id='main-vid'
                src="https://www.youtube.com/embed/bBCXVMEKLIw?si=y3IWWhvUC1GYIVb2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    )
}


export default Mainvideo