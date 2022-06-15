import {HashRouter as Router} from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Voting from './components/Voting';
import Navbar from './components/Navbar'
import Logout from './components/Logout';
import { useState } from 'react';


const Page404 = () => {
  return <div>
    <h1>Error 404</h1>
  </div>  
}

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
      <Router>
      <Navbar isSubmitted ={isSubmitted} setIsSubmitted={setIsSubmitted} />
        <Routes>
          <Route path="/" element={<Home isSubmitted ={isSubmitted} setIsSubmitted={setIsSubmitted} />}>
          </Route>
          <Route path="/login" element={<Login isSubmitted ={isSubmitted} setIsSubmitted={setIsSubmitted} />}>
          </Route>
          <Route path="/logout" element={<Logout isSubmitted ={isSubmitted} setIsSubmitted={setIsSubmitted} />}>
          </Route>
          <Route path="/voting" element={<Voting />}>
          </Route>
          <Route path= "*" element={<Page404 />}>
          </Route>
        </Routes>
      </Router>

  );
}

export default App;