import '../styles/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Topbar from './Topbar';

const App = () => {

  const projects = [
    { name: "Self Driving Ball", image: "https://via.placeholder.com/325x150", id: 1 },
    { name: "Passive Exoforearm", image: "https://via.placeholder.com/325x150", id: 2 },
    { name: "Stock Market Prediction", image: "https://via.placeholder.com/325x150", id: 3 },
    { name: "Discord Reminder Bot", image: "https://via.placeholder.com/325x150", id: 4 },
    { name: "Voicecraft", image: "https://via.placeholder.com/325x150", id: 5 },
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
          {projects.map(project => {

            const ProjectElement = require('./projects/' + project.name.replace(/ /g, '')).default;

            return (
              <Route path={`/${project.name.replace(/ /g, '')}`} element={
                <ProjectElement />
              }/>
            )})}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
