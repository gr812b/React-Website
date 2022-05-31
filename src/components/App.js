import '../styles/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Topbar from './Topbar';

const App = () => {

  const projects = [
    { name: "Self Driving Ball", image: "https://media.wired.com/photos/5954825c5578bd7594c46383/master/w_2560%2Cc_limit/bb88-story.jpg", id: 5 },
    { name: "Voicecraft", image: "https://via.placeholder.com/275x135", id: 4 },
    { name: "Discord Reminder Bot", image: "https://via.placeholder.com/275x135", id: 3 },
    { name: "Stock Market Prediction", image: "https://via.placeholder.com/275x135", id: 2 },
    { name: "Passive Exoforearm", image: "https://cdn.discordapp.com/attachments/817422927459778582/824736650181214209/unknown.png", id: 1 },
    { name: "project6", image: "https://via.placeholder.com/275x135", id: 0 },
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
