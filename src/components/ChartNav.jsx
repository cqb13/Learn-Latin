import { Link } from "react-router-dom";

const ChartNav = () => {
  return (
    <chartnav>
      <Link to="/charts/declensions" className="Sub-Selection">Declension Charts</Link>
      <Link to="/charts/future-tense" className="Sub-Selection">Future Tense Charts</Link>
      <Link to="/charts/personal-endings" className="Sub-Selection">Personal Endings Chart</Link>
    </chartnav>
  );
};
  
export default ChartNav;