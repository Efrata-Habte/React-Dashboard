import search from './assets/search.svg'
import bell from './assets/bell.svg'
import settings from './assets/settings.svg'
import styles from './Header.module.css'


function Header(){

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.headerContent}> 
                    <h1>Task Management Dashboard</h1> 
                    <nav>
                        <ul className={styles.navbar}>
                            <li><img className={styles.icons} src={search} alt="Search"></img></li>
                            <li><img className={styles.icons} src={bell} alt="Notification"></img></li>
                            <li><img className={styles.icons} src={settings} alt="Seting"></img></li>
                        </ul>
                    </nav>
                </div>     
            </div>
           
        </header>
    );
}

export default Header;