import '../css/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Topbar from './Topbar';

function App() {

  const projects = [
    { name: "project1", image: "https://via.placeholder.com/325x150", id: 1 },
    { name: "project2", image: "https://via.placeholder.com/325x150", id: 2 },
    { name: "project3", image: "https://via.placeholder.com/325x150", id: 3 },
    { name: "project4", image: "https://via.placeholder.com/325x150", id: 4 },
    { name: "project5", image: "https://via.placeholder.com/325x150", id: 5 },
    { name: "project6", image: "https://via.placeholder.com/325x150", id: 6 },
  ]

  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage projects={projects}/>} />
          <Route path="*" element={
          <div>Error 404 - Not Found</div>
          }/>
          <Route exact path="/project1" element={
          <div>
            Project 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </div>} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
