import ChartNav from "../components/ChartNav";

const Charts = () => {
  return (
    <div>
      <header>
        <h1>Latin Charts</h1>
      </header>
      <hr />
      <main>
        <h2>Select A Chart</h2>
        <div className="Sub-Menu-Container">
          <ChartNav />
        </div>
      </main>
    </div>
  );
};

export default Charts;
