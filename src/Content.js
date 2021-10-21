const Content = ({ windowWidth, windowHeight }) => {
    
    return (

        <>
        <input type="readonly" value="Resize window to see changes" />

        <section className="square" >
            <p>Width: {windowWidth}</p>
            <p>Height: {windowHeight}</p>
        </section>
    </>
    )
}

export default Content
