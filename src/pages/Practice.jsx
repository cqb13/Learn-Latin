import { Link } from "react-router-dom";

const Practice = () => {
  return (
    <div>
      <header>
        <h1>Latin Practice</h1>
      </header>
      <hr />
      <main>
        <h2>Charts</h2>
        <div className="Flex-Item-Container">
          <Link to="/practice/declensions" className="Sub-Selection">Declensions</Link>
          <Link to="/practice/declension-funtions" className="Sub-Selection">Declension Funtions</Link>
          <Link to="/practice/future-tense" className="Sub-Selection">Future Tense</Link>
          <Link to="/practice/personal-endings" className="Sub-Selection">Personal Endings</Link>
          <Link to="/practice/personal-pronouns" className="Sub-Selection">Personal Pronouns</Link>
        </div>
        <hr />
        <h2>Practice</h2>
        <div className="Flex-Item-Container">
          <Link to="/practice/sentence-translation" className="Sub-Selection">Sentence Translation</Link>
        </div>
      </main>
    </div>
  );
};

export default Practice;
