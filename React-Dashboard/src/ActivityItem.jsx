import styles from './ActivityItem.module.css';

function ActivityItem(props) {
    return(
        <div className={styles.activity}>
            <p><strong>{props.action}</strong></p>
            <span className={styles.time}>{props.time}</span>
        </div>
    );
}

export default ActivityItem;