import user from './assets/user.svg';
import calendar from './assets/calendar.svg';
import styles from './ProjectCard.module.css';

function ProjectCard(props) {
  return (
    <div className={styles.Card}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className={styles.projectMeta}>
        <div className={styles.meta}>
            <img src={user} />
            <span>{props.member}</span>
        </div>
        <div className={styles.meta}>
            <img src={calendar} />
            <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
