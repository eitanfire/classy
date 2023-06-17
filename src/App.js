import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

// function Home() {
            
//   return <div>Hello World</div>;
// }

export default App;
