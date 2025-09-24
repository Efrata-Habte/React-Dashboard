import styles from './NotificationItem.module.css';

function NotificationItem(props) {
    return(
        <div className={styles.notification}>
            <div className={styles.notificationHeader}>
                <span className={styles.type}>{props.type}</span>
            </div>
            <p>{props.message}</p>
            <span className={styles.time}>{props.time}</span>
        </div>
    );
}

export default NotificationItem;