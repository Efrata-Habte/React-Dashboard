import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div>
                        <h3>Company</h3>
                        <ul className={styles.footerList} >
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>      
                    </div>
                    <div>
                        <h3>Product</h3>
                        <ul className={styles.footerList}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <ul className={styles.footerList}>
                            <li>Documentation</li>
                            <li>Blogs</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p>&copy; 2024 Task Management Dashboard. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer