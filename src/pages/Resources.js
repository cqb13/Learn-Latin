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
          <Link name={"Whitaker's Words Online"} description={"Allows you to translate Latin words to English"} link={"https://latin-words.com/"}/>
          <Link name={"William Whitakers Words EXT"} description={"A chrome extension that fixs the original Whitakers Words site"} link={"https://github.com/cqb13/William-Whitakers-Words-EXT"}/>
        </div>
      </main>
    </div>
  );
};

export default Home;
