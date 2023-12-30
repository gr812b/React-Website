import '../styles/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Topbar from './Topbar';
import Bottombar from "./Bottombar";

const App = () => {

  const projects = [
    { name: "Self Driving Ball", image: "https://media.wired.com/photos/5954825c5578bd7594c46383/master/w_2560%2Cc_limit/bb88-story.jpg", id: 5 },
    { name: "Voicecraft", image: "https://i.imgur.com/Em5IaYu.png", id: 4 },
    { name: "Discord Reminder Bot", image: "https://camo.githubusercontent.com/d55d8a7f07a103454ebb77b653d9600ce27e011f78395d9713b432c8c011c76a/68747470733a2f2f646973636f72642e6a732e6f72672f7374617469632f6c6f676f2e737667", id: 3 },
    { name: "Stock Market Prediction", image: "https://miro.medium.com/max/626/0*SaNg8uUaKCMQSS5g.jpg", id: 2 },
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
          <div style={{padding: "5rem 0 0 3rem"}}><h1>Error 404 - Not Found</h1></div>
          }/>

          {projects.map(project => {

            const ProjectElement = require('./projects/' + project.name.replace(/ /g, '')).default;

            return (
              <Route path={`/${project.name.replace(/ /g, '')}`} element={
                <ProjectElement />
              }/>
            )})}
          
        </Routes>
        <Bottombar />
      </div>
    </Router>
  );
}

export default App;
