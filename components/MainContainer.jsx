import Sidebar from "./Sidebar";
import styles from "../styles/MainContainer.module.css"

export default function MainContainer({ children }) {
    return(
        <div className={styles.container}>
            <div className={styles.leftside}>
            <Sidebar />
            </div>
            <div className={styles.rightside}>
            <div>{children}</div>
            </div>
        </div>
    )
}