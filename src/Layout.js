import { Outlet, Link } from "react-router-dom";
function Layout() {

    return (
      <>
      <nav className ="navbar sticky-top" style={{backgroundColor: "#202020"}}>
      <div className="col"></div>
      <div className="col"></div>
      <Link className="col text-center text-white" to="" style={{ textDecoration: 'none' }}>About</Link>
      <Link className="col text-center text-white" to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
      <Link className="col text-center text-white" to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
      <div className="col"></div>
      <div className="col"></div>
      </nav>
      <Outlet/>
      </>
    );
  }
  
  export default Layout;