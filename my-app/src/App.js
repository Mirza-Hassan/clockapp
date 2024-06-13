import { useEffect, useState } from "react";
import "./App.css";
import 'boostrap/dist/css/boostrap.min.css';

function App() {
  //State
  const currentTime = new Date();
  const [time, setTime] = useState(currentTime);

  //lifecycle
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  //render UI
  return (
    <div className="container text-center mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-tite">Current Time</h1>
          <h2 className="card-text">{formattedTime}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
