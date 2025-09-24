import user from './assets/user.svg'
import calendar from './assets/calendar.svg'

function ProjectCard(props){

    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div>
                <img src={user}></img>
                <span>8 members</span>
                <img src={calendar}></img>
                <span>2/15/2024</span>
            </div>
        </div>
    );
}
export default ProjectCard