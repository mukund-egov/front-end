import './App.css';
import SOR from './SOR';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/sor" element={<SOR/>}/>
      {/* <div className="App"> */}
   
      {/* <SOR/> */}
    {/* </div> */}
    </Routes>
    </Router>
    
  );
}

export default App;
