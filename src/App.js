import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      {data && data.map((d) => {
        return(
          <div>
            <p> <b>ID:</b>{d.id}    <b>NAME:</b>{d.name}</p>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
