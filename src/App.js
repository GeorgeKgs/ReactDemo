import Metrics from "./components/Metrics"

function App() {
  const metrics = [
    {
      date: new Date(2021, 4, 12, 17, 39, 0, 0),
      developer: "Aklilu",
      project: "StockMarket Backend App",
      count: 5,
    },
    {
      date: new Date(2021, 4, 11, 19, 32, 0, 0),
      developer: "Joni",
      project: "Fanzine Mobile App",
      count: 0,
    },
    {
      date: new Date(2021, 4, 11, 18, 40, 0, 0),
      developer: "Theodoros",
      project: "Fanzine Mobile App",
      count: 3,
    },
    {
      date: new Date(2021, 4, 12, 17, 30, 0, 0),
      developer: "Joni",
      project: "StockMarket Backend App",
      count: 22,
    },
    {
      date: new Date(2021, 4, 12, 15, 23, 0, 0),
      developer: "Theodoros",
      project: "StockMarket Mobile App",
      count: 0,
    }
  ]

  return (
    <div>
      <h1>Hello React!</h1>
      <Metrics data={metrics}/>
    </div>

  );
}

export default App;
