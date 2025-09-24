import styles from './Stats_Card.module.css'


function StatsCard(props){

    return(
        <div className={styles.Card} style={{borderLeftColor: props.color}}>
            <h2 className={styles.title}>{props.title}</h2>
            <h1 className={styles.number}>{props.number}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default StatsCard