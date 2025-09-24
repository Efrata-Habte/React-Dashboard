import styles from './TeamMember.module.css';

function TeamMember(props) {
    return(
        <div className={styles.teamMember}>
            <div className={styles.avatar}>{props.avatar}</div>
            <div className={styles.memberInfo}>
                <h4>{props.name}</h4>
                <p>{props.role}</p>
            </div>
        </div>
    );
}

export default TeamMember;