import { Link } from "react-router-dom";

const PracticeNav = () => {
  return (
    <div className="Flex-Item-Container">
      <Link to="/practice/declensions" className="Sub-Selection">Declensions</Link>
      <Link to="/practice/declension-funtions" className="Sub-Selection">Declension Funtions</Link>
      <Link to="/practice/future-tense" className="Sub-Selection">Future Tense</Link>
      <Link to="/practice/personal-endings" className="Sub-Selection">Personal Endings</Link>
      <Link to="/practice/personal-pronouns" className="Sub-Selection">Personal Pronouns</Link>
    </div>
  );
};
  
export default PracticeNav;