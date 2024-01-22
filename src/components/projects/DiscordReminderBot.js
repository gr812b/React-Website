import "../../styles/projects.css";
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const slideImages = [
    "https://camo.githubusercontent.com/d55d8a7f07a103454ebb77b653d9600ce27e011f78395d9713b432c8c011c76a/68747470733a2f2f646973636f72642e6a732e6f72672f7374617469632f6c6f676f2e737667",
    'https://www.betacalendars.com/uploads/2021/02/2022-Calendar-scaled.jpg',
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'
  ];

const DiscordReminderBot = (props) => {
    return(
        <div className="project-container">
            <div className="project-intro">
                <div className="project-title">
                    Discord Reminder Bot
                </div>
                <div className="project-toptop">
                    <div className="project-blurb">
                        <p>
                            Although currently a WIP, this bot allows for dynamic reminders to be set for any Discord server, at any time. By making use of discords powerful
                            slash commands, the bot can automatically set the date from human language input, as well as decide who to notify, and which message to be displayed.
                            This allows for an extremely diverse set of instruction to be ran from just the command line.
                        </p>
                    </div>
                    <div className="project-links">
                        <div>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                            <a href="https://github.com/gr812b/Discord-Reminder-Bot" target="_blank" rel="noreferrer"> GitHub</a>
                        </div>
                        <div>
                            <a href="https://discobot-gr812b.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</a>
                        </div>
                    </div>
                </div>

                <div className="project-slides">
                    <Slide easing="ease">
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>This image was taken in order to stop world death</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>I am writing this random text in hopes it finds you well.</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>ATTENTION! Thanks :)</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>

            <div className="project-indepth">
                <div className="project-title">
                    <h1>Super In Depth Explanation!!</h1>
                </div>

                <h2>Background</h2>
                <div className="project-background">
                    <p>
                        The inspiration behind this project comes from an Overwatch team. We regularily practice against other teams and compete in tournaments, and I wanted to make
                        a simple bot that would allow for dynamic reminding to be done, to ensure the entire team was prepared.
                    </p>
                </div>

                <h2>Technology</h2>
                <div className="project-technology">
                    <p>
                        I made use of many different impactful technologies during this project, combining Discordjs as well as MangoDB.

                        Discordjs was used to create the bot, with many extremely versatile applications. This is due to their extensive and powerful documentation and instruction set.
                        It allowed for easy use of slash commands as well as interaction with discords own API.

                        MongoDB is a dynamic database site that allows for easy storage of data. It allows for easy querying of data, and allows for easy manipulation of data. This,
                        combined with its extensive documentation, allowed for a very dynamic and powerful database.

                        Currently the bot retrrieces the data from the slash command, formats it and stores it into the database. It then moves onto queirying any alerts that its missed
                        in order to catch any passed reminders. This will send all messages in a nicely formatted way, and also allow for the bot to be used in any discord server.

                    </p>
                </div>

                <div className="project-tocome">
                    Ideally, I will finish this project to add the option to directly message people who are pinged if they do not react to confirm within time.
                    It will then let me know if somoene has not confirmed their attendance.
                </div>
            </div>
        </div>
    );
    
}

export default DiscordReminderBot;