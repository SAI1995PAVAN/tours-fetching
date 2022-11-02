import "./App.css";
import { useState, useEffect } from "react";
// import { data } from "./data";
import Loading from "./Components/Loading/Loading";
import Tours from "./Components/Tours/Tours";
import Notours from "./Notours/Notours";

function App() {
  const [loading, setLoading] = useState(true);
  const [toursData, setToursData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);

    let requestOptions = {
      "content-type": "application/json",
      method: "GET",
      redirect: "follow",
    };

    let url = `https://course-api.com/react-tours-project`;

    try {
      let response = await fetch(url, requestOptions);
      let tours = await response.json();
      setLoading(false);
      setToursData([...tours]);
      
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTours();
    
    
    return () => {
      setLoading(false);
      setRefresh(false);
      setError(false)
    }
  }, []);

  const handleNotSelected = (id) => {
    let remainingTours = toursData.filter((tour) => {
      return tour.id !== id;
    });
    setToursData([...remainingTours]);
  };

  const handleRefresh = () => {
    setRefresh(true);
  }

  useEffect(() => {
    if (refresh) {
      fetchTours();
    }
    return () => {
      setError(false)
      setRefresh(false)
    }
  }, [refresh]);

  if (loading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="App">
        <h1>Error fetching data</h1>
      </div>
    );
  }
  if (toursData.length === 0) {
    return (
      <Notours  handleRefresh={handleRefresh}/>
    );
  } else {
    return (
      <div className="App">
        <div className="our-tours">
          <Tours toursData={toursData} handleNotSelected={handleNotSelected} />
        </div>
      </div>
    );
  }
}

export default App;
