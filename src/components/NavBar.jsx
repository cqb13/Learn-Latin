import { Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="Switch-Page">Home</Link>
      <Link to="/practice" className="Switch-Page">Practice</Link>
      <Link to="/translate" className="Switch-Page">Translate</Link>
      <Link to="/resources" className="Switch-Page">Resources</Link>
      <Link to="/" className="Icon">
        <img src='../Logo.png' width="40px" height="40px" alt="Logo not found"></img>
      </Link>
    </nav>
  );
};
  
export default Navbar;