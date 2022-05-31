import "../../styles/projects.css";

const DiscordReminderBot = (props) => {
    return(
        <div className = "project-container">
            <div className = "project-title">
                <h1>Discord Reminder Bot</h1>
            </div>

            <div className="project-blurb">
                <p>
                    Although currently a WIP, this bot allows for dynamic reminders to be set for any Discord server, at any time. By making use of discords powerful
                    slash commands, the bot can automatically set the date from human language input, as well as decide who to notify, and which message to be displayed.
                    This allows for an extremely diverse set of instruction to be ran from just the command line.
                </p>
            </div>

            <div className="project-media">
                Maybe make a video but at least a pic?
            </div>
            <div className = "project-links">
                <a href = "https://github.com/gr812b/Discord-Reminder-Bot" target = "_blank" rel = "noopener noreferrer">GitHub</a>
                <a href = "https://discord-reminder-bot-gr812b.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Live Site</a>
            </div>

            <div className="project-background">
                The inspiration behind this project comes from an Overwatch team. We regularily practice against other teams and compete in tournaments, and I wanted to make
                a simple bot that would allow for dynamic reminding to be done, to ensure the entire team was prepared. 

            </div>

            <div className="project-technology">
                I made use of many different impactful technologies during this project, combining Discordjs as well as MangoDB.

                Discordjs was used to create the bot, with many extremely versatile applications. This is due to their extensive and powerful documentation and instruction set.
                It allowed for easy use of slash commands as well as interaction with discords own API.

                MongoDB is a dynamic database site that allows for easy storage of data. It allows for easy querying of data, and allows for easy manipulation of data. This,
                combined with its extensive documentation, allowed for a very dynamic and powerful database.

                Currently the bot retrrieces the data from the slash command, formats it and stores it into the database. It then moves onto queirying any alerts that its missed
                in order to catch any passed reminders. This will send all messages in a nicely formatted way, and also allow for the bot to be used in any discord server.
            </div>

            <div className="project-tocome">
                Ideally, I will finish this project to add the option to directly message people who are pinged if they do not react to confirm within time.
                It will then let me know if somoene has not confirmed their attendance.
            </div>

        </div>
    );
    
}

export default DiscordReminderBot;