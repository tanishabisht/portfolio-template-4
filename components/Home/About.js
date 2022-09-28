const About = () => {
  return (
    <section className="aboutContainer">
      <div className="aboutContainer__row">
        <div className="aboutContainer__col">
          <p className="aboutContainer__col__subHeading">
            Things I have explored ...
          </p>
          <h1>
            UI . <span>UX . web dev .</span> data science . ML .{" "}
            <span>open source ...</span> copy paste :p
          </h1>
        </div>
        <div className="aboutContainer__col">
          <p className="aboutContainer__col__subHeading">My forte ...</p>
          <p>I build website solutions</p>
          <h1>
            <span>MERN Stack .</span> Open Source
          </h1>
        </div>
      </div>
      <div className="aboutContainer__row">
        <div className="aboutContainer__col">
          <p className="aboutContainer__col__subHeading">What drives me?</p>
          <h1>
            novelty . <span>working in a team .</span> creating beautiful
            memories along the journey
          </h1>
        </div>
        <div className="aboutContainer__col">
          <p className="aboutContainer__col__subHeading">My qualities ...</p>
          <h1>quick learner . clean work . collaborative . novelty seeker</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
