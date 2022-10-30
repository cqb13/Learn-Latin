import { Link } from "react-router-dom";

const ChartNav = () => {
  return (
    <div className="Flex-Item-Container">
      <Link to="/charts/declensions" className="Sub-Selection">Declensions</Link>
      <Link to="/charts/declension-funtions" className="Sub-Selection">Declension Funtions</Link>
      <Link to="/charts/future-tense" className="Sub-Selection">Future Tense</Link>
      <Link to="/charts/personal-endings" className="Sub-Selection">Personal Endings</Link>
    </div>
  );
};
  
export default ChartNav;