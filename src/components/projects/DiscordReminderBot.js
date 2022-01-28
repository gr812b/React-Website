import "../../styles/projects.css";

const DiscordReminderBot = (props) => {
    return(
        <div className = "project-container">
            <div className = "project-title">
                <h1>Discord Reminder Bot</h1>
            </div>
            <div className = "project-description">
                A Discord bot that reminds you to do things.
            </div>
            <div className = "project-links">
                <a href = "https://github.com/gr812b/Discord-Reminder-Bot" target = "_blank" rel = "noopener noreferrer">GitHub</a>
                <a href = "https://discord-reminder-bot-gr812b.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Live Site</a>
            </div>
        </div>
    );
    
}

export default DiscordReminderBot;