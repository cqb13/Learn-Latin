import { useState } from 'react'

const Translate = () => {
    const [data, setData] = useState("");
    const [displayWord, setDisplayWord] = useState("");
    const [search, setSearch] = useState();

    const LTE = (word) => {
      setDisplayWord(word);
      setSearch("");
      fetch('https://whitakers-words-get.cqb13.repl.co/LTE?word=' + word).then(
        res => res.text()
      ).then(
        data => {
          setData(data)
        }
      )
    }

    const ETL = (word) => {
      setDisplayWord(word);
      setSearch("");
      fetch('https://whitakers-words-get.cqb13.repl.co/ETL?word=' + word).then(
        res => res.text()
      ).then(
        data => {
          setData(data)
        }
      )
    }

    const updateSearch = event => {
      setSearch(event.target.value)
    }

    return (
      <div>
        <header>
          <h1>Translator</h1>
        </header>
        <hr />
        <main>
          <div className="Search-Area">
            <input type="text" placeholder="Enter a word" className="Search" value={search} onChange={updateSearch}/>
            <div className="Search-Options">
              <button className='Option' onClick={() => LTE(search)}>Latin to English</button>
              <button className='Option' onClick={() => ETL(search)}>English to Latin</button>
            </div>
          </div>
          <div className='Results'>
            <h2>{displayWord}</h2>
            <pre className='Text'>{data}</pre>
          </div>
        </main>
      </div>
    );
  };
  
  export default Translate;
  