
function Projects(){
  return(
  <div className="d-flex flex-wrap" style={{background: "linear-gradient(90deg,#00e1ff,#0014ff)", minHeight: "800px"}}>

      <div className="card m-auto my-3" style={{width: "18rem", height:"24rem"}}>
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">Wordle</h5>
          <p className="card-text">Designed and created a Wordle Imitation using personally created CSS, JS and HTML. A fetch request to an API was used to generate a new word. Project took Roughly a Week and  was done solo.</p>
          <a href="#" className="btn btn-primary">Link</a>
        </div>
      </div>
      <div className="card m-auto my-3" style={{width: "18rem", height:"24rem"}}>
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">Obituary Creator</h5>
          <p className="card-text">Used terraforming to create and use AWS services such as AWS polly, DynamoDB, and Parameter store in tandem with chatGPT to create a backend for an obituary creating website coded using reactJS. Project took roughly a month, awas done in a group with 1 other student.</p>
          <a href="#" className="btn btn-primary">GitHub Link</a>
        </div>
      </div>
      <div className="card m-auto my-3" style={{width: "18rem", height:"24rem"}}>
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">Wordle</h5>
          <p className="card-text">Designed and created a Wordle Imitation using personally created CSS, JS and HTML. A fetch request to an API was used to generate a new word. Project took Roughly a Week and  was done solo.</p>
          <a href="#" className="btn btn-primary">Link</a>
        </div>
      </div>
      <div className="card m-auto my-3" style={{width: "18rem", height:"24rem"}}>
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">Veterinary Schedule Planner</h5>
          <p className="card-text">Designed and created a Schedule planner that used data from a  SQL database to add animals to a schedule based on the treatment and time required to treat the animal. Coded entirely in Java. Animals could be added or removed from the schedule. Project took roughly 2 months and was done with 3 other students.</p>
          <a href="#" className="btn btn-primary">Link</a>
        </div>
      </div>

      
      

  </div>
  );
}

export default Projects;