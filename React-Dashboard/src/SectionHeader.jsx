import styles from './SectionHeader.module.css';

function SectionHeader(props){
    return(
        <div>
            <h1 className={styles.section}> {props.header} </h1>
        </div>
    );
}
export default SectionHeader;