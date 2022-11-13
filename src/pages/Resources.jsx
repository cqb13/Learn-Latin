const Home = () => {
  const Link = (info) => {
    return (
      <>
        <a href={info.link}>{info.name}</a>
        <p>{info.description}</p>
        <hr />
      </>
    );
  };

  return (
    <div>
      <header>
        <h1>Latin Resources</h1>
      </header>
      <hr />
      <main>
        <div className="Resoruces-Container">
          <Link name={"Magistrula"} description={"A website that allows you to practice translating sentences, indentify word forms, practice declensions, and much more."} link={"https://www.magistrula.com/"}/>
          <Link name={"Whitaker's Words Online"} description={"Allows you to translate Latin words to English."} link={"https://latin-words.com/"}/>
          <Link name={"William Whitakers Words EXT"} description={"A chrome extension that fixs the original Whitakers Words site."} link={"https://github.com/cqb13/William-Whitakers-Words-EXT"}/>
          <Link name={"Modern Latin Translator"} description={"A website built around Whitakers Words with all original functionality."} link={"https://latin-translator.com/"}/>
          <Link name={"Latin Quizer"} description={"Tests you on verbs nouns and adjectives."} link={"https://www.viperfish.net/latinQuizer/"}/>
          <Link name={"Latin Helper"} description={"Translates Latin words."} link={"http://www.latinhelper.com/"}/>
          <Link name={"Latin Text Scanner"} description={"Scans latin text and gives information on words."} link={"http://www.u.arizona.edu/~aversa/latin/"}/>
          <Link name={"Word Analysis"} description={"A morphological analysis of inflected Latin words."} link={"http://www.perseus.tufts.edu/hopper/morph?amp;lang=la&lookup="}/>
          <Link name={"Verb Conjugator"} description={"Conjugates verbs for you."} link={"https://www.verbix.com/languages/latin"}/>
        </div>
      </main>
    </div>
  );
};

export default Home;
