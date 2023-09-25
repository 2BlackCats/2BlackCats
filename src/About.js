
function About() {
  return(
  <div className="d-flex flex-row vh-100" style={{background: "linear-gradient(90deg,#00e1ff,#0014ff)"}}>
    <div className="col-4 m-auto text-center">
      <img className="img-fluid rounded img-thumbnail" src="https://avatars.githubusercontent.com/u/113133142?v=4" alt="Alex On"/>
    </div>
    <div className="col-7 my-auto">
    <div className="fs-1">Alex On</div>
    <div className="fs-3 fst-italic">Software Engineer</div>
    <div className="fs-5">Currently, a Undergraduate student at the University of Calgary, 
    taking Software engineering. Currently in my 3rd year and hoping to find an innovative and 
    inspiring opportunities that will help me grow and gain experience.</div>
    </div>
  </div>
  );
}

export default About;
