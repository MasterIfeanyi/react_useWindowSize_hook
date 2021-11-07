const Content = ({ windowWidth, windowHeight }) => {
    
    return (

        <>
        <input type="readonly" value="Resize window to see changes" />

        <section className="square" >
            <p>Screen width: {windowWidth}</p>
            <p>Screen height: {windowHeight}</p>
        </section>
    </>
    )
}

export default Content
