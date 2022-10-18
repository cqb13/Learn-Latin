import { Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="Switch-Page">Home</Link>
      <Link to="/charts" className="Switch-Page">Charts</Link>
      <Link to="/translate" className="Switch-Page">Translate</Link>
      <Link to="/resources" className="Switch-Page">Resources</Link>
    </nav>
  );
};
  
export default Navbar;