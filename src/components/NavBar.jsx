import { Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="Switch-Page">Home</Link>
      <Link to="/declensions" className="Switch-Page">Declensions</Link>
      <Link to="/resources" className="Switch-Page">Resources</Link>
    </nav>
  );
};
  
export default Navbar;