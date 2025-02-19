const Section = (props) => {
    return(
      <div>
        <section>
                  <h2>{props.title}</h2>
                  <p>{props.text}</p>
        </section>
      </div>
    )
}
export default Section;