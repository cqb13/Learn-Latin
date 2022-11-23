const ChartTitle = ({data}) => {
  const Titles = ({title}) => {
    return (
      <th>
      {title}
      </th>
    );
  }

  return (
    <tr>
      {data?.length > 0 ? (
        <>
        {data.map((titles) => (
          <Titles title={titles}/>
        ))}
        </>
      ) : (<></>)}
    </tr>
  );
};

export default ChartTitle;
