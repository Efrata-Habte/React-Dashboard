import styles from './TaskItem.module.css';

function TaskItem(props) {
    return(
        <div className={styles.taskItem}>
            <div className={styles.taskHeader}>
                <input type="checkbox" checked={props.completed} onChange={() => {}} />
                <h4>{props.title}</h4>
            </div>
            <p>{props.description}</p>
            <div className={styles.taskMeta}>
                <span className={styles.assignee}>{props.assignee}</span>
                <span className={styles.date}>{props.date}</span>
            </div>
        </div>
    );
}

export default TaskItem;