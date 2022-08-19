import './App.css';
import React, {useState, useEffect} from 'react';
import Router from './Routers/Router'
import Loading from "./Sections/Loading"

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    
    <section className='App'>
      {loading ? <Loading loading={loading}/> : <Router /> }
       
    </section>
  );
}

export default App;
