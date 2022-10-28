const IDVerbConjugations = ({ info, title}) => {
  const TextRow = ({text}) => {
    return (
      <p>{text}</p>
    );
  }

  return (
    <details className="Dropdown">
    <summary>{title}</summary>
      {info?.length > 0 ? (
        <>
          {info.map((data) => (
            <TextRow text={data}/>
          ))}
        </>
      ) : (<></>)}
    </details>
  );
};

export default IDVerbConjugations;
