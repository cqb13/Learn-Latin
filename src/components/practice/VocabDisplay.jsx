const VocabDisplay = ({ vocab }) => {
    
  const WordDef = ({ info }) => {
    return (
      <>
        <p>
          {info.word}: {info.meaning}
        </p>
      </>
    );
  };

  return (
    <div className="Vocab-Container">
      {vocab?.length > 0 ? (
        <>
          {vocab.map((wordData) => (
            <WordDef info={wordData} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default VocabDisplay;
