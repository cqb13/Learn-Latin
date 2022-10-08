const Home = () => {

  return (
    <div>
      <header>
        <h1>Learn Latin</h1>
      </header>
      <hr/>
      <main>
        <h2>About</h2>
        <div className='About-Container'>
        <p>This project was started to help me study declensions endings for a Latin test.
          I plan to add many more featuers to this website, such as sentence translation practice, and word form indentification practice.
          This is my first time using React to build a website, there will probably be many bugs during the first few months of development.
          If you find any bugs please open an issue in the github repository.
        </p>
        <a href='https://github.com/cqb13/Learn-Latin-Declensions'>Github Repo</a>
        </div>
      </main>
    </div>
  )
}

export default Home;
